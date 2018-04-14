import { content } from '../json/content.json'
import { largeIcons, smallIcons } from './icons.js'

const aside = document.querySelector('.js-aside')

export default aside.innerHTML = content.map((step, i) => {
  return `
    <div class="c-step">
      <h3 class="c-step__title">${step.title}</h3>
      <img class="c-icon--small" src="${smallIcons.gray[i]}">
    </div>
  `;
}).join('')