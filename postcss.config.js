const postcssimport = require('postcss-import')
const precss = require('precss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    postcssimport,
    precss,
    tailwindcss,
    process.env.NODE_ENV === 'production' && autoprefixer,
    process.env.NODE_ENV === 'production' && cssnano,
  ],
}
