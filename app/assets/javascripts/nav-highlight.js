const selectLink = (navLink) => {
  navLink.children[0].style.display = 'none'
  navLink.children[1].style.display = 'inline-block'
  navLink.style.color = '#36abe1'
  navLink.style.fontWeight = '600'
}

const deSelectLink = (navLink) => {
  navLink.children[0].style.display = 'inline-block'
  navLink.children[1].style.display = 'none'
  navLink.style.color = '#9ba0a4'
  navLink.style.fontWeight = '400'
}


let selectedStep = (function () {
  let currentStep = window.location.hash || '#step1'
  let selected = document.querySelectorAll(`a[href='${currentStep}']`)[0]
  let stepLink = selected.children[0]
  selectLink(stepLink)
  return stepLink
})()


const navLinks = [].slice.call(document.getElementsByClassName('nav-link'))

navLinks.forEach(link => {
  link.onclick = () => {
    if (selectedStep) deSelectLink(selectedStep)
    selectLink(link)
    selectedStep = link
  }
})
