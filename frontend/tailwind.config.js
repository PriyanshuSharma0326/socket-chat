/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': "'Open Sans', sans-serif",
        'roboto-sans': "'Roboto Serif', serif"
      },
      lineHeight: {
        '0': '0rem',
      },
    },
  },
  plugins: [],
}

