import { content } from '../json/content.json'
import { friends } from '../json/baby-steps.json'
import { largeIcons } from './icons.js'

const mainContent = document.querySelector('.js-content')

mainContent.innerHTML = content.map((step, i) => {
  let classList = 'c-step-content js-step-content'
  let totalFriends = []
  let friendsContent = '';
  
  // Make friends content
  friends.forEach(friend => {
    if (friend.babyStep === i+1) totalFriends.push(friend)

    const name1 = totalFriends.length >= 1 ? 
                  `<a>${totalFriends[0].firstName} ${totalFriends[0].lastName}</a>` :
                  ''
    const name2 = totalFriends.length >= 2 ? 
                  `<a>${totalFriends[1].firstName} ${totalFriends[1].lastName}</a>` :
                  ''
    const ending = `also in Baby Step ${i+1}`

    if (totalFriends.length === 1) {
      friendsContent = `${name1} is ${ending}`
    } else if (totalFriends.length === 2) {
      friendsContent = `${name1} and ${name2} are ${ending}`
    } else if (totalFriends.length === 3) {
      friendsContent = `${name1}, ${name2} and 1 other friend is ${ending}`
    } else if (totalFriends.length >= 4) {
      friendsContent = `${name1}, ${name2} and ${totalFriends.length - 2} other friends are ${ending}`
    }
  })

  if (i === 0) {
    classList = 'c-step-content c-step-content--active js-step-content' 
  } 

  return `
    <div class="${classList}" data-id="${i}">
      <img class="c-icon--large" src="./assets/media/${largeIcons.blue[i]}">
      <div class="c-step-content__heading">
        <h1 class="c-step-content__heading--title">${step.title}</h1>
        <h5 class="c-step-content__heading--subtitle">${step.subtitle}</h5>
      </div>
      <p class="c-step-content__text">${step.text1}</p>
      <p class="c-step-content__text">${step.text2}</p>
      <p class="c-step-content__friends">${friendsContent}</p>
    </div>
  `
}).join('')