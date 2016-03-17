$(document).ready(function() {
  var stepNum = parseInt($("#stepNum").html());
  $.ajax({
        url: "../baby-steps.json",
        }).done(function(friends){

        var friends = _.filter(friends.friends, _.matchesProperty('babyStep', stepNum));
          var names = [];
        _(friends).forEach(function(friends){
          return names.push(friends.firstName)

      });

        if(names.length < 2 && names.length > 0) {
            $("#friends").html("<p>" + "<a href='#'>" + names + "</a>"+ " " + "is on this step.</p>")
          };
        if(names.length === 2) {

          $("#friends").html("<p>" + "<a href='#'>" + names[0] + "</a>" + " and " + "<a href='#'>" + names[1] + "</a>" + " are on this step.</p>")
          };
        if(names.length === 3) {
          $("#friends").html("<p>" + "<a href='#'>" + names[0] + "</a>" + " , " + "<a href='#'>" + names[1] + "</a>" + " and " + "<a href='#'>" + names[2] + "</a>" + " are on this step.</p>")
          };
        if(names.length > 3) {
          var remainingFriends = names.length - 2;
          remainingFriends.toString();
          $("#friends").html("<p>" + "<a href='#'>" + names[0] + "</a>" + ", " + "<a href='#'>" + names[1] + "</a>" + " and " + remainingFriends + " others are on this step.</p>")
          };
    });
});
