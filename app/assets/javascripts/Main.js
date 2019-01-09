var nav = document.getElementById("nav").querySelectorAll("a");
var friendsDiv = document.getElementById("friends");
var friends;

$.ajax({
  url: "../../baby-steps.json",
  method: "GET",
  data: {
    a: "a"
  },
  success: function(data) {
    friends = data.friends;
    friendsOnBS(friends, 1);
  },
  error: function(xhr) {
    console.log("error", xhr);
  }
});

function toggleHidden(imgArray) {
  Array.from(imgArray).forEach(function(el) {
    if (el.className.indexOf("hidden") === -1) {
      el.classList.add("hidden");
    } else {
      el.classList.remove("hidden");
    }
  });
}

function navStyling(prev, next) {
  prev.removeAttribute("id");
  next.setAttribute("id", "active");

  toggleHidden(prev.querySelectorAll("img"));
  toggleHidden(next.querySelectorAll("img"));
}

function activeBabyStep(prev, next) {
  var divToHide = prev.getAttribute("data-step");
  var divToShow = next.getAttribute("data-step");

  var hideDiv = document.getElementsByClassName(`baby_step_${divToHide}`)[0];
  hideDiv.className += " hidden";

  var showDiv = document.getElementsByClassName(`baby_step_${divToShow}`)[0];
  showDiv.classList.remove("hidden");
}

Array.from(nav).forEach(function(el) {
  el.addEventListener("click", styling);
});

function styling(e) {
  e.preventDefault();
  var newActiveBS = this.parentNode;
  var prevSelectedBS = document.getElementById("active");
  var activeBS = newActiveBS.getAttribute("data-step");
  navStyling(prevSelectedBS, newActiveBS);
  activeBabyStep(prevSelectedBS, newActiveBS);
  friendsOnBS(friends, activeBS);
}

function sortArrayByLastName(array) {
  var sortedArray = array.sort(function(a, b) {
    var a = a.lastName;
    var b = b.lastName;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  return sortedArray;
}

function onSameBS(tempArray) {
  var tempString = "";

  if (tempArray.length > 0) {
    sortedArray = sortArrayByLastName(tempArray);
  }

  var firstPerson =
    tempArray.length > 0
      ? tempArray[0].firstName + " " + tempArray[0].lastName
      : "";

  var secondPerson =
    tempArray.length > 1
      ? tempArray[1].firstName + " " + tempArray[1].lastName
      : "";

  if (tempArray.length === 1)
    tempString =
      "<a>" +
      firstPerson +
      "</a> is also in Baby Step " +
      tempArray[0].babyStep;
  else if (tempArray.length === 2)
    tempString = "<a>" + firstPerson + "</a> and <a>" + secondPerson + "</a> ";
  else if (tempArray.length === 3)
    tempString =
      "<a>" +
      firstPerson +
      "</a>, and <a>" +
      secondPerson +
      "</a>, and " +
      (tempArray.length - 2) +
      " other friend ";
  else if (tempArray.length >= 4)
    tempString =
      "<a>" +
      firstPerson +
      "</a>, <a>" +
      secondPerson +
      "</a>, and " +
      (tempArray.length - 2) +
      " other friends ";

  if (tempArray.length > 1) {
    tempString += "are also in Baby Step " + tempArray[0].babyStep;
  }

  friendsDiv.innerHTML = tempString;
}

function friendsOnBS(friends, babystep) {
  var babyStep = parseInt(babystep);
  var temp = [];
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].babyStep === babyStep) {
      temp.push(friends[i]);
    }
  }

  onSameBS(temp);
}
