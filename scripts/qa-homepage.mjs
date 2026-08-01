import { spawn } from "node:child_process";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createServer } from "node:net";

const chromePath =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const targetUrl = process.env.QA_URL || "http://localhost:3000";
const outputDir = process.env.QA_OUTPUT_DIR || "/private/tmp";

const viewports = [
  { name: "desktop", width: 1440, height: 1200, mobile: false },
  { name: "mobile", width: 390, height: 1400, mobile: true }
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (address && typeof address === "object") {
          resolve(address.port);
        } else {
          reject(new Error("Could not allocate a local debugging port."));
        }
      });
    });
  });
}

async function waitForJson(url, timeoutMs = 10000) {
  const started = Date.now();
  let lastError;

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      lastError = error;
    }

    await delay(150);
  }

  throw lastError || new Error(`Timed out waiting for ${url}`);
}

async function createPageTarget(debuggingPort, pageUrl = "about:blank") {
  const baseUrl = `http://127.0.0.1:${debuggingPort}`;

  try {
    const response = await fetch(`${baseUrl}/json/new?${encodeURIComponent(pageUrl)}`, {
      method: "PUT"
    });
    if (response.ok) {
      return response.json();
    }
  } catch {
    // Fall through to the target list.
  }

  const targets = await waitForJson(`${baseUrl}/json/list`);
  const pageTarget = targets.find((target) => target.type === "page");
  if (!pageTarget) {
    throw new Error("Could not create or locate a Chrome page target.");
  }

  return pageTarget;
}

function createCdpClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  const pending = new Map();
  const events = new Map();
  let nextId = 1;

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);

    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        reject(new Error(message.error.message));
      } else {
        resolve(message.result);
      }
      return;
    }

    if (message.method && events.has(message.method)) {
      for (const listener of events.get(message.method)) {
        listener(message.params);
      }
    }
  });

  const open = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  function send(method, params = {}, timeoutMs = 15000) {
    const id = nextId++;
    socket.send(JSON.stringify({ id, method, params }));

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error(`Timed out sending ${method}`));
      }, timeoutMs);

      pending.set(id, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        }
      });
    });
  }

  function waitForEvent(method, timeoutMs = 10000) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Timed out waiting for ${method}`));
      }, timeoutMs);

      const listener = (params) => {
        clearTimeout(timeout);
        const nextListeners = (events.get(method) || []).filter(
          (item) => item !== listener
        );
        events.set(method, nextListeners);
        resolve(params);
      };

      events.set(method, [...(events.get(method) || []), listener]);
    });
  }

  function close() {
    socket.close();
  }

  return { close, open, send, waitForEvent };
}

async function waitForExpression(send, expression, timeoutMs = 12000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    const result = await send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true
    });

    if (result.result?.value) {
      return result.result.value;
    }

    await delay(250);
  }

  throw new Error(`Timed out waiting for expression: ${expression}`);
}

async function evaluate(send, expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });

  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text || "Runtime evaluation failed.");
  }

  return result.result.value;
}

async function runViewport(send, viewport) {
  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.mobile
  });

  await waitForExpression(send, `document.readyState !== "loading"`, 12000);

  await waitForExpression(
    send,
    `(() => {
      const h1 = document.querySelector("h1");
      if (!h1) return false;
      const rect = h1.getBoundingClientRect();
      let opacity = 1;
      for (let element = h1; element; element = element.parentElement) {
        opacity *= Number(getComputedStyle(element).opacity);
      }
      return rect.width > 120 &&
        rect.height > 40 &&
        opacity > 0.95;
    })()`
  );

  await evaluate(
    send,
    `Promise.all([...document.images].map((image) => {
      if (image.complete) return true;
      return new Promise((resolve) => {
        const done = () => resolve(true);
        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
        setTimeout(done, 2500);
      });
    }))`
  );

  await delay(800);

  await evaluate(
    send,
    `new Promise((resolve) => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      let y = 0;

      const step = () => {
        window.scrollTo(0, y);
        y += Math.max(260, Math.floor(window.innerHeight * 0.72));
        if (y <= maxScroll + window.innerHeight) {
          setTimeout(step, 180);
        } else {
          document.documentElement.style.setProperty(
            "scroll-behavior",
            "auto",
            "important"
          );
          document.body.style.setProperty("scroll-behavior", "auto", "important");
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          window.scrollTo(0, 0);
          requestAnimationFrame(() => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            window.scrollTo(0, 0);
            setTimeout(resolve, 450);
          });
        }
      };

      step();
    })`
  );

  const checks = await evaluate(
    send,
    `(() => {
      const h1 = document.querySelector("h1");
      const canvas = document.querySelector("canvas");
      const gl = canvas && (canvas.getContext("webgl2") || canvas.getContext("webgl"));
      const canvasResult = {
        ok: false,
        reason: canvas ? "no painted pixels sampled" : "missing canvas",
        width: canvas ? canvas.width : 0,
        height: canvas ? canvas.height : 0,
        coloredSamples: 0
      };

      if (gl) {
        gl.finish();
        const width = gl.drawingBufferWidth;
        const height = gl.drawingBufferHeight;
        const pixel = new Uint8Array(4);
        let coloredSamples = 0;
        let totalSamples = 0;
        const stepX = Math.max(1, Math.floor(width / 18));
        const stepY = Math.max(1, Math.floor(height / 10));

        for (let y = stepY; y < height - stepY; y += stepY) {
          for (let x = stepX; x < width - stepX; x += stepX) {
            gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
            totalSamples += 1;
            if (pixel[3] > 4 && pixel[0] + pixel[1] + pixel[2] > 20) {
              coloredSamples += 1;
            }
          }
        }

        canvasResult.ok = coloredSamples > 4;
        canvasResult.reason = canvasResult.ok ? "painted" : canvasResult.reason;
        canvasResult.width = width;
        canvasResult.height = height;
        canvasResult.coloredSamples = coloredSamples;
        canvasResult.totalSamples = totalSamples;
      } else if (canvas) {
        canvasResult.reason = "missing webgl context";
      }

      const brokenImages = [...document.images]
        .filter((image) => image.naturalWidth === 0)
        .map((image) => image.alt || image.src);

      return {
        title: document.title,
        viewport: { width: window.innerWidth, height: window.innerHeight },
        horizontalOverflow:
          document.documentElement.scrollWidth - document.documentElement.clientWidth,
        h1: h1 ? {
          text: h1.textContent,
          width: Math.round(h1.getBoundingClientRect().width),
          height: Math.round(h1.getBoundingClientRect().height)
        } : null,
        imageCount: document.images.length,
        brokenImages,
        canvas: canvasResult
      };
    })()`
  );

  await waitForExpression(send, `Math.abs(window.scrollY) < 2`, 5000);

  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false
  });
  const screenshotPath = join(outputDir, `yuva-home-${viewport.name}.png`);
  await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

  if (checks.horizontalOverflow > 1) {
    throw new Error(
      `${viewport.name} has horizontal overflow: ${checks.horizontalOverflow}px`
    );
  }

  if (!checks.h1 || checks.h1.width > checks.viewport.width - 16) {
    throw new Error(
      `${viewport.name} h1 exceeds viewport: ${checks.h1?.width || 0}px / ${checks.viewport.width}px`
    );
  }

  if (checks.brokenImages.length > 0) {
    throw new Error(
      `${viewport.name} has broken images: ${checks.brokenImages.join(", ")}`
    );
  }

  if (!checks.canvas.ok) {
    throw new Error(
      `${viewport.name} canvas failed: ${JSON.stringify(checks.canvas)}`
    );
  }

  return { ...checks, screenshotPath };
}

async function main() {
  const debuggingPort = await getFreePort();
  const profileDir = await mkdtemp(join(tmpdir(), "yuva-chrome-"));
  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-sync",
      "--enable-webgl",
      "--enable-unsafe-swiftshader",
      "--hide-scrollbars",
      "--ignore-gpu-blocklist",
      "--use-angle=swiftshader",
      `--remote-debugging-port=${debuggingPort}`,
      `--user-data-dir=${profileDir}`,
      "about:blank"
    ],
    { stdio: ["ignore", "ignore", "pipe"] }
  );

  chrome.stderr.on("data", (chunk) => {
    const text = chunk.toString();
    if (!text.includes("DevTools listening")) {
      process.stderr.write(text);
    }
  });

  try {
    await waitForJson(`http://127.0.0.1:${debuggingPort}/json/version`);
    const results = [];

    for (const viewport of viewports) {
      const pageTarget = await createPageTarget(debuggingPort, targetUrl);
      const client = createCdpClient(pageTarget.webSocketDebuggerUrl);
      await client.open;
      await client.send("Page.enable");
      await client.send("Runtime.enable");
      results.push(await runViewport(client.send, viewport));
      client.close();
    }

    console.log(JSON.stringify({ url: targetUrl, results }, null, 2));
  } finally {
    chrome.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
