/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],

  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": { width: "100%" },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": { width: "100%" },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": { width: "100%" },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": { width: "100%" },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": { width: "100%" },
          },
        },
      ]);
    }),
  ],
};