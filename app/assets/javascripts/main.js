/* global $ */
// eslint disable-no-console //

'use strict';
$(document).ready(function () {
  $.ajax({
    url: 'baby-steps.json',
    type: 'GET',
    dataType: 'json',
  }).then(function (response) {
    var friendsByStep = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
    };
    // ensure api response has "friends" and that it's the type we expect
    if (!response.friends || !$.isArray(response.friends))
      return;
    // filter each friend into the appropriate step
    for (var i in response.friends) {
      var friend = response.friends[i];
      // ensure data from api is valid
      if (friendsByStep.hasOwnProperty(friend.babyStep)) {
        friendsByStep[friend.babyStep].push(friend);
      }
    }


    // sort each step by ascending lastName
    // when 2 last names are the same, they maintain the relative order in the original array
    for (var step in friendsByStep) {
      friendsByStep[step].sort(function (a, b) {
        if (a.lastName > b.lastName) return 1;
        else if (a.lastName < b.lastName) return -1;
        return 0;
      });
      showFriendsOnStep(friendsByStep[step], step);
    }
  });

  function showFriendsOnStep(friends, step) {
    var friendsText;
    if (friends.length === 1) {
      friendsText = name(friends[0]) + ' is also in Baby Step ' + step;
    } else if (friends.length === 2) {
      friendsText = name(friends[0]) + ' and ' + name(friends[1]) + ' are also in Baby Step ' + step;
    } else if (friends.length === 3) {
      friendsText = name(friends[0]) + ', ' + name(friends[1]) + ', and 1 other friend are also in Baby Step ' + step;
    } else if (friends.length > 3) {
      friendsText = name(friends[0]) + ', ' + name(friends[1]) + ', and ' + (friends.length - 2) + ' other friends are also in Baby Step ' + step;
    }
    if (friendsText)
      $('<div class="friends">' + friendsText + '</div>').appendTo('.step-body.step-' + step);
  }

  function name(friend) {
    return '<a href="#">' + friend.firstName + ' ' + friend.lastName + '</a>';
  }
});
