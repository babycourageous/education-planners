const marked = require('marked')

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('md', function(value) {
    let result
    try {
      result = marked(value).trim()
      //result = result.replace(/^<p>|<\/p>$/g, '')
      return result
    } catch (e) {
      console.error('Error processing markdown:', e)
      return value
    }
  })

  // {{ array | where: key,value }}
  eleventyConfig.addFilter('where', function(array, key, value) {    
    return array.filter(item => item.data[key] === value)
  })

  eleventyConfig.addCollection('team', collection => {
    return collection.getFilteredByGlob('src/team/*.md')
  })

  eleventyConfig.addCollection('services', collection => {
    const items = collection.getFilteredByGlob('src/services/*.md')
    const sorted = items.sort((a, b) => {
      return a.data.order - b.data.order
    })

    return sorted
  })

  return {
    dir: {
      input: 'src', // Equivalent to Jekyll's source property
      output: './_site', // Equivalent to Jekyll's destination property
      layouts: "_layouts"
    },
    htmlTemplateEngine: 'njk',    
    templateFormats: ['html', 'njk', 'md'],
  }
}
