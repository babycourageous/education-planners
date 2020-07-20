const marked = require('marked')

module.exports = function md(value) {
  let result
  try {
    result = marked(value).trim()
    // result = result.replace(/^<p>|<\/p>$/g, '')
    return result
  } catch (e) {
    console.error('Error processing markdown:', e)
    return value
  }
}
