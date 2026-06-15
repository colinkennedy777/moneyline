import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0d2410",
          900: "#1a3a1f",
          800: "#243d28",
          700: "#2f5234",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          dark: "#A07830",
          muted: "#C9A84C33",
        },
        cream: "#FAFAF8",
        navy: {
          DEFAULT: "#2C6F34",
          light: "#3d8a47",
          dark: "#1a4020",
        },
        lightgray: "#F1F5F9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(15,23,42,0.10)",
        "card-lg": "0 12px 40px -8px rgba(15,23,42,0.18)",
        gold: "0 8px 24px -4px rgba(201,168,76,0.40)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)",
        "slate-gradient": "linear-gradient(135deg, #0d2410 0%, #1a3a1f 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
