import vex from "vex-js";
import Flickity from "flickity";

const links = document.querySelectorAll("#js-modal-open");
links.forEach(item => {
  const content = document.querySelector(item.getAttribute("href"));
  const carousel = content.querySelector(".c-project__carousel");

  item.addEventListener("click", function(e) {
    e.preventDefault();

    const v = vex.open({
      unsafeContent: content.outerHTML,
      afterOpen: function() {
        document.querySelector('html').setAttribute('style', 'margin-right: 15px');
        document.querySelector('header').setAttribute('style', 'margin-right: 15px');
      },
      afterClose: function() {
        document.querySelector('html').setAttribute('style', '');
        document.querySelector('header').setAttribute('style', '');
      }
      //className: "vex-theme-wireframe" // Overwrites defaultOptions
    });

    // vanilla JS
    var cells = carousel.querySelectorAll(".c-project__item");
    var hasMultipleCells = cells && cells.length > 1;
    // init Flickity if mulitple cells
    if (hasMultipleCells) {
      const f = new Flickity(
        v.contentEl.querySelector(".c-project__carousel"),
        {
          // options
          contain: true,
          prevNextButtons: false,
          pageDots: true
        }
      );

      f.resize();
    }
  });
});

/*
// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('<h1>here\'s some content</h1>');

// add a button
modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

// open modal
modal.open();

// close modal
modal.close();
*/
