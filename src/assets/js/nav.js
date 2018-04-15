import { content } from '../json/content.json'
import { smallIcons } from './icons.js'

const nav = document.querySelector('.js-nav')
const iconFilePath = './assets/media/'

nav.innerHTML = content.map((step, i) => {
  let classList = 'c-step js-step'
  let icon = smallIcons.gray[i]

  if (i === 0) {
    classList = 'c-step c-step--active js-step'
    icon = smallIcons.blue[i]
  } 

  return `
    <div class="${classList}" data-id=${i}>
      <h3 class="c-step__title">${step.title}</h3>
      <img class="c-icon--small" src="${iconFilePath + icon}">
    </div>
  `
}).join('')

// Add click listener to each step
Array.from(document.querySelectorAll('.js-step'))
  .forEach(step => step.addEventListener('click', toggleStep))

function toggleStep(e) {
  const currentStep = document.querySelector('.c-step--active')
  const currentStepId = currentStep.dataset.id
  const chosenStep = e.target === e.currentTarget ? e.target : e.target.parentNode
  const chosenStepId = chosenStep.dataset.id

  // Remove active class from current step
  currentStep.classList.remove('c-step--active')
  // Change icon on current step
  currentStep.childNodes[3].src = `${iconFilePath + smallIcons.gray[currentStepId]}`
  // Add active class to selected step
  chosenStep.classList.add('c-step--active')
  // Change icon on selected step
  chosenStep.childNodes[3].src = `${iconFilePath + smallIcons.blue[chosenStepId]}`

  // Change corresponding content
  Array.from(document.querySelectorAll('.js-step-content'))
    .forEach(step => {
      if (chosenStepId === step.dataset.id) {
        const currentStepContent = document.querySelector('.c-step-content--active')
        // Remove active class from current step content
        currentStepContent.classList.remove('c-step-content--active')
        // Add active class to selected step content
        step.classList.add('c-step-content--active')
      }
    })
}