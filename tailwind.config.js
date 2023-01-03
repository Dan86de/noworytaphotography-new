/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      brand: "rgb(var(--color-brand) / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        headings: ["ff-market-web", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
