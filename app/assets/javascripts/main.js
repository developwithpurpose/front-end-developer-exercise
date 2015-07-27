(function () {
  var navListElement = document.querySelectorAll("li");
  for (var i = 0; i < navListElement.length; i++) {//Iterating instead of a foreach because somewhere else in code (Was this a module) Array.prototype could be altered.
    //Required to wrap like this in order for memory to be correctly copied for i
    navListElement[i].onclick = makeClickHandler(i, navListElement[i]);
  }
  //As creating functions within loops can lead to problems (And JSLint yelling at you) I made this following the JSLint recommendations.
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
  window.setTimeout(window.Social.loadSocialInfo);
})();
