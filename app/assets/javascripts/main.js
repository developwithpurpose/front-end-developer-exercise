
$(document).ready(function() {
  var counter = 0;
  $.ajax({
    url: "/../../baby-steps.json"
  }).done(function(baby_steps) {
    for (var i = 0; i < baby_steps.friends.length; i++) {
      var friendsOnTheSameBS = "<div>";
      friendsOnTheSameBS +=   "<p>" + baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName;
      friendsOnTheSameBS += " and " + counter + " other friends are on this step.</p>";
      friendsOnTheSameBS += "<div>";
      
      if (baby_steps.friends[i].babyStep === 7) {
        $( "#right-col" ).append(friendsOnTheSameBS);
      }
    }
  });
});