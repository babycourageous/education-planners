'use strict';
var $ = require('jquery');
var slick = require('slick-carousel');
require('magnific-popup');

$(document).ready(function() {
  $('.project__link').magnificPopup({
    type:'inline',
    midClick: true,
    closeBtnInside: false,
    callbacks: {
      open: function() {
        this.content.find('.project__carousel').slick({
          setPosition: 0,
          autoplay: false,
          pauseOnHover: true,
          dots: true,
          speed: 500,
          arrows: false,
          dotsClass: 'project__dots',
        })
      },
      close: function() {
        this.content.find('.project__carousel').slick('unslick');
      }
    }
    /*callbacks: {
      open: function() {
        // Will fire when this exact popup is opened
        // this - is Magnific Popup object
        console.log(this.content);
        //console.log(this.st.el);

        this.content.slick({
          setPosition: 0,
          autoplay: false,
          pauseOnHover: true,
          dots: true,
          speed: 500,
          arrows: false,
          dotsClass: 'project__dots',
        })
      },
      close: function() {
        this.content.slick('unslick');
      }
    }*/
  });

});
