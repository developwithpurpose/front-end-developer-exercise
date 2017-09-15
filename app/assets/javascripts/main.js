'use strict';

var navLinks = document.querySelectorAll('#nav a');
var steps = document.querySelectorAll('.babysteps section');

// get height of "steps" and set content area height
var elementHeights = [];
steps.forEach(function (step) {
  elementHeights.push(step.offsetHeight);
});
var elementHeight = Math.max.apply(Math, elementHeights);
document.querySelector('.babysteps').style.height = elementHeight + 300 + "px";

// add/remove selected class from links and show/hide "step"
navLinks.forEach(function (link) {
  return link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetElem = link.rel;
    navLinks.forEach(function (sibling) {
      sibling.classList.remove('selected');
    });
    link.classList.add('selected');

    steps.forEach(function (step) {
      step.classList.remove('selected');
      if (step.id == targetElem) {
        step.classList.add('selected');
      }
    });
  });
});

// create empty arrays to hold "friends" data
var friendsArray = [];
for (var i = 0; i < steps.length; i++) {
  friendsArray[i] = [];
}

// get ajax data
function getJSONdata(path, callback) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      if (callback) callback(data);
    }
  };
  request.open('GET', path);
  request.send();
}

var friends = void 0;
var showFriends = document.querySelectorAll('.friends');
getJSONdata('../baby-steps.json', function (data) {
  friends = data.friends;

  // sort data by last name
  friends = friends.sort(function (a, b) {
    var a1 = a.lastName;
    var b1 = b.lastName;
    return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
  });

  // for each friend, push to cooresponding "friendsArray" based on babyStep value
  for (var i = 0; i < friends.length; i++) {
    var friend = friends[i];

    for (var j = 0; j < steps.length; j++) {
      if (friend.babyStep == j + 1) {
        friendsArray[j].push(friend);
      }
    }
  }

  // insert friends data
  showFriends.forEach(function (friendElement) {
    var parentIndex = parseInt(friendElement.parentElement.id.substring(8) - 1);
    var sameStepFriends = friendsArray[parentIndex];

    // if number of friends is greater than 0
    if (sameStepFriends.length > 0) {
      // if one friend
      if (sameStepFriends.length == 1) {
        friendElement.innerHTML = '\n          <a href="#_">' + sameStepFriends[0].firstName + ' ' + sameStepFriends[0].lastName + '</a> is also in Baby Step ' + (parentIndex + 1) + '\n        ';
        // if 2 friends
      } else if (sameStepFriends.length == 2) {
        friendElement.innerHTML = '\n          <a href="#_">' + sameStepFriends[0].firstName + ' ' + sameStepFriends[0].lastName + '</a> and\n          <a href="#_">' + sameStepFriends[1].firstName + ' ' + sameStepFriends[1].lastName + '</a>\n          are also in Baby Step ' + (parentIndex + 1) + '\n        ';
        // if 3 friends
      } else if (sameStepFriends.length == 3) {
        friendElement.innerHTML = '\n          <a href="#_">' + sameStepFriends[0].firstName + ' ' + sameStepFriends[0].lastName + '</a>,\n          <a href="#_">' + sameStepFriends[1].firstName + ' ' + sameStepFriends[1].lastName + '</a> and one other friend are also in Baby Step ' + (parentIndex + 1) + '\n        ';
        // if more than 3 friends
      } else if (sameStepFriends.length > 3) {
        friendElement.innerHTML = '\n          <a href="#_">' + sameStepFriends[0].firstName + ' ' + sameStepFriends[0].lastName + '</a>,\n          <a href="#_">' + sameStepFriends[1].firstName + ' ' + sameStepFriends[1].lastName + '</a> and ' + (sameStepFriends.length - 2) + ' other friends are also in Baby Step ' + (parentIndex + 1) + '\n        ';
      }
    }
  });
});
