import Flickity from "flickity";

var elem = document.querySelector("#js-slides");

var flkty = new Flickity(elem, {
  // options
  contain: true,
  prevNextButtons: false,
  pageDots: true,
  autoPlay: 8000
});
