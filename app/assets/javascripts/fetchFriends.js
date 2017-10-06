'use strict';

var sortFriendsByStep = function sortFriendsByStep(friendList) {
  var friendsByStep = {};
  friendList.forEach(function (friend) {
    if (!friendsByStep.hasOwnProperty(friend.babyStep)) {
      friendsByStep[friend.babyStep] = [];
    }
    friendsByStep[friend.babyStep].push(friend);
  });
  return friendsByStep;
};

var createSupportMessage = function createSupportMessage(friends, step) {
  var numFriends = friends.length;
  var messageTail = 'also in Baby Step ' + step;
  var stepHash = '#step' + step;
  var message = void 0;

  if (numFriends === 1) {
    message = '\n    <a href="' + stepHash + '">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>\n    is ' + messageTail;
  } else if (numFriends === 2) {
    message = '\n    <a href="' + stepHash + '">' + friends[0].firstName + ' ' + friends[0].lastName + '</a> and\n    <a href="' + stepHash + '">' + friends[1].firstName + ' ' + friends[1].lastName + '</a>\n    are ' + messageTail;
  } else if (numFriends === 3) {
    message = '\n    <a href="' + stepHash + '">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>,\n    <a href="' + stepHash + '">' + friends[1].firstName + ' ' + friends[1].lastName + '</a>,\n    and 1 other friend are ' + messageTail;
  } else if (numFriends > 3) {
    var numUnseen = numFriends - 2;
    message = '\n    <a href="' + stepHash + '">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>,\n    <a href="' + stepHash + '">' + friends[1].firstName + ' ' + friends[1].lastName + '</a>,\n    and ' + numUnseen + ' other friends are ' + messageTail;
  }

  return message;
};

var stepSections = [].slice.call(document.getElementsByClassName('step-friends'));

var request = new XMLHttpRequest();
request.responseType = 'json';

request.onreadystatechange = function () {
  if (request.status === 200 && request.response !== null) {
    var friendsList = request.response.friends;
    var friendsByStep = sortFriendsByStep(friendsList);

    stepSections.forEach(function (step, idx) {
      var day = idx + 1;
      if (friendsByStep[day]) {
        var sortedFriends = friendsByStep[day].sort(function (a, b) {
          return a.lastName > b.lastName;
        });
        var message = createSupportMessage(sortedFriends, day);
        step.innerHTML = message;
      }
    });
  }
};

request.open('GET', './baby-steps.json');
request.send();
