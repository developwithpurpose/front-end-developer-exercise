const tags = document.querySelectorAll('.tag')
let active = document.querySelector('.tag.is-active')

tags.forEach(tag => {
  tag.addEventListener("click", () => {
    if (tag !== active) {
      const newStepNumber = tag.firstElementChild.id.slice(-1)
      toggleActive(active)
      toggleActive(tag)
      active = tag
      getFriends(newStepNumber)
    }
  })
})

const toggleActive = (tag) => {
  tag.classList.toggle('is-active')
  tag.firstElementChild.classList.toggle('is-active')
  const stepNumber = tag.firstElementChild.id.slice(-1)
  document.getElementById(`baby-step-${stepNumber}-content`).classList.toggle('is-active')
}

const getFriends = (stepNumber) => {
  axios.get('../../baby-steps.json')
  .then(({ data }) => {
    const friendsOnStep = data.friends.filter(friend => friend.babyStep == stepNumber)
    const friends = document.querySelectorAll('.friends')
    friends.forEach(i => {
      i.innerHTML = getHtml(friendsOnStep)
    })
  })
}

const getHtml = (friendsOnStep) => {
  switch (friendsOnStep.length) {
    case 0:
      return ``
    case 1:
      return `<p><span class="link">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</span> is also in Baby Step ${friendsOnStep[0].babyStep}</p>`
    case 2:
      return `<p><span class="link">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</span> and <span class="link">${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</span> are also in Baby Step ${friendsOnStep[0].babyStep}</p>`
    case 3:
      return `<p><span class="link">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</span>, <span class="link">${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</span>, and 1 other friend are also in Baby Step ${friendsOnStep[0].babyStep}</p>`
    default:
      return `<p><span class="link">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</span>, <span class="link">${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</span>, and ${friendsOnStep.length - 2} other friends are also in Baby Step ${friendsOnStep[0].babyStep}</p>`
  }
}