/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      height: {
        'sc-25': '30vh',
      },
      width: {
        'sc-50': '50vw',
      }
    },
  },
  plugins: [],
}

