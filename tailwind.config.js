/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: 'rgb(var(--color-brand) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}
