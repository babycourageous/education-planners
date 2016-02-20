'use strict';
var $ = require('jquery');
var slick = require('slick-carousel')

$(function() {
	console.log('slick!');
	$('.quote-carousel').slick({
		autoplay: false,
    pauseOnHover: true,
    dots: true,
    speed: 500,
    arrows: false,
  })
})