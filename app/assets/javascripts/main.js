$(document).ready(function(){

  var steps = $('li'); // Array of all li's
  var currentStep = currentStep || 1; // sets current step after click or sets the first step on page load
  var clickedStep;

// Resets the nav styling
  var reset = function(){
    $('.step').css('color', '#9ba0a4'); // $nav_text_grey
    $('.step').children('img').show();
    $('#focus_img').hide();
  }

//
  $('.step').on('click', function() {
    clickedStep = (steps.index($(this).closest('li'))) + 1;
    var activeImage = "assets/images/icons/individual/icons_small_bs" + clickedStep + "_blue.png"
    var thingsAnimateDistance = (clickedStep - currentStep) * 400;
    var navAnimateDistance = (clickedStep - currentStep) * 61;

    reset();
    $(this).css('color', '#6fbee7');
    $(this).children('img').toggle();
    $(this).append('<img id="focus_img" src=' + activeImage + '>');
    $('#focus').animate({ "top": '+=' + navAnimateDistance + 'px' }, "slow");
    $('#things').animate({ "top": '-=' + thingsAnimateDistance + 'px' }, "slow");
    currentStep = clickedStep;
  });


  var url = "/app/assets/javascripts/baby-steps.json";
  $.getJSON(url, function(response){
    var statusHTML = "<p>";
    var friends = response.friends;
    // var friendsCount = response.friends.length;

    $.each(friends, function(index, friend){
      var currArt = $('#friend2').parent();
      // var currVal = $(currArt).attr('id');
      if (parseInt((currArt).attr('id')) === parseInt(friend.babyStep)) {
        statusHTML += friend.firstName + " ";
        statusHTML += friend.lastName + " is also in Baby Step " + friend.babyStep;
      }
    }); // end .each
    statusHTML += "</p>";
    $("#friend2").html(statusHTML);
  }); // end .getJSON
}); // end .ready


