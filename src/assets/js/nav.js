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

Array.from(document.querySelectorAll('.js-step'))
  .forEach(step => step.addEventListener('click', toggleStep))

function toggleStep(e) {
  const currentStep = document.querySelector('.c-step--active')
  const currentStepId = currentStep.dataset.id
  const chosenStep = e.target === e.currentTarget ? e.target : e.target.parentNode
  const chosenStepId = chosenStep.dataset.id

  currentStep.classList.remove('c-step--active')
  chosenStep.classList.add('c-step--active')
  currentStep.childNodes[3].src = `${iconFilePath + smallIcons.gray[currentStepId]}`
  chosenStep.childNodes[3].src = `${iconFilePath + smallIcons.blue[chosenStepId]}`

  Array.from(document.querySelectorAll('.js-step-content'))
    .forEach(step => {
      if (chosenStepId === step.dataset.id) {
        const currentStepContent = document.querySelector('.c-step-content--active')
        currentStepContent.classList.remove('c-step-content--active')
        step.classList.add('c-step-content--active')
      }
    })
}