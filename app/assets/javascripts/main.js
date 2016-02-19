
$(document).ready(function() {
  var counter = 0;
  var friendsBabyStep;
  var steps;
  $.ajax({
    url: "/../../baby-steps.json"
  }).done(function(baby_steps) {
    $('#step1').click(function() {
      for (var i = 0; i < baby_steps.friends.length; i++) {
        friendsBabyStep = "<div>";
        friendsBabyStep +=   "<p class='friends'>" + baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName + "</p>";
        friendsBabyStep += "<p>and " + counter + " Other Friends are on this step.</p>";
        friendsBabyStep += "<div>";
        steps = baby_steps.friends[i].babyStep;
      
        // if (baby_steps.friends[i].babyStep === 7) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // } else if (baby_steps.friends[i].babyStep === 6) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // }else if (baby_steps.friends[i].babyStep === 5) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // }else if (baby_steps.friends[i].babyStep === 4) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // }else if (baby_steps.friends[i].babyStep === 3) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // }else if (baby_steps.friends[i].babyStep === 2) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // }else if (baby_steps.friends[i].babyStep === 1) {
        //   $( "#myFriends" ).append(friendsBabyStep);
        // } else {     
        // }
        if (steps === 1) {
          $( "#myFriends" ).append(friendsBabyStep);
        }
      }  
    });

  });


  // $('.babyStepsNav a').click(function(){
  //   console.log("hello");
  //   $('.highlight').removeClass('highlight');
  //   $(this).addClass('highlight');

  // });

});