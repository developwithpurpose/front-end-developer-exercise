$(document).ready(function(){
  $('.baby-step').hide();
  $('.baby-step.active').show();

  //Load in baby steps json for first step on load
  getBabyStepFriends(1);

  //user clicks on step
  $('a[class^="step"]').click(function(event) {
    event.preventDefault();

    //Get the step name from the class on the button.
    var step_class = $(this).attr('class').split(' ')[0];
    var step = step_class.split('-')[1];

    //Check if clicked step is the current active step, if not do transition.
    if($('.'+step_class+"-text").hasClass('active') == false){
      /***content transition***/
      //Fade out active step content and remove active class.
      $('.baby-step.active').fadeOut("slow", function() {
        $('.baby-step.active').removeClass("active");
        //Fade in clicked step content and add active class to content.
        $('.'+step_class+"-text").fadeIn("slow", function() {
          $('.'+step_class+"-text").addClass("active");
        });
      });

      /***nav transition***/
      //Remove active class from current step link and add it to clicked step.
      $('ul li a.active').toggleClass('active');
      $(this).toggleClass('active');

      //Get friends for selected baby step.
      getBabyStepFriends(step);
    }

  });
});

function getBabyStepFriends(step) {
  //get JSON
  $.getJSON('assets/javascripts/baby-steps.json', "", function(data){
    //success
    var current_step_friends = new Array();
    //Loop through JSON objects, add ones on current step to an array.
    $.each(data.friends, function(key, friend) {
      if(friend.babyStep == step) {
        current_step_friends.push(friend);
      }
    });

    //If there are friends on current step, sort them and generate message.
    var number_of_friends = current_step_friends.length;
    var message = ""
    if(number_of_friends > 0) {
      current_step_friends.sort(function(friend_1, friend_2){
        if(friend_1.lastName < friend_2.lastName) {
          return -1
        }
        if(friend_1.lastName > friend_2.lastName) {
          return 1
        }

        return 0
      });

      friend_1 = "<span class='friend'>" + current_step_friends[0].firstName+" "+current_step_friends[0].lastName + "</span>";
      if(number_of_friends >= 2) {
        friend_2 = "<span class='friend'>" + current_step_friends[1].firstName+" "+current_step_friends[1].lastName + "</span>";
      }

      if(number_of_friends == 1) {
        message = friend_1 + " is also in Baby Step " + step;
      }
      else if(number_of_friends == 2) {
        message = friend_1 + " and " + friend_2 + " are also in Baby Step " + step;
      }
      else if(number_of_friends == 3) {
        message = friend_1 + ", " + friend_2  + ", and 1 other friend are also in Baby Step " + step;
      }
      else {
        num_other_friends = number_of_friends - 2;
        message = friend_1 + ", " + friend_2 + ", and " + num_other_friends + " other friends are also in Baby Step "+step;
      }

      $('.baby-step.step-'+step+'-text .baby-step-friends').html(message);
    }

  });
}
