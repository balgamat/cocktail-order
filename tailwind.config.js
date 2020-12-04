module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Abril Fatface'],
      display: ['Pacifico'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
