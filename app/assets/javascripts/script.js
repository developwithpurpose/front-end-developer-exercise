
$(document).ready(function() {
    $("#without-js-message").hide();
    var app = {};

    app.start = function() {

      var $babyStepOne = $("#1");
      var $babyStepListItems = $("li");
      var $babyStepButtons = $("a");
      var $allBabyStepContent = $(".baby-step-content section");
      var endpoint = "baby-steps.json";

      function buildBabyStepObject(friends) {
        var name;
        return _.reduce(friends, function(result, friend) {
            name = friend.firstName + " " + friend.lastName;
            (result[friend.babyStep] || (result[friend.babyStep] = [])).push(name);
            return result;
          }, {});
      }

      function appendFriendsToPage(babyStepFriends) {
        _.each(babyStepFriends, function(friends, babyStep) {
          if (friends.length === 1) {
            text = "<a href='#'>" + friends[0] + "</a> is also in Baby Step " + babyStep;
          } else if (friends.length === 2) {
            text = "<a href='#'>" + friends[0] + "</a> and <a href='#'>" + friends[1] +
              "</a> are also in Baby Step " + babyStep;
          } else if (friends.length === 3) {
            text = "<a href='#'>" + friends[0] + "</a>, <a href='#'>" + friends[1] +
              "</a> and 1 other friend are also in Baby Step " + babyStep;
          } else if (friends.length > 4) {
            text = "<a href='#'>" + friends[0] + "</a>, <a href='#'>" + friends[1] +
              "</a> and " + (friends.length - 2) + " other friends are also in Baby Step "
              + babyStep;
          }
          $("#baby-step-" + babyStep + "-content").append( "<p class='baby-step-friends'>" + text + "</p>");
        });
      }

      function handleResponse(data) {
        // Improvement idea: using persistence
        var text;
        var compiled;
        var friendName;
        var key;
        var babyStepFriends = {};
        var friends = data.friends;
        // Sort friends by last name
        friends = _.sortBy(friends, ['babyStep', 'lastName'] );

        // Improvement step: Iterate through data once to sort and build final object
        babyStepFriends = buildBabyStepObject(friends);

        // Append to the UI
        appendFriendsToPage(babyStepFriends)
      }

      var dataRequest = $.getJSON(endpoint, handleResponse);

      $babyStepButtons.click(function(event) {
        // Stop browser from hitting the top of the screen rapidly
        event.preventDefault();
        // Add relevant styles
        $allBabyStepContent.removeClass("active");
        $babyStepListItems.removeClass("active");
        $(this).parent().addClass("active");
        $("#baby-step-" + event.target.id + "-content").addClass("active");
      });

      dataRequest.done(function() {
        $babyStepOne.click();
      });
    };

    // Start app
    app.start();
});
