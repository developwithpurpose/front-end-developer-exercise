var lastStep = 0;

function getMyFriends() {
  var request = new XMLHttpRequest();
  request.open("GET", "/baby-steps.json", true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      showMyFriends(data);
    } else {
      console.error("Error grabbing My Friends JSON");
    }
  };

  request.send();
}

function showMyFriends(data) {
  var myFriends = data["friends"];
  myFriends.sort(sortFriends);
  myFriends.forEach(function(el) {
    updateMyFriends = document
      .getElementById("step-" + el.babyStep)
      .getElementsByClassName("my-friends");
    updateMyFriends[0].innerHTML = outputFriends(el, myFriends);
  });
}

function sortFriends(a, b) {
  var lastNameA = a.lastName.toUpperCase();
  var lastNameB = b.lastName.toUpperCase();
  var babyStepA = a.babyStep;
  var babyStepB = b.babyStep;
  var comparison = 0;

  if (babyStepA == babyStepB) {
    if (lastNameA > lastNameB) {
      comparison = 1;
    } else if (lastNameA < lastNameB) {
      comparison = -1;
    }
  }

  return comparison;
}
function outputFriends(el, myFriends) {
  var currStep = el.babyStep;

  if (currStep != lastStep) {
    var friendsForStep = myFriends.filter(function(friend) {
      return friend.babyStep == currStep;
    });

    var numOfFriends = friendsForStep.length;

    switch (numOfFriends) {
      case 0:
        return;
      case 1:
        return (
          "<span>" +
          friendsForStep[0].firstName +
          " " +
          friendsForStep[0].lastName +
          "</span>" +
          " is also in Baby Step " +
          currStep
        );
      case 2:
        return (
          "<span>" +
          friendsForStep[0].firstName +
          " " +
          friendsForStep[0].lastName +
          "</span> and " +
          "<span>" +
          friendsForStep[1].firstName +
          " " +
          friendsForStep[1].lastName +
          "</span>" +
          " are also in Baby Step " +
          currStep
        );

      case 3:
        return (
          "<span>" +
          friendsForStep[0].firstName +
          " " +
          friendsForStep[0].lastName +
          "</span>, " +
          "<span>" +
          friendsForStep[1].firstName +
          " " +
          friendsForStep[1].lastName +
          "</span>" +
          " and 1 other friend is also in Baby Step " +
          currStep
        );

      default:
        friendsRemainder = currStep - 2;
        return (
          "<span>" +
          friendsForStep[0].firstName +
          " " +
          friendsForStep[0].lastName +
          "</span>, " +
          "<span>" +
          friendsForStep[1].firstName +
          " " +
          friendsForStep[1].lastName +
          "</span>" +
          " and " +
          friendsRemainder +
          " other friends are also in Baby Step " +
          currStep
        );
    }
  }

  lastStep = currStep;
}
