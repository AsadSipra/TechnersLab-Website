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
        bg: "#ffffff",
        surface: "#f8f8f6",
        "surface-2": "#f0f0ec",
        border: "rgba(0,0,0,0.08)",
        text: "#0a0a0a",
        muted: "#6b6b6b",
        faint: "#a8a8a8",
        accent: "#5b3ff8",
        "accent-2": "#00c2a8",
        "accent-3": "#ff6b35",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        "scale-in": "scale-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;