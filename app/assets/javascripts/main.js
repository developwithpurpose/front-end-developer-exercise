$(document).ready(function(){

  $('.step').on('click', function() {
    var steps = $('li');
    var clickedStep = steps.index($(this).closest('li'));
    // var shiftStep = "+=61px";
    // var calcShiftStep = shiftStep;
    $(this).css('color', '#6fbee7');
    $(this).children('img').toggle();
    $(this).append('<img src="assets/images/icons/individual/icons_small_bs1_blue.png">');
    $('#focus').animate({top: '+=61px'});
    $('.content').scrollTop(400);
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


