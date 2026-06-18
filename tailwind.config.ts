import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a09",
        paper: "#f1eee7",
        acid: "#c7ff32",
        orange: "#ff6b35",
      },
      fontFamily: {
        sans: ["var(--font-space)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
