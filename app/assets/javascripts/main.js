$(document).ready(function(){

  pageStartup();

  $('.navbar_a_link').click( function(e) {
      e.preventDefault();
      var step = e.target.attributes.step.value;
      if(step){
        $('.navbar_text').removeClass("selected");
        $('.navbar_icon').removeClass("selected");

        $('.navbar_text.bs'+step).addClass("selected");
        $('.navbar_icon.icon_sm_bs'+step).addClass("selected");

        var babystepHeight = 500;
        var navbarHeight   = 61;
        $('#content_babysteps_panel').scrollTop(babystepHeight*(step-1));
        $('#navbar_slider').animate({
          top: navbarHeight*(step-1)
        });
      }

      return false;
  });
});



function findCurrentBabyStepFriends(friends, step){
  var currentStepFriends = [];
  for(var i=0; i < friends.length; i++){
    if(friends[i].babyStep == step)
      currentStepFriends.push(friends[i]);
  }
  return currentStepFriends;
}



function pageStartup(){
  $('.navbar_text.bs1').addClass("selected");
  $('.navbar_icon.icon_sm_bs1').addClass("selected");
  $('.navbar_slider').addClass("babysteps_bg_color");

  $.ajax({
    url: document.location.origin + "/baby-steps.json",
  }).done(function( data ) {
      if ( data && data.friends) {
        var currentFriends;
        var stepFriends = [];
        currentFriends = data.friends;
        for(var i=1; i<8; i++){
          stepFriends = findCurrentBabyStepFriends(currentFriends, i);

          switch(stepFriends.length){
            case 0: break;
            case 1: $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a> ");
                    $(".current_friends.bs"+i).append('<span>is also in Baby Step ' + i + '</span>');
                    break;
            case 2: $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a> and ");
                    $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</a> ");
                    $(".current_friends.bs"+i).append('<span>are also in Baby Step' + i + '</span>');
                    break;
            case 3: $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a>, ");
                    $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</a> and ");
                    $(".current_friends.bs"+i).append('<span>1 other friend are also in Baby Step ' + i + '</span>');
                    break;
            default:
                    if(stepFriends.length > 3){
                      $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</a>, ");
                      $(".current_friends.bs"+i).append('<a href="#" onClick="return false;">' + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</a> and ");
                      $(".current_friends.bs"+i).append('<span>' + (stepFriends.length-2) + ' other friends are also in Baby Step ' + i + '</span>');
                    }
          }//end switch
        }//end for
      }//end if
  });
}
