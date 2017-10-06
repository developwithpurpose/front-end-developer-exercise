const sortFriendsByStep = friendList => {
  const friendsByStep = {}
  friendList.forEach(friend => {
    if (!friendsByStep.hasOwnProperty(friend.babyStep)) {
      friendsByStep[friend.babyStep] = []
    }
    friendsByStep[friend.babyStep].push(friend)
  })
  return friendsByStep
}


const createSupportMessage = (friends, step) => {
  const numFriends = friends.length
  const messageTail = `also in Baby Step ${step}`
  const stepHash = `#step${step}`
  let message

  if (numFriends === 1) {
    message = `
    <a href="${stepHash}">${friends[0].firstName} ${friends[0].lastName}</a>
    is ${messageTail}`
  }
  else if (numFriends === 2) {
    message = `
    <a href="${stepHash}">${friends[0].firstName} ${friends[0].lastName}</a> and
    <a href="${stepHash}">${friends[1].firstName} ${friends[1].lastName}</a>
    are ${messageTail}`
  }
  else if (numFriends === 3) {
    message = `
    <a href="${stepHash}">${friends[0].firstName} ${friends[0].lastName}</a>,
    <a href="${stepHash}">${friends[1].firstName} ${friends[1].lastName}</a>,
    and 1 other friend are ${messageTail}`
  }
  else if (numFriends > 3) {
    let numUnseen = numFriends - 2
    message = `
    <a href="${stepHash}">${friends[0].firstName} ${friends[0].lastName}</a>,
    <a href="${stepHash}">${friends[1].firstName} ${friends[1].lastName}</a>,
    and ${numUnseen} other friends are ${messageTail}`
  }

  return message
}


const stepSections = [].slice.call(document.getElementsByClassName('step-friends'))

const request = new XMLHttpRequest()
request.responseType = 'json'

request.onreadystatechange = () => {
  if (request.status === 200 && request.response !== null) {
    const friendsList = request.response.friends
    const friendsByStep = sortFriendsByStep(friendsList)

    stepSections.forEach((step, idx) => {
      let day = idx + 1
      if (friendsByStep[day]) {
        const sortedFriends = friendsByStep[day].sort((a, b) => a.lastName > b.lastName)
        const message = createSupportMessage(sortedFriends, day)
        step.innerHTML = message
      }
    })
  }
}

request.open('GET', './baby-steps.json')
request.send()
