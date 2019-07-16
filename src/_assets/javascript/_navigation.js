import SmoothScroll from 'smooth-scroll'
import gumshoe from 'gumshoejs'

// store references to header elements
const header = document.querySelector('header[role=banner]')
const nav = document.querySelector('nav')

// reference to nav ul
const topMenu = document.querySelector('#js-navigation-menu')

// All list link items
const menuItems = topMenu.querySelectorAll('a')
const menuToggle = document.querySelector('#js-mobile-menu')

// navigation scrolling and highlighting variables
let lastId

const scroll = new SmoothScroll('nav a[href*="#"]', {
  offset: header.offsetHeight, //() => document.querySelector("header").offsetHeight
})
gumshoe.init({ activeClass: 'text-blue-dark' })
/*
// Bind to scroll
window.addEventListener("scroll", function() {
  const scroll = window.scrollY;

  // SHRINKING FUNCTIONALITY
  if (scroll >= 40) {
    //console.log('down')
    header.classList.add("is-small");
    nav.classList.add("is-small");
  } else {
    //console.log('up');
    header.classList.remove("is-small");
    nav.classList.remove("is-small");
  }
});



menuToggle.addEventListener('click', function() {
  topMenu.classList.toggle('open');
});

topMenu.addEventListener('click', function(e) {
  if(e.target.className === 'navigation__link') {
    this.classList.remove('open');
  }
});
*/
