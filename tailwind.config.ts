import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#073375",
          navyDark: "#052657",
          blue: "#0165FF",
          skyblue: "#018CFF",
          light: "#EAF2FF",
        },
        ink: {
          900: "#0A1628",
          800: "#101B30",
          700: "#1B2B45",
        },
        dark: {
          bg: "#0C0C0C",
          surface: "#121316",
          card: "#17181D",
          border: "rgba(255, 255, 255, 0.08)",
          subtle: "#1F2128",
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Inter",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Kanit",
          "'Segoe UI'",
          "-apple-system",
          "Inter",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        floatSlow: "floatSlow 7s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(7,51,117,0.12)",
        card: "0 2px 12px -2px rgba(7,51,117,0.08)",
        xs: "0 1px 3px 0 rgba(7,51,117,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
