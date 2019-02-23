import Dialog from 'a11y-dialog-component'
import Flickity from 'flickity'
if (document.getElementById('work')) {
  const portfolio = document.querySelector('#js-portfolio')
  const links = portfolio.querySelectorAll('a[data-target]')
  const carousels = portfolio.querySelectorAll('.js-project-carousel')
  for (var i = 0, len = carousels.length; i < len; i++) {
    const galleryElem = carousels[i]
    new Flickity(galleryElem, {
      // options
      contain: true,
      prevNextButtons: false,
      //     pageDots: true,
    })
  }
  let currentProject
  let currentProjectHome

  links.forEach(link => {
    const targetID = link.dataset.target

    const d = new Dialog(`#${targetID}`, {
      closingSelector: '.js-dialog-close',
      backdropSelector: `#${targetID}`,
      labelledbyId: `${targetID}-title`,
    })

    link.addEventListener('click', function(e) {
      e.preventDefault()

      currentProjectHome = e.currentTarget.parentNode.parentNode
      currentProject = portfolio.querySelector(`#${targetID}`)

      const carousel = currentProject.querySelector('.js-project-carousel')
      const cells = carousel.querySelectorAll('.js-project-item')
      const hasMultipleCells = cells && cells.length > 1

      d.open()
    })
  })
}
