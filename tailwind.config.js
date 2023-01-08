/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// {
//   family: `Montserrat`,
//       subsets: [`latin-ext`],
//     variants: [`300`, `400`, `700`],
// },

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
      "3xl": "1700px",
    },
    colors: {
      ...colors,
      brand: "rgb(var(--color-brand) / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        headings: ["ff-market-web", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
