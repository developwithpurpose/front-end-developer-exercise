let selectStep = (function () {
  let selection;
  return function (index) {
    if (selection !== undefined) {
      toggleStep(selection, false);
    }
    selection = index;
    toggleStep(index, true);
  };
})();

function toggleStep(index, toggle) {
  let link = $(".step-link").eq(index);
  let text = $(".content-article").eq(index);
  if (toggle) {
    link.addClass("selected-step");
    text.addClass("shown");
  } else {
    link.removeClass("selected-step");
    text.removeClass("shown");
  }
  $(".step-link .nav-img")
    .eq(index)
    .attr("src", getBlueImage(index, toggle));
}

$(document).ready(function () {
  $(".step-link").click(function (e) {
    selectStep(
      $("#" + e.currentTarget.id)
        .parent()
        .parent()
        .index()
    );
    return false;
  });
  $(".content-article").addClass("hidden");
  selectStep(0);
});

function getBlueImage(index, blue) {
  return `./assets/images/icons/individual/icons_small_bs${index + 1}${
    blue ? "_blue" : ""
    }.png`;
}

function getFriends() {
  $.ajax({
    url: "./baby-steps.json",
    success: function (result) {
      let friends = result.friends;
      for (let i = 0; i < 7; i++) {
        let filtered = friends.filter(function (friend) {
          return friend.babyStep === i + 1;
        });
        $(".content-article .friends")
          .eq(i)
          .html(friendsInStep(i, filtered));
      }
    }
  });
}

function friendsInStep(i, friends) {
  if (friends.length >= 1) {
    return (
      "<a>" +
      `${friends[0].firstName} ${friends[0].lastName}` +
      "</a>" +
      (friends.length > 1 ? (friends.length > 2 ? ", " : " and ") +
        "<a>" + `${friends[1].firstName} ${friends[1].lastName}` +
        "</a>" + (friends.length > 2 ? ", and " +
          (friends.length - 2) + " other friend" +
          (friends.length > 3 ? "s " : " ") : " ") + "are " : " is ") + "also in Baby Step " + (i + 1));
  }
  return (
    ""
  );
}

$(document).ready(function () {
  getFriends();
  $(".step-link").click(function (e) {
    selectStep(
      $("#" + e.currentTarget.id)
        .parent()
        .parent()
        .index()
    );
    return false;
  });
  $(".content-article").addClass("hidden");
  selectStep(0);
});
