function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function adjustedGoToHash(hash) {
  setTimeout(() => {
    const targetElement = document.querySelector(`#${hash}`)
    const headerOffset = 100
    const rect = targetElement.getBoundingClientRect()
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const targetY = rect.top + bodyScrollTop

    const targetAdjustment = targetY - headerOffset

    if (targetElement) {
      //smoothScroll.animateScroll(targetAdjustment) //(targetAdjustment)
      window.scrollTo(0, targetAdjustment)
    }
  })
}

ready(() => {
  if (window.location.pathname === '/portfolio.html') {
    const hash = window.location.hash.slice(1)
    if (window.location.hash) {
      adjustedGoToHash(hash)
    }
  }
})

/*
if (window.location.pathname === '/portfolio.html') {
  const hash = window.location.hash.slice(1)
    const elem = document.getElementById(hash)
    console.log('ELEM', elem)

    // add scroll offset to fragment target (if there is one)
    // https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header/13067009#13067009
    // https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors/35452468#35452468
    // https://stackoverflow.com/questions/32348329/offsetting-a-hash-tag-link-to-adjust-for-fixed-header-when-typing-url-in-browser/32349217#32349217
    const delayedFragmentTargetOffset = () => {
      const rect = elem.getBoundingClientRect()
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      window.scrollTo(0, rect.top + bodyScrollTop - 100)
    }
    setTimeout(delayedFragmentTargetOffset)
  }
}
*/
