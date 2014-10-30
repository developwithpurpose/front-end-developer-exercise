$(document).ready(function(){

  var steps = $('li'); // Array of all li's
  var currentStep = currentStep || 1; // sets current step after click or sets the first step on page load
  var clickedStep;

// Resets the nav styling
  var reset = function(){
    $('.step').css('color', '#9ba0a4'); // $nav_text_grey
    $('.blue').hide();
    $('.grey').show();
  }

  reset();

// Resets nav styles and updates selected styles and sets focus
  $('.step').on('click', function() {
    clickedStep = (steps.index($(this).closest('li'))) + 1;
    var activeImage = "assets/images/icons/individual/icons_small_bs" + clickedStep + "_blue.png"
    var thingsAnimateDistance = (clickedStep - currentStep) * 400;
    var navAnimateDistance = (clickedStep - currentStep) * 61;
    reset();
    $(this).css('color', '#6fbee7');
    $(this).children('.grey').hide();
    $(this).children('.blue').show();
    $('#focus').animate({ "top": '+=' + navAnimateDistance + 'px' }, "slow");
    $('#things').animate({ "top": '-=' + thingsAnimateDistance + 'px' }, "slow");
    currentStep = clickedStep;
  });

// Adds friend's baby step info on page load
  var url = "/app/assets/javascripts/baby-steps.json";
  $.getJSON(url, function(response){
    var statusHTML;
    var friends = response.friends;
    var friendDivs = $('article .friend');
    var friendDivsLength = friendDivs.length;

    $.each(friendDivs, function(i, div){
      var stepFriends = [];
      $.each(friends, function(j, friend){
        if (friend.babyStep === i+1) {
          stepFriends.push(friend);
          stepFriends.sort(function (a, b) {
            if (a.lastName > b.lastName) {
              return 1;
            }
            if (a.lastName < b.lastName) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }
      }); // end  friends .each
      if (stepFriends.length === 1){
        $.each(stepFriends, function(k, friend){
          statusHTML += "<p>" + friend.firstName + " " + friend.lastName + " is also in Baby Step " + friend.babyStep + "</p>";
        });
      } //end stepFriends .each
      else if (stepFriends.length === 2){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + " and " + stepFriends[1].firstName + " " + stepFriends[1].lastName + " are also in Baby Step " + friend.babyStep + ".</p>";
        });
      }
      else if (stepFriends.length == 3){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + " and " + stepFriends[1].firstName + " " + stepFriends[1].lastName + " and " + (stepFriends.length - 2) + " other friend is also in Baby Step " + friend.babyStep + ".</p>";
        });
      }
      else if (stepFriends.length > 3){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + " and " + stepFriends[1].firstName + " " + stepFriends[1].lastName + " and " + (stepFriends.length - 2) + " other friends are also in Baby Step " + friend.babyStep + ".</p>";
        });
      }

      $(div).html(statusHTML);

    }); // end friendDivs .each
  }); // end .getJSON
}); // end .ready


