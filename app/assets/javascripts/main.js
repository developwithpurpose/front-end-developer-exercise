"use strict";

(function () {
  'use strict';

  var slideRightSidebar = function slideRightSidebar(stepNumber) {
    $("#baby-steps-panel").css("top", "-" + (stepNumber - 1) * 800 + "px");
  };
  slideRightSidebar(1);

  $.makeArray($('#left-sidebar').find('li')).map(function (value) {
    $("#" + value.getAttribute('id')).parent().click(function (event) {
      var clickedElement = $("#" + event.currentTarget.getAttribute('id'));
      var clickedIdNumber = parseInt(event.currentTarget.getAttribute('id').split("-")[1]);
      clickedElement.find('li').addClass('active');
      clickedElement.siblings().find('li').removeClass('active');
      $('#transition-bar').css('top', 61 * (clickedIdNumber - 1) + "px");
      slideRightSidebar(clickedIdNumber);
      event.preventDefault(); //this is where i'm currently at
    });
  });
})();