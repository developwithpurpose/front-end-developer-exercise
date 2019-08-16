//Tabs code
var activeClass = "active";

function tabs() {
  var navItems = document.querySelectorAll(".nav-step a");

  if (navItems.length) {
    navItems.forEach(function(el) {
      el.addEventListener("click", function(e) {
        e.preventDefault();
        resetActive();
        setActive(el, 1);
        loadStepInfo(el.hash);
      });
    });
  }
}

function resetActive() {
  var currActive = document.querySelectorAll(".active");
  currActive.forEach(function(el) {
    var RemoveActive = el.classList
      ? el.classList.remove(activeClass)
      : el.activeClass.replace(
          new RegExp(
            "(^|\\b)" + activeClass.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
  });
}

function setActive(el, setParent) {
  var makeLinkActive = el.classList
    ? el.classList.add(activeClass)
    : (el.activeClass += " " + activeClass);
  var makeParentActive =
    el.parentNode.classList && setParent === 1
      ? el.parentNode.classList.add(activeClass)
      : (el.parentNode.activeClass += " " + activeClass);
}

function loadStepInfo(hash) {
  var currStep = document.querySelector(hash);
  currStep.scrollIntoView();
  setActive(currStep);
}

// Dom Ready FN calls
document.addEventListener("DOMContentLoaded", function(event) {
  tabs();
  getMyFriends();
});
