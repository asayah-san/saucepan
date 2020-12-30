module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-sauce': 'repeat(auto-fill, minmax(196px, 1fr))',
      },
      gridTemplateRows: {
        'auto-sauce': 'repeat(auto-fit, 196px)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
