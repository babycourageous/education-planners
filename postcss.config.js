const postcssimport = require('postcss-import')
const precss = require('precss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.njk', './_11ty/**/*.js'],
  // content: ['./_site/**/*.html'],
  whitelistPatterns: [/^flickity/],
  whitelistPatternsChildren: [/^flickity/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    postcssimport,
    precss,
    tailwindcss,
    process.env.NODE_ENV === 'production' && autoprefixer,
    process.env.NODE_ENV === 'production' && cssnano,
    process.env.NODE_ENV === 'production' && purgecss,
  ],
}
