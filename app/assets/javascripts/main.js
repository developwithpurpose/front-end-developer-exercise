var app = {
  config: {
    friendsData: "../baby-steps.json",
    mainNav: $('.baby_steps dt')
  },
  babyStepTransition: function(){

    app.config.mainNav.click(function(event){
      event.preventDefault();

      if($(this).hasClass('active')){
  			return false;
     	}else {
        app.config.mainNav.removeClass('active');
        $(this).addClass('active');
     	}

      var nextBabyStepNumber = parseInt($(this).attr('data-baby-step'));

      $('.baby_step_details.active').removeClass('active');
      $('.baby_step_details[data-baby-step='+nextBabyStepNumber+']').addClass('active');
      $('.baby_step_details[data-baby-step='+nextBabyStepNumber+']').children().delay(600).addClass('animated fadeInUp');

    });
  },
  fetchFriends: function(){
    $.ajax({
      url: app.config.friendsData,
      type: 'GET',
      dataType: 'json',
    }).then(function (response) {

      var friendsByStep = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
      };

      if (!response.friends || !$.isArray(response.friends)){
        return false;
      }else {
        // Place each friend into their Baby Step
        for (var i in response.friends) {
          var friend = response.friends[i];
          // Test that the JSON data is valid
          if (friendsByStep.hasOwnProperty(friend.babyStep)) {
            friendsByStep[friend.babyStep].push(friend);
          }
        }
      }

      // Sort friends in each step in ascending order by last name
      for (var step in friendsByStep) {
        friendsByStep[step].sort(function (a, b) {
          if (a.lastName > b.lastName) return 1;
          else if (a.lastName < b.lastName) return -1;
          return 0;
        });
        showFriendsOnStep(friendsByStep[step], step);
      }
    });

    function showFriendsOnStep(friends, step) {
      var friendsText;
      if (friends.length === 1) {
        friendsText = name(friends[0]) + ' is also in Baby Step ' + step;
      } else if (friends.length === 2) {
        friendsText = name(friends[0]) + ' and ' + name(friends[1]) + ' are also in Baby Step ' + step;
      } else if (friends.length === 3) {
        friendsText = name(friends[0]) + ', ' + name(friends[1]) + ', and 1 other friend are also in Baby Step ' + step;
      } else if (friends.length > 3) {
        friendsText = name(friends[0]) + ', ' + name(friends[1]) + ', and ' + (friends.length - 2) + ' other friends are also in Baby Step ' + step;
      }
      if (friendsText)
        $('<div class="friends">' + friendsText + '</div>').appendTo('.baby_step_details[data-baby-step='+step+'] .step_content');
    }

    function name(friend) {
      return '<a href="#" class="friend">' + friend.firstName + ' ' + friend.lastName + '</a>';
    }
  }
};

$(document).ready(function(){
  app.babyStepTransition();
  app.fetchFriends();
});
