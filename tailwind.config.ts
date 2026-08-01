import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "var(--sand)",
        "sand-deep": "var(--sand-deep)",
        clay: "var(--clay)",
        bronze: "var(--bronze)",
        "bronze-deep": "var(--bronze-deep)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        hairline: "var(--hairline)",
        glass: "var(--glass)",
        "glass-strong": "var(--glass-strong)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-panel":
          "0 1px 2px rgba(15, 23, 42, 0.05), 0 24px 70px rgba(15, 23, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
