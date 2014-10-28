var domready = require("domready");
var React = require("react");
var $ = require("jquery");
var babyStepsComponent = require("./components/babysteps");

domready(function () {
  $.ajax("/app/data/me.json")
    .done(function (me) {
      $.ajax("/app/data/friends.json")
        .done(function (friends) {
          var $friendsOnMyStep = $("#step" + me.babyStep + " .friends-on-my-step");

          React.renderComponent(
            babyStepsComponent.FriendsOnMyStep({friends: friends.friends, step: me.babyStep}),
            $friendsOnMyStep[0]
          );
        });
    });

  $(".nav li a").click(function (event) {
    var $target = $(event.currentTarget),
        stepSelector = event.currentTarget.hash;

    // Don't let the url change and shift the page position
    event.preventDefault();

    // Deactivate everything
    $(".nav li").removeClass("active");
    $(".content").removeClass("active");

    // Activate the step the user clicked on
    $(stepSelector).addClass("active");
    $target.parent("li").addClass("active");
  });
});
