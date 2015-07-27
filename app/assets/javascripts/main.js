
(function () {
  var navListElement = document.querySelectorAll("li");
  for (var i = 0; i < navListElement.length; i++) {//Iterating instead of a foreach because somewhere else in code (Was this a module) Array.prototype could be altered.
    //Required to wrap like this in order for memory to be correctly copied for i
    navListElement[i].onclick = makeClickHandler(i, navListElement[i]);
  }

  function makeClickHandler(index, elem) {
    return function () {
      selectStep(index, elem);
    };
  }

  function selectStep(babyStep, elem) {
    //First lets kick off the animation
    animateToStep(document.getElementById("baby-step-1").style.marginTop, babyStep * 465 * -1, 0, true);
    //Then update the LI's to where they need to be.
    var activeLi = document.getElementsByClassName("active")[0];
    activeLi.className = "";
    activeLi.children[1].src = activeLi.children[1].src.replace("_blue.png", ".png");
    elem.className = "active";
    elem.children[1].src = elem.children[1].src.replace(".png", "_blue.png");
  }

  /**
    So the idea behind this is that it takes in where the margin is currently for baby step 1 and where it needs to be
    currentMargin is where the baby-step-1 div's marginTop is currently
    desiredMargin is where it needs to be
    direction is used to tell us where it needs to be going, always pass in 0 when calling but the function calls itself and sets the parameter accordingly. The function will internally use 0 for going down and 1 for going up
    firstCheck should be set to true when calling and simply lets the function know that this is the first time it is running.
  */
  function animateToStep(currentMargin, desiredMargin, direction, firstCheck) {
    //Check to see if we are near where we are supposed to be and if so then just set the div to the desired margin.
    if (!direction && currentMargin - 5 < desiredMargin) {
      document.getElementById("baby-step-1").style.marginTop = desiredMargin + "px";
      return;
    } else if (direction && currentMargin + 5 > desiredMargin) {
      document.getElementById("baby-step-1").style.marginTop = desiredMargin + "px";
      return;
    }
    //Convert the currentMargin to a number we can work with if it was handed in as something like 10px. I know, bad to convert number to string but it is JS.
    if (currentMargin && typeof(currentMargin) === "string") {
      currentMargin = parseInt(currentMargin.replace("px", ""));
    }
    //If this is the first run then let us decide the direction we need to go. 0 is a given because the function should always be called with 0
    if (firstCheck) {
      if (currentMargin < desiredMargin) {
        direction = 1;
      }
    }
    //Decide the offset based on our direction
    var offset = -5;
    if (direction) {
      offset = 5;
    }
    //apply and update margins and recall
    currentMargin += offset;
    document.getElementById("baby-step-1").style.marginTop = currentMargin + "px";
    window.setTimeout(function () {
      animateToStep(currentMargin, desiredMargin, direction);
    }, 1);
  }

  //We dont want this blocking window load
  window.setTimeout(loadSocialInfo);
  function loadSocialInfo() {
    var xhrObj = new window.XMLHttpRequest();
    xhrObj.open("GET", "/app/assets/javascripts/baby-steps.json");
    xhrObj.onload = function () {
      if (xhrObj.status === 200) {
        var response = JSON.parse(xhrObj.responseText);
        if (response.friends) {
          //Create dictionary with arrays to add friends to base on baby steps.
          var friendDictionary = {};
          var i;
          for (i = 1; i <= 7; i++) {
            friendDictionary[i] = [];
          }
          for (i = 0; i < response.friends.length; i++) {
            friendDictionary[response.friends[i].babyStep].push(response.friends[i]);//Push friend into new array.
          }
          for (i = 1; i <= 7; i++) {
            if (friendDictionary[i].length > 0) {
              friendDictionary[i] = alphabetizeFriends(friendDictionary[i]);
            }
          }
          renderFriends(friendDictionary);
        }
      }
    };
    xhrObj.send();
  }
  //As according to the ReadMe it seems friends should be alphabetized by last name.
  //This will take in the array of friends and return an array of sorted friends.
  //This method will be using merge sort
  function alphabetizeFriends(friendsArray) {
    if (friendsArray.length === 1) {
      return friendsArray;
    }
    var left = [], right = [];
    var middle = Math.floor(friendsArray.length / 2);
    var i;
    for (i = 0; i < middle; i++) {
      left.push(friendsArray[i]);
    }
    for (i = middle; i < friendsArray.length; i++) {
      right.push(friendsArray[i]);
    }
    left = alphabetizeFriends(left);
    right = alphabetizeFriends(right);
    return alphabeticalMerge(left, right);
  }
  //The actual merge, this should not be called directly from outside of alphabetizeFriends
  function alphabeticalMerge(left, right) {
    var returnValue = [];
    var leftIterator = 0;
    var rightIterator = 0;
    while (leftIterator < left.length && rightIterator < right.length) {
      if (left[leftIterator].lastName[0] <= right[rightIterator].lastName[0]) {
        returnValue.push(left[leftIterator]);
        leftIterator++;
      } else {
        returnValue.push(right[rightIterator]);
        rightIterator++;
      }
    }
    if (leftIterator < left.length) {
      while (leftIterator < left.length) {
        returnValue.push(left[leftIterator]);
        leftIterator++;
      }
    } else if (rightIterator < right.length) {
      while(rightIterator < right.length) {
        returnValue.push(right[rightIterator]);
        rightIterator++;
      }
    }
    return returnValue;
  }
  //Called via loadSocialInfo and it expects there to be a dictionary with arrays as values for the different baby step numbers as keys.
  function renderFriends(friendDictionary) {
    //Iterate through baby steps
    for (var i = 1; i <= 7; i++) {
      var friends = friendDictionary[i];
      var textToAdd = null;
      var tempText = "";
      var j;
      if (friends.length === 1) {
        //paragraph.appendChild(friendSpans[0]);
        textToAdd = "<span class='friend'>" + friends[0].firstName + " " + friends[0].lastName + "</span> is also in Baby Step " + i;
      } else if (friends.length === 2) {
        tempText = "";
        for (j = 0; j < 2; j++) {
          tempText += "<span class='friend'>" + friends[j].firstName + " " + friends[j].lastName + "</span> and ";
        }
        //Remove trailing and
        textToAdd = tempText.substring(0, tempText.length -4) + " are also in Baby Step " + i;
      } else if (friends.length > 2) {
        tempText = "";
        for (j = 0; j < 2; j++) {
          tempText += "<span class='friend'>" + friends[j].firstName + " " + friends[j].lastName + "</span>, ";
        }
        tempText += " and " + (friends.length - 2) + " other ";
        if (friends.length === 3) {
          tempText += "friend";
        } else {
          tempText += "friends";
        }
        textToAdd = tempText + " are also in Baby Step " + i;
      }
      //Check for null empty string etc.
      if (textToAdd) {
        var babyStep = document.getElementById("baby-step-" + i);
        babyStep.innerHTML += "<p style='webkit-margin-before:0;'>" + textToAdd + "</p>";
      }
    }
  }
})();
