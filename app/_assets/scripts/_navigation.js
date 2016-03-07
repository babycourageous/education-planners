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

    /*

    // when scroll distance > 0 (stickDistance)
    if ($(window).scrollTop() > stickDistance) {
      // have "fixed" position classes been added?
      if (!header.hasClass('header--fixed')) {
        header.addClass('header--fixed');
        $('body').addClass('body--fixed');
      }
    // when scroll distance is back to top
    } else if (scroll <= stickDistance) {
      // have "fixed" position classes been removed?
      if (header.hasClass('header--fixed')) {
        header.removeClass('header--fixed');
        $('body').removeClass('body--fixed');
      }
    }
    */

  });
});
