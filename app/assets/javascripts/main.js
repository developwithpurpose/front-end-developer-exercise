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
    var statusHTML = "<p>";
    var friends = response.friends;
    var friendDivs = $('article .friend');
    var friendDivsLength = friendDivs.length;

    $.each(friendDivs, function(i, div){
      var stepFriends = [];
      $.each(friends, function(j, friend){
        if (friend.babyStep === i+1) {
          stepFriends.push(friend);
        }
      }); // end  friends .each
      // console.log(stepFriends);
      if (stepFriends.length == 1)
        $.each(stepFriends, function(k, friend){
          statusHTML += friend.firstName + " " + friend.lastName + " is also in Baby Step " + friend.babyStep;
        }); //end stepFriends .each
      // else if (stepFriends.length == 2)
      //   $.each(stepFriends, function(k, friend){
      //     status += friend.firstName + " " + friend.lastName;
      //   });
      else // end step Friends .each
        statusHTML += "NOT VALID";
      statusHTML += "</p>";
      $(div).html(statusHTML);
      statusHTML = "<p>";
    }); // end friendDivs .each

      // statusHTML += " are also in Baby Step ";

     // run through this loop through all of the articles (7)
  }); // end .getJSON
}); // end .ready


