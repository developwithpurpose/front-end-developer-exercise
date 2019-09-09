$(function() {
  getEncouragementData();
});

function buildEncouragementHtml(friendsArr, encouragementNode) {
  var friends = friendsArr;

  var FRIENDS_LENGTH = friends.length;
  var MAX_FRIENDS_TO_DISPLAY = 2;
  var FRIENDS_OVER_MAX = friends.slice(MAX_FRIENDS_TO_DISPLAY).length;

  if (FRIENDS_LENGTH === 0) {
    return;
  }

  encouragementNode.removeClass('hide');

  var babyStep = friends[0].babyStep;
  var encouragementHtml = '';
  var friendsOnStep = [];

  for (var i = 0; i < FRIENDS_LENGTH; i++) {
    friendsOnStep.push(friendTemplate(friends[i]));
  }

  if (FRIENDS_LENGTH === 2) {
    encouragementHtml += friendsOnStep.slice(0, 2).join(' and ');
  } else {
    encouragementHtml += friendsOnStep.slice(0, 2).join(', ');
  }

  if (FRIENDS_LENGTH > 2) {
    encouragementHtml += ' and ';
    encouragementHtml += FRIENDS_OVER_MAX;
    encouragementHtml += ' other friend';
  }

  if (FRIENDS_LENGTH > 3) {
    encouragementHtml += 's';
  }

  if (FRIENDS_LENGTH === 1) {
    encouragementHtml += ' is ';
  } else {
    encouragementHtml += ' are ';
  }

  encouragementHtml += 'also in Baby Step ';
  encouragementHtml += babyStep;

  encouragementNode.html(encouragementHtml);
}

function friendTemplate(friend) {
  return '<a href="javascript:;">' + friend.firstName + ' ' + friend.lastName + '</a>';
}

function getEncouragementData() {
  var BABY_STEPS = 7;

  $.ajax('/baby-steps.json').done(function(res) {
    var friends = res.friends;

    for (var i = 1; i <= BABY_STEPS; i++) {
      var friendsOnStep = friends.filter(function(friend) {
        return friend.babyStep === i;
      });

      friendsOnStep.sort(function(a, b) {
        if (a.lastName > b.lastName) {
          return 1;
        }

        if (a.lastName < b.lastName) {
          return -1;
        }

        return 0;
      });

      var currentEncouragementStep = $('.js-encouragement[data-baby-step=' + i + ']');

      buildEncouragementHtml(friendsOnStep, currentEncouragementStep);
    }
  });
}
