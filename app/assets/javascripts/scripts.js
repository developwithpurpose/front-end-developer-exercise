$(document).ready(function() {
  $("body").removeClass("none-js");
});

// Instantiate the tabs effects
$(function() {
  $("#tabs").tabs({
    active: 0,
    hide: {
      effect: "slide",
      direction: "up",
      duration: 250
    },
    show: {
      effect: "slide",
      direction: "down",
      duration: 250
    },
    create: function(event, ui) {
      $(ui.tab[0].children[1]).animate(
        {
          right: "20px"
        },
        100
      );
      $(ui.tab[0].children[0]).animate(
        {
          backgroundColor: "#ffffff"
        },
        200
      );
    },
    activate: function(event, ui) {
      console.log($(ui.newTab[0].children[0]));
      $(ui.newTab[0].children[1]).animate(
        {
          right: "20px"
        },
        100
      );
    },
    beforeActivate: function(event, ui) {
      $(ui.oldTab[0].children[1]).animate(
        {
          right: "0px"
        },
        200
      );
      $(ui.oldTab[0].children[0]).animate(
        {
          backgroundColor: "transparent"
        },
        200
      );
      $(ui.newTab[0].children[0]).animate(
        {
          backgroundColor: "#ffffff"
        },
        200
      );
    }
  });
});

// Getting all of the friends for all seven baby steps
for (i = 1; i < 8; i++) {
  getFriends(i);
}

// This is where the Ajax call will be made (getFriends), to get friends in the JSON friends objects
function getFriends(val) {
  var friends = $.ajax({
    url: "baby-steps.json",
    context: document.body,
    dataType: "json"
  }).done(function(data) {
    var filteredFriends = filterFriends(data.friends, val);
    var html = buildHTML(filteredFriends);
    var target = document.getElementById("friends-" + val);
    $(target).append(html);
  });
}

// For each Baby Step, friends will be filtered here, using A JS filterFriends function
function filterFriends(friends, val) {
  var filteredFriends = friends
    .filter(function(friend) {
      return friend.babyStep == val;
    })
    .sort(sortLastName("lastName"));

  return filteredFriends;
}

// Here the names will be alphabetized based on last names in ascending order
function sortLastName(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function(a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
}

// Messages where the HTML will be constructed with the JS buildHTML funcion
function buildHTML(friends) {
  if (friends.length <= 0) {
    return;
  } else if (friends.length == 1) {
    return (
      "<p class='friend-status'><a href=''class='friends-names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      "</a> is also on Baby Step " +
      friends[0].babyStep +
      "</p>"
    );
  } else if (friends.length == 2) {
    return (
      "<p class='friend-status'><a href=''class='friends-names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      "</a> and <a href=''class='friends-names'>" +
      friends[1].firstName +
      " " +
      friends[1].lastName +
      "</a> are also on Baby Step " +
      friends[0].babyStep +
      "</p>"
    );
  } else if (friends.length == 3) {
    var count = friends.length - 2;
    return (
      "<p class='friend-status'><a href=''class='friends-names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      "</a>, <a href=''class='friends-names'>" +
      friends[1].firstName +
      " " +
      friends[1].lastName +
      "</a>, and " +
      count +
      " other are also on Baby Step " +
      friends[0].babyStep +
      "</p>"
    );
  } else if (friends.length >= 4) {
    var count = friends.length - 2;
    return (
      "<p class='friend-status'><a href=''class='friends-names'>" +
      friends[0].firstName +
      " " +
      friends[0].lastName +
      "</a>, <a href=''class='friends-names'>" +
      friends[1].firstName +
      " " +
      friends[1].lastName +
      "</a>, and " +
      count +
      " others are also on Baby Step " +
      friends[0].babyStep +
      "</p>"
    );
  }
}
