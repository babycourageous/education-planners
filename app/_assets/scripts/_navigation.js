'use strict';
var $ = require('jquery');

$(document).ready(function() {
  var header = $('header[role=banner]');
  var nav = $('nav');

  $(window).scroll(function() {
    var stickDistance = 0;
    var scroll = $(window).scrollTop();

    if ( scroll >= 40 ) {
      header.addClass('header--small');
      nav.addClass('navigation--small');
    } else {
      header.removeClass('header--small');
      nav.removeClass('navigation--small');
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
