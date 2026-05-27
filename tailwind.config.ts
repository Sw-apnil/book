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
        midnight: {
          DEFAULT: "#0B1028",
          deep: "#090D22",
          darker: "#060918",
        },
        moonlit: "#233A75",
        paper: "#F4F1EA",
        amber: {
          DEFAULT: "#E59A5C",
          light: "#F0B07A",
        },
        rose: {
          dusty: "#D97A87",
        },
        rain: "#596A92",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "breathe": "breathe 15s ease-in-out infinite",
        "drift": "drift 20s linear infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "drift": {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-20px) translateX(10px)" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
