import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "soft-panel":
          "0 1px 2px rgba(15, 23, 42, 0.05), 0 24px 70px rgba(15, 23, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
