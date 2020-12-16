const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'btn-light-green': '#E4FFE7',
        'btn-bright-green': '#22FF06',
      },
      visibility: ['hover', 'focus'],
    },
  },
  variants: {},
  plugins: [],
}
