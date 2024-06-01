import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wordButton: '#EFEFE6',
        wordButtonActive: '#5A594E',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        },
        moveToFirst: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(-100% * 3), calc(-100% * 3))' },
        },
        moveToSecond: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(-100% * 3), calc(-100% * 2))' },
        },
        moveToThird: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(-100% * 3), -100%)' },
        },
        moveToFourth: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(-100% * 3), 0)' },
        },
        // Define reverse animations for buttons moving back to initial positions
        moveToInitial: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(100% * 3), calc(100% * 3))' },
        },
        moveToSecondInitial: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(100% * 3), calc(100% * 2))' },
        },
        moveToThirdInitial: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(100% * 3), 100%)' },
        },
        moveToFourthInitial: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(calc(100% * 3), 0)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        // Swapping animations
        moveToFirst: 'moveToFirst 0.3s ease-in-out',
        moveToSecond: 'moveToSecond 0.3s ease-in-out',
        moveToThird: 'moveToThird 0.3s ease-in-out',
        moveToFourth: 'moveToFourth 0.3s ease-in-out',
        // Reverse animations
        moveToInitial: 'moveToInitial 0.3s ease-in-out',
        moveToSecondInitial: 'moveToSecondInitial 0.3s ease-in-out',
        moveToThirdInitial: 'moveToThirdInitial 0.3s ease-in-out',
        moveToFourthInitial: 'moveToFourthInitial 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
