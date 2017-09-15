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
