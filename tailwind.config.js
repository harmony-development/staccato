const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.amber,
        harmonydark: {
          50: '#f4f4f5',
          100: '#e9e9eb',
          200: '#c7c7cc',
          300: '#a5a5ad',
          400: '#626270',
          500: '#1f1e33',
          600: '#1c1b2e',
          700: '#171726',
          800: '#13121f',
          900: '#0f0f19',
        },
      },
      darkMode: 'class',
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
