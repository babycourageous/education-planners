import Dialog from 'a11y-dialog-component'
import Flickity from 'flickity'

if (!document.getElementById('work')) {
  console.log('not index')
}

const portfolio = document.querySelector('#js-portfolio')
const links = portfolio.querySelectorAll('a[data-target]')
const carousels = portfolio.querySelectorAll('.js-project-carousel')
const modals = document.querySelectorAll('.c-modal')

let currentProject
let currentProjectHome

links.forEach(link => {
  const targetID = link.dataset.target

  const d = new Dialog(`#${targetID}`, {
    closingSelector: '.js-dialog-close',
    backdropSelector: `#${targetID}`,
    labelledbyId: `${targetID}-title`,
  })

  modals.forEach(modal => {
    modal.classList.remove('invisible')
  })

  link.addEventListener('click', e => {
    e.preventDefault()

    currentProjectHome = e.currentTarget.parentNode.parentNode
    currentProject = portfolio.querySelector(`#${targetID}`)

    const carousel = currentProject.querySelector('.js-project-carousel')
    const cells = carousel.querySelectorAll('.js-project-item')
    const hasMultipleCells = cells && cells.length > 1

    d.open()
  })
})

/* for (let i = 0, len = carousels.length; i < len; i++) {
    const galleryElem = carousels[i]
    const flickity = new Flickity(galleryElem, {
      // options
      contain: true,
      prevNextButtons: false,
      //     pageDots: true,
    })
  } */

carousels.forEach(item => {
  const flickity = new Flickity(item, {
    contain: true,
    prevNextButtons: false,
  })
})
