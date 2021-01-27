const marked = require('marked')

module.exports = function mdli(value) {
  let result
  try {
    result = marked(value).trim()
    result = result.replace(
      /<li>/g,
      '<li class="flex items-start"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="block ml-1 text-base leading-normal">'
    )
    return result
  } catch (e) {
    console.error('Error processing markdown:', e)
    return value
  }
}
