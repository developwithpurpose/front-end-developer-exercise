$(document).ready( function () {
  hideSteps();
  tabs();
  $('#tabs-1').show();
});

function hideSteps() {
  $('#tabs-1').hide();
  $('#tabs-2').hide();
  $('#tabs-3').hide();
  $('#tabs-4').hide();
  $('#tabs-5').hide();
  $('#tabs-6').hide();
  $('#tabs-7').hide();
}

function tabs () {
  $('#tab1').click(function () {
    hideSteps();
    $('#tabs-1').show();
  })
  $('#tab2').click(function () {
    hideSteps();
    $('#tabs-2').show();
  })
  $('#tab3').click(function () {
    hideSteps();
    $('#tabs-3').show();
  })
  $('#tab4').click(function () {
    hideSteps();
    $('#tabs-4').show();
  })
  $('#tab5').click(function () {
    hideSteps();
    $('#tabs-5').show();
  })
  $('#tab6').click(function () {
    hideSteps();
    $('#tabs-6').show();
  })
  $('#tab7').click(function () {
    hideSteps();
    $('#tabs-7').show();
  })
};

for (i = 1; i < 8; i++) {
  getFriends(i);
}

function friendBuilder(friends) {
  if (friends.length <= 0) {
    return;
  } else if (friends.length == 1) {
    return (
      "<p><a href=''class='names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      "</a>" +
      " is also on Baby Step " +
      friends[0].babyStep +
      "<p>"
    );
  } else if (friends.length == 2) {
    return(
      "<p><a href=''class='names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      "</a> and <a href=''class='names'>" +
      friends[1].firstName +
      " " +
      friends[1].lastName +
      "</a>" +
      " are also on Baby Step " +
      friends[1].babyStep +
      "</p>"
    );
    } else if (friends.length >= 3) {
      return(
      "<p><a href=''class='names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      ", " +
      friends[1].firstName +
      " " +
      friends[1].lastName +
      ", </a> and <a href=''class='names'>" +
      friends[2].firstName +
      " " +
      friends[2].lastName +
      "</a>" +
      " are also on Baby Step " +
      friends[2].babyStep +
      "</p>"
    );
  }
};

function filterFriends(friends, babyStep) {
  var filteredFriends = friends
    .filter(function(friend) {
      return friend.babyStep == babyStep;
    })
  return filteredFriends;
}

function getFriends(babyStep) {
  $.ajax({
    url: "baby-steps.json",
    context: document.body,
    dataType: "json"
  }).done(function(data) {
    var filteredFriends = filterFriends(data.friends, babyStep);
    var text = friendBuilder(filteredFriends);
    var target = document.getElementById("friends-" + babyStep);
    $(target).append(text);
  })};
