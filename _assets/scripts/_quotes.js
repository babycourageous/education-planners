import Flickity from 'flickity'

var elem = document.querySelector('#js-slides')

if (elem) {
  var flkty = new Flickity(elem, {
    // options
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    autoPlay: 8000,
  })
}
