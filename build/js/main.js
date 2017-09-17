const navLinks = document.querySelectorAll('#nav a');
const steps = document.querySelectorAll('.babysteps section');


// get height of "steps" and set content area height
let elementHeights = [];
steps.forEach(step => {elementHeights.push(step.offsetHeight);})
let elementHeight = Math.max.apply(Math, elementHeights);
document.querySelector('.babysteps').style.height = elementHeight + 300 + "px";

// add/remove selected class from links and show/hide "step"
navLinks.forEach(link => link.addEventListener('click', function(e){
  e.preventDefault();
  let targetElem = link.rel;
  navLinks.forEach(sibling => { sibling.classList.remove('selected');})
  link.classList.add('selected');

  steps.forEach(step => {
    step.classList.remove('selected');
    if(step.id == targetElem) {
      step.classList.add('selected');
    }
  })
}));




// create empty arrays to hold "friends" data
let friendsArray = [];
for (var i = 0; i < steps.length; i++) {
    friendsArray[i] = [];
}

// get ajax data
function getJSONdata(path, callback) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
        if(callback) callback(data);
      }
    };
    request.open('GET', path);
    request.send();
  }


let friends;
let showFriends = document.querySelectorAll('.friends');
getJSONdata('../baby-steps.json', function(data){
  friends = data.friends;

  // sort data by last name
  friends = friends.sort((a,b)=> {
    let a1 = a.lastName;
    let b1 = b.lastName;
    return a1<b1 ?-1:a1> b1? 1 :0;
  })

  // for each friend, push to cooresponding "friendsArray" based on babyStep value
  for(var i = 0; i < friends.length; i++) {
    var friend = friends[i];

    for (var j = 0; j < steps.length; j++) {
      if(friend.babyStep == j + 1) {
        friendsArray[j].push(friend);
      }
    }
  }

  // insert friends data
  showFriends.forEach(friendElement => {
    let parentIndex = parseInt(friendElement.parentElement.id.substring(8) - 1);
    let sameStepFriends = friendsArray[parentIndex];

    // if number of friends is greater than 0
    if(sameStepFriends.length > 0 ){
      // if one friend
      if(sameStepFriends.length == 1) {
        friendElement.innerHTML = `
          <a href="#_">${sameStepFriends[0].firstName} ${sameStepFriends[0].lastName}</a> is also in Baby Step ${parentIndex + 1}
        `;
      // if 2 friends
      } else if(sameStepFriends.length == 2) {
        friendElement.innerHTML = `
          <a href="#_">${sameStepFriends[0].firstName} ${sameStepFriends[0].lastName}</a> and
          <a href="#_">${sameStepFriends[1].firstName} ${sameStepFriends[1].lastName}</a>
          are also in Baby Step ${parentIndex + 1}
        `;
      // if 3 friends
      } else if(sameStepFriends.length == 3) {
        friendElement.innerHTML = `
          <a href="#_">${sameStepFriends[0].firstName} ${sameStepFriends[0].lastName}</a>,
          <a href="#_">${sameStepFriends[1].firstName} ${sameStepFriends[1].lastName}</a> and one other friend are also in Baby Step ${parentIndex + 1}
        `;
      // if more than 3 friends
      } else if(sameStepFriends.length > 3) {
        friendElement.innerHTML = `
          <a href="#_">${sameStepFriends[0].firstName} ${sameStepFriends[0].lastName}</a>,
          <a href="#_">${sameStepFriends[1].firstName} ${sameStepFriends[1].lastName}</a> and ${sameStepFriends.length - 2} other friends are also in Baby Step ${parentIndex + 1}
        `;
      }
    }
  });
});
