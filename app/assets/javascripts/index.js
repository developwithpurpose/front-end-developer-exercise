function openCity(evt, babyStep) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  getFriends(evt, babyStep);
  document.getElementById(babyStep).style.display = "block";
  evt.currentTarget.className += " active";
  moveIndicator(evt);
}

document.querySelector('.active').click();

function moveIndicator(e) {
  const activeEl = e.currentTarget;
  var rect = activeEl.getBoundingClientRect();
  const indicator = document.querySelector('.indicator');

  indicator.style.top = `${rect.top}px`;
  indicator.style.left = 0;
}

function addFriends(friends, babyStep) {
  var friendsEl = document.querySelector(`#${babyStep} .friends`);

  friendsEl.innerHTML = '';
  var currentStepFriends = friends.filter(friend => friend.babyStep === parseInt(babyStep.substr(babyStep.length - 1)));
  currentStepFriends.forEach((currentFriend, index) => {
    var link = document.createElement('a');
    link.href = "#";
    if (currentStepFriends.length === 1) {
      link.innerHTML = `${currentFriend.firstName} ${currentFriend.lastName}`
      friendsEl.append(link);
    } else if (currentStepFriends.length === 2 && index === 1) {
      link.innerHTML = `${currentFriend.firstName} ${currentFriend.lastName}`
      friendsEl.append(link);
    } else if (index <= 1) {
      link.innerHTML = `${currentFriend.firstName} ${currentFriend.lastName}, `
      friendsEl.append(link);
    } else if (index === 2) {
      friendsEl.append(`and ${currentStepFriends.length - 2} Other friends are on this step`);
    } else {
      return;
    }
  })
}

function getFriends(e, babyStep) {
  fetch('./baby-steps.json')
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      addFriends(data.friends, babyStep);
    }).catch(function (ex) {
      console.log('failed', ex)
    })
}