import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0E1A",
        surface: "#111827",
        "surface-2": "#1A2235",
        primary: "#7C3AED",
        "primary-light": "#A855F7",
        highlight: "#06B6D4",
        "text-main": "#F8FAFC",
        "text-muted": "#94A3B8",
        border: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
    },
  },
  plugins: [],
};

export default config;