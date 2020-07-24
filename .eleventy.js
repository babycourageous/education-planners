module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/css/*', '_site/javascript/*'],
  })

  eleventyConfig.addFilter('md', require('./_11ty/filters/md'))
  eleventyConfig.addFilter('mdli', require('./_11ty/filters/mdli'))
  // {{ array | where: key,value }}
  eleventyConfig.addFilter('where', require('./_11ty/filters/where'))

  eleventyConfig.addPairedShortcode(
    'blurb',
    require('./_11ty/shortcodes/blurb')
  )

  eleventyConfig.addCollection('team', (collection) => {
    return collection
      .getFilteredByGlob('src/team/*.md')
      .filter((member) => member.data.past !== true)
      .sort((a, b) => {
        if (a.data.name > b.data.name) return 1
        else if (a.data.name < b.data.name) return -1
        else return 0
      })
  })

  eleventyConfig.addCollection('services', (collection) => {
    const items = collection
      .getFilteredByGlob('src/services/*.md')
      .filter((service) => service.data.past !== true)

    const sorted = items.sort((a, b) => {
      return a.data.order - b.data.order
    })

    return sorted
  })

  eleventyConfig.addPassthroughCopy({ 'src/_assets/images': 'assets/images' })
  eleventyConfig.addPassthroughCopy({ 'src/_assets/pdf': 'assets/pdf' })
  eleventyConfig.addPassthroughCopy({ 'src/_assets/favicons/': '/' })

  return {
    dir: {
      input: 'src', // Equivalent to Jekyll's source property
      output: './_site', // Equivalent to Jekyll's destination property
      layouts: '_layouts',
    },
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
  }
}
