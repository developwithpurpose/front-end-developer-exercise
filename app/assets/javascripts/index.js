const stepNav = document.getElementById('stepNav');
const navItem = stepNav.children;
const navItemArr = Array.from(navItem);

const stepCopy = document.getElementById('stepCopy');
const copyItem = stepCopy.children;
const copyItemArr = Array.from(copyItem);
let stepId = 1;
const friendsJSON = '../baby-steps.json';

getActiveItem = (navItemArr, copyItemArr) => {
  return navItemArr.map( (item, i) => {
    item.addEventListener('click', (e) =>{
      e.preventDefault();
      let currentActiveNav = document.querySelector('.active');
      if (currentActiveNav !== null) currentActiveNav.classList.remove('active');
      item.classList.add('active');
      stepId = parseInt(item.getAttribute('data-step'));
      showCopy = (navIndex) => {
        copyItemArr.map((item, copyIndex) => {
          let currentActiveCopy = document.querySelector('.show-copy');
          if (currentActiveCopy !== null) {
            currentActiveCopy.classList.remove('show-copy');
            currentActiveCopy.classList.add('hide-copy');
          }
          (copyIndex === navIndex)
          ? item.classList.remove('hide-copy')
          : item.classList.add('hide-copy');
        })
      }
      showCopy(i);
      getFriendData(friendsJSON, copyItemArr, stepId);
    });
  })
}
getActiveItem(navItemArr, copyItemArr);

getFriendData = (friendsJSON, copyItemArr, stepId) => {
  fetch(friendsJSON)
  .then(res => res.json())
  .then(data => {
    const friendsArr = data.friends;
    let onCurrentStep = [];
    let dynamicText;
    const friendSentence = document.createElement('P');
    const filterFriends = friendsArr.filter( friend => {
      return friend.babyStep === stepId ? onCurrentStep.push(friend) : null
    })
    const sortedFriends = filterFriends.sort( (a, b) => {
      const friendOne = a.lastName.toLowerCase();
      const friendTwo = b.lastName.toLowerCase();
      return (friendOne < friendTwo) ? -1: 1;
    });
    if (sortedFriends.length === 1) {
      return document.getElementById('friends').innerHTML = `
        <p>${sortedFriends[0].firstName} ${sortedFriends[0].lastName} is on Baby Step ${stepId}</p>
      `
    } else if (sortedFriends.length === 2) {
      return document.getElementById('friends').innerHTML = `
        <p>${sortedFriends[0].firstName} ${sortedFriends[0].lastName} and ${sortedFriends[1].firstName} ${sortedFriends[1].lastName} are on Baby Step ${stepId}</p>
      `
    }
  })
  .catch(err => {
    console.log(err);
  })
}
