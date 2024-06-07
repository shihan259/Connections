import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "520px" },
      },
      fontSize: {
        'scale': "calc(0.2rem + 2vw)"
        // scalesm: "calc(40% + 1vw);",
        // scalelg: "calc(50% + 1vw);"
      },
      colors: {
        green: "#A0C35A",
        blue: "#B0C4EF",
        yellow: "#F9DF6D",
        purple: "#BA81C5",
        wordButton: "#EFEFE6",
        wordButtonActive: "#5A594E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-5px)" },
          "40%, 80%": { transform: "translateX(5px)" },
        },
        popOut: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        popOut: "popOut 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
  // Ensure that the classes can render dynamically
  safelist: ["bg-yellow", "bg-green", "bg-blue", "bg-purple"],
};
export default config;
