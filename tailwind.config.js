/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'black': '#1A202C',
        'dark-grey': '#FAFAFA',
        'light-grey': '#CBD5E0',
        'primary': '#0249AC',
        'success': '#22C55E'
      }
    },
  },
  plugins: [],
}

