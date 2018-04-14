import { content } from '../json/content.json'
import { largeIcons } from './icons.js'

const mainContent = document.querySelector('.js-content')

export default mainContent.innerHTML = content.map((step, i) => {
  let activeContent = ''

  if (i === 0) {
    activeContent = 'c-step-content--active' 
  } 

  return `
    <div class="c-step-content ${activeContent} js-step-content" data-id="${i}">
      <img class="c-icon--large" src="${largeIcons.blue[i]}">
      <div class="c-step-content__heading">
        <h1 class="c-step-content__heading--title">${step.title}</h1>
        <h5 class="c-step-content__heading--subtitle">${step.subtitle}</h5>
      </div>
      <p class="c-step-content__text">${step.text1}</p>
      <p class="c-step-content__text">${step.text2}</p>
    </div>
  `
}).join('')