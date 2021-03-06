/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
     // "./nuxt.config.{js,ts}",
      "./*.vue"
    ],
    // darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };