/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}",
  "./src/*.{html,js, jsx, ts, tsx}",
  "./src/pages/*.{html,js,jsx, ts, tsx}",
  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Varela: ['Varela', "sans-serif"],
      },
    },
  },
  plugins: [],
}

