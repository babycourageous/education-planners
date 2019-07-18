import Flickity from 'flickity'

function initQuotes() {
  if (!document.querySelector('.c-quotes')) {
    return
  }

  const elem = document.querySelector('#js-slides')

  if (elem) {
    const flkty = new Flickity(elem, {
      // options
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      autoPlay: 8000,
    })
  }
}

export default initQuotes
