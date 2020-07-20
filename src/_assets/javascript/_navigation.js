import SmoothScroll from 'smooth-scroll'
import Gumshoe from 'gumshoejs'

// store references to header elements
const header = document.querySelector('header')

SmoothScroll('nav a[href*="#"]', {
  offset: header.offsetHeight, // () => document.querySelector("header").offsetHeight
})

Gumshoe('#js-navigation-menu a', {
  offset() {
    return header.getBoundingClientRect().height
  },
})
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
