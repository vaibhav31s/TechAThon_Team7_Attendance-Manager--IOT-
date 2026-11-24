/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/dist/**/*.{js,mjs}",
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
    require("flowbite-react/plugin/tailwindcss"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": { width: "100%" },
      });
    }),
  ],
};