/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      didact: ["Didact Gothic", "sans-serif"],
      merienda: ["Merienda", "cursive"],
    },
  },
  plugins: [],
};
