const postcssimport = require('postcss-import')
const precss = require('precss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  // content: ['./src/**/*.html', './src/**/*.njk', './_11ty/**/*.js'],
  content: ['./_site/**/*.html'],
  whitelistPatterns: [/^flickity/],
  whitelistPatternsChildren: [/^flickity/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  },
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
