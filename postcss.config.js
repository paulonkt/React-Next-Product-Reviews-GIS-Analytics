const tailwind = require('@tailwindcss/postcss')();

module.exports = {
  plugins: {
    [tailwind.postcssPlugin]: tailwind,
    autoprefixer: {},
  },
};