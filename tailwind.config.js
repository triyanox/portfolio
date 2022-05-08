const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Generator', ...defaultTheme.fontFamily.sans],
      },
     
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
