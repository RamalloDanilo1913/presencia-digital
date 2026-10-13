import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C2B39",
          deep: "#15212C",
          card: "#24384A",
          line: "#33495C",
        },
        gold: {
          DEFAULT: "#D9A441",
          soft: "#E8BC66",
        },
        mist: "#C9D2D8",
        slate2: "#9FB0BC",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "80%, 100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        ping2: "ping2 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
