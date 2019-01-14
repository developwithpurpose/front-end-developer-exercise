// To tell webpack to include these files in the build
require('../../favicon.ico');
require('../../baby-steps.json');
import "../stylesheets/styles.scss";

var $ = require("jquery");
var _ = require('lodash/core');

var friends = [[], [], [], [], [], [], []];

$(document).ready(function () {
   $.get("baby-steps.json", function (data) {
      data.friends.forEach(function (friend) {
         friends[(friend.babyStep - 1) % 7].push({
            firstName: friend.firstName,
            lastName: friend.lastName
         });
      });

      buildFriendsHtml();
   });

   $('nav li').click(function () {
      $('nav li.active').removeClass('active');
      $(this).addClass('active');

      $('.active-block').animate({
         top: $(this).position().top,
      }, 300);

      const articleElement = $('#step' + $(this).data("step"));
      $('.active-article').animate({
         scrollTop: articleElement.position().top + articleElement.parent().scrollTop()
      }, 600);
   });
});

var buildFriendsHtml = function () {
   for (let i = 0; i < friends.length; i++) {
      if (friends[i].length === 0) continue;
      var resultHtml = '';

      friends[i] = _.sortBy(friends[i], function (o) { return o.lastName; });

      if (friends[i].length === 1) {
         resultHtml += buildFriendAnchor(friends[i][0]) + ' is';
      }
      else if (friends[i].length === 2) {
         resultHtml += buildFriendAnchor(friends[i][0]) + ' and ';
         resultHtml += buildFriendAnchor(friends[i][1]) + ' are';
      }
      else {
         resultHtml += buildFriendAnchor(friends[i][0]) + ', ';
         resultHtml += buildFriendAnchor(friends[i][1]) + ' and ';
         resultHtml += (friends[i].length - 2) + ' other friend';
         resultHtml += friends[i].length > 3 ? 's are' : ' are';
      }

      resultHtml += ' also in Baby Step ' + (i + 1);
      $('#step' + (i + 1) + ' .friends').html(resultHtml);
   }
};

var buildFriendAnchor = function (friend) {
   return '<a href="/">' + friend.firstName + ' ' + friend.lastName + '</a>';
};