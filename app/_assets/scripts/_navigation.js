'use strict';
var $ = require('jquery');

// store references to header elements
var header = $('header[role=banner]');
var nav = $('nav');

// navigation scrolling and highlighting variables
var lastId,
    // reference to nav ul
    topMenu = $("#js-navigation-menu"),
    // use 60px base instead of calculating on load because of shrinking nav
    topMenuHeight = 59, //topMenu.outerHeight(),
    // All list link items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});


// Bind to scroll
$(window).scroll(function(){
  // SHRINKING FUNCTIONALITY
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
  // HIGHLIGHTING ACTIVE AREA FUNCTIONALITY
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function(){
   if ($(this).offset().top < fromTop)
     return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
     lastId = id;
     // Set/remove active class
     //console.log(menuItems.removeClass('navigation__link--active'));
     menuItems
       .removeClass("navigation__link--active")
       .filter("[href='#"+id+"']").addClass("navigation__link--active");
  }
});


// menu toggle for mobile
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
