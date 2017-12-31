jQuery( document ).ready(function() {

  // function to allow for changing of styles in sidenav
  $('.babySteps div a').on('click', function(e) {
    // remove class from previously selected menu item
    $('.babySteps .activeBabyStep').removeClass( 'activeBabyStep' );
    $('.babySteps .activeBabyStepLayout').removeClass( 'activeBabyStepLayout' );

    // add class to currently selected baby step menu item
    $('.babySteps div').eq($(this).parent().index()).addClass( 'activeBabyStep' );
    $('.babySteps div').eq($(this).parent().index()).addClass( 'activeBabyStepLayout', 750 );

    // hide initial welcome page
    $('.welcomePage').addClass('displayNone');
  });

  // ajax call to retrieve friends on each baby step
  $.get( "../../baby-steps.json", function( data ) {
    var friendsInEachStep = { '1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [] };

    for(var i = 0; i < data.friends.length; i++) {
      friendsInEachStep[data.friends[i].babyStep].push(data.friends[i]);
    }

    for(var i = 1; i < 8; i++) {
      if(friendsInEachStep[i].length == 0) {
        // no friends in this step
      } else if(friendsInEachStep[i].length == 1) {
        $('#bs' + i + 'Friends').append('<p><a>' + friendsInEachStep[i][0].firstName + ' ' + friendsInEachStep[i][0].lastName + '</a> is also in Baby Step ' + i + '</p>');
      } else if(friendsInEachStep[i].length == 2) {
        $('#bs' + i + 'Friends').append('<p><a>' + friendsInEachStep[i][0].firstName + ' ' + friendsInEachStep[i][0].lastName + '</a> and <a>' +
          friendsInEachStep[i][1].firstName + ' ' + friendsInEachStep[i][1].lastName + '</a> are also in Baby Step ' + i + '</p>');
      } else {
        $('#bs' + i + 'Friends').append('<p><a>' + friendsInEachStep[i][0].firstName + ' ' + friendsInEachStep[i][0].lastName + '</a>, <a>' +
          friendsInEachStep[i][1].firstName + ' ' + friendsInEachStep[i][1].lastName + '</a> and ' + (friendsInEachStep[i].length - 2) + ' other friend(s) are also in Baby Step ' + i + '</p>');
      }
    }

  });

});
