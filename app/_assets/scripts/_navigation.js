'use strict';
var $ = require('jquery');

$(document).ready(function() {
  var header = $('header[role=banner]');

  $(window).scroll(function() {
    var stickDistance = 0;
    var scroll = $(window).scrollTop();

    if ( scroll >= 40 ) {
      header.addClass('smaller');
      /*$('body').addClass('shrink');*/
    } else {
      header.removeClass('smaller');
      /*$('body').removeClass('shrink');*/
    }
  });

  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    console.log('nav click');

    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

});
