// tailwind.config.cjs
module.exports = {
  darkMode: 'class', // we toggle dark mode via a CSS class
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // optional brand color
        sky: {
          600: '#0ea5e9',
          700: '#0369a1',
        },
      },
    },
  },
  plugins: [],
}
