/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configured so that I have added the paths to all of my template files:
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      darkgray: "#2B303B",
      red: "#d0312d",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
