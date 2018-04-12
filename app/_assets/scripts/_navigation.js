import SmoothScroll from "smooth-scroll";

// store references to header elements
const header = document.querySelector("header[role=banner]");
const nav = document.querySelector("nav");

// navigation scrolling and highlighting variables
let lastId;

// reference to nav ul
const topMenu = document.querySelector("#js-navigation-menu");

// use 60px base instead of calculating on load because of shrinking nav
const topMenuHeight = 59; //topMenu.outerHeight(),

// All list link items
const menuItems = topMenu.querySelectorAll("a");

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

const scroll = new SmoothScroll('nav a[href*="#"]', {
  offset: topMenuHeight //() => document.querySelector("header").offsetHeight
});
