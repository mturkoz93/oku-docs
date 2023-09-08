const { grayOA, oku, blck } = require('./colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...oku,
        ...grayOA,
        ...blck,
      },
    },
  },
  plugins: [],
}
