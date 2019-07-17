import Flickity from 'flickity'

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
