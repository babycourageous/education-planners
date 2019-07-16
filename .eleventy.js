const marked = require('marked')

module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
  eleventyConfig.addLayoutAlias('project', 'layouts/project.njk')
  eleventyConfig.addLayoutAlias('resume', 'layouts/resume.njk')

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
    const stuff = collection.getFilteredByGlob('_team/*.md')
    return stuff
  })

  //eleventyConfig.addPassthroughCopy('admin')

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
