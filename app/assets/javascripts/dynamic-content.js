$(function () {
  var sortByLastName = function (a, b) {
    if (a.lastName > b.lastName) {
      return 1;
    }
    if (a.lastName < b.lastName) {
      return -1;
    }
    return 0;
  };

  var formatName = function (friend) {
    return '<a href="#" class="friend-name">' + friend.firstName + ' ' + friend.lastName + '</a>';
  };

  var formatMsg = function (friends, bs) {
    var msg;

    switch (friends.length) {
      case 0:
        return '';
      case 1:
        msg = formatName(friends[0]) + ' is also in Baby Step ' + bs;
        break;
      case 2:
        msg = formatName(friends[0]) + ' and ' + formatName(friends[1]) + ' are also in Baby Step ' + bs;
        break;
      default:
        msg = formatName(friends[0]) + ', ' + formatName(friends[1]) + ' and ' + (bs - 2) + ' other friends are also in Baby Step ' + bs;
        break;
    }

    return '<div class="bs-friends">' + msg + '</div>';
  };

  $.getJSON('baby-steps.json', function (data) {
    var friends = data.friends;
    
    for (var i = 1; i <= 7; i++) {
      var friendsOnBabyStep = friends.filter(function (friend) {
        return friend.babyStep === i;
      })
      .sort(sortByLastName);

      $('#bs'+i).append(formatMsg(friendsOnBabyStep, i));
    }
  });
});
