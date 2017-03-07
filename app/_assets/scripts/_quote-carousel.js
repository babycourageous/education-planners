'use strict';
var $ = require('jquery');
var slick = require('slick-carousel');

$(function() {
	console.log('slick!');
	$('.carousel').slick({
		autoplay: true,
		autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: true,
    speed: 500,
    arrows: false,
  })
})
