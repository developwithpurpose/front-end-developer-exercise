'use strict';

var selectLink = function selectLink(navLink) {
  navLink.children[0].style.display = 'none';
  navLink.children[1].style.display = 'inline-block';
  navLink.style.color = '#36abe1';
  navLink.style.fontWeight = '600';
};

var deSelectLink = function deSelectLink(navLink) {
  navLink.children[0].style.display = 'inline-block';
  navLink.children[1].style.display = 'none';
  navLink.style.color = '#9ba0a4';
  navLink.style.fontWeight = '400';
};

var selectedStep = function () {
  var currentStep = window.location.hash || '#step1';
  var selected = document.querySelectorAll('a[href=\'' + currentStep + '\']')[0];
  var stepLink = selected.children[0];
  selectLink(stepLink);
  return stepLink;
}();

var navLinks = [].slice.call(document.getElementsByClassName('nav-link'));

navLinks.forEach(function (link) {
  link.onclick = function () {
    if (selectedStep) deSelectLink(selectedStep);
    selectLink(link);
    selectedStep = link;
  };
});
