$(document).ready(function(){
  var steps = $('li'); // Array of all li's
  var currentStep = currentStep || 1; // sets current step after click or sets the first step on page load
  var clickedStep;
  var ARTICLE_HEIGHT = 400;
  var NAV_STEP_HEIGHT = 61;

// Resets the nav styling
  var reset = function(){
    $('.step').css('color', '#9ba0a4'); // $nav_text_grey
    $('.blue').hide();
    $('.grey').show();
  }
  reset();

// Resets nav styles and updates selected styles and sets focus on click
  $('.step').on('click', function(event) {
    event.preventDefault();
    clickedStep = (steps.index($(this).closest('li'))) + 1;
    var articlesAnimateDistance = (clickedStep - currentStep) * ARTICLE_HEIGHT;
    var navAnimateDistance = (clickedStep - currentStep) * NAV_STEP_HEIGHT;
    reset();
    $(this).css('color', '#6fbee7');
    $(this).children('.grey').hide();
    $(this).children('.blue').show();
    $('#focus').animate({ "top": '+=' + navAnimateDistance + 'px' }, "slow");
    $('#articles').animate({ "top": '-=' + articlesAnimateDistance + 'px' }, "slow");
    currentStep = clickedStep;
  });

// Adds friend's baby step info on page load
  var url = "/app/assets/javascripts/baby-steps.json";
  $.getJSON(url, function(response){
    var statusHTML;
    var friends = response.friends;
    var friendDivs = $('article .friend');

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
            return 0;
          }); // end .sort
        }
      }); // end friends .each

      // set message based on number of friends in baby step
      if (stepFriends.length === 1){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p class='friend-data'><a href='#'>" + friend.firstName + " " + friend.lastName + "</a> is also in Baby Step " + friend.babyStep + "</p>";
        }); //end stepFriends .each
      }
      else if (stepFriends.length === 2){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p class='friend-data'><a href='#'>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a> and <a href='#'>" + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</a> are also in Baby Step " + friend.babyStep + ".</p>";
        }); //end stepFriends .each
      }
      else if (stepFriends.length == 3){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p class='friend-data'><a href='#'>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a>, <a href='#'>" + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</a> and " + (stepFriends.length - 2) + " other friend is also in Baby Step " + friend.babyStep + ".</p>";
        }); //end stepFriends .each
      }
      else if (stepFriends.length > 3){
        $.each(stepFriends, function(k, friend){
          statusHTML = "<p class='friend-data'><a href='#'>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a>, <a href='#'>" + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</a> and " + (stepFriends.length - 2) + " other friends are also in Baby Step " + friend.babyStep + ".</p>";
        }); //end stepFriends .each
      }

      $(div).html(statusHTML);

    }); // end friendDivs .each
  }); // end .getJSON

// Just for fun
console.log("  _ _             _ _ _");
console.log(" | (_)           | (_) |");
console.log(" | |___   _____  | |_| | _____   ");
console.log(" | | \\ \\ / / _ \\ | | | |/ / _ \\  ");
console.log(" | | |\\ V /  __/ | | |   <  __/  ");
console.log(" |_|_| \\_/_\\___| |_|_|_|\\_\\___|_");
console.log(" | '_ \\ / _ \\   / _ \\| '_ \\ / _ \\");
console.log(" | | | | (_) | | (_) | | | |  __/");
console.log(" |_| |_|\\___/   \\___/|_| |_|\\___|");
console.log("   ___| |___  ___");
console.log("  / _ \\ / __|/ _ \\");
console.log(" |  __/ \\__ \\  __/");
console.log("  \\___|_|___/\\___|");

}); // end .ready


