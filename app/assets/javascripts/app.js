(function() {
  var startStep = 1;
  var _babyStepFriends = {};

  var generateFriendLink = function (friend){
    return '<a class="link" href="#">' + friend.firstName + ' ' +friend.lastName + '</a>';
  };

  var renderFriends = function(currentFriends, currentStep){
    var html = '';
    switch (currentFriends.length) {
      case 0:
        html = '';
        break;
      case 1:
        html =  generateFriendLink(currentFriends[0]) +" is also in Baby Step " + currentStep;
        break;
      case 2:
        html =  generateFriendLink(currentFriends[0]) + " and " + generateFriendLink(currentFriends[1]) +" are also in Baby Step " + currentStep;
        break;
      case 3:
        html =  generateFriendLink(currentFriends[0]) + ", "+ generateFriendLink(currentFriends[1]) +", and 1 other friend are also in Baby Step " + currentStep;
        break;
      default:
        html = generateFriendLink(currentFriends[0]) + ", "+  generateFriendLink(currentFriends[1]) +", and 2 other friends are also in Baby Step " + currentStep;
        break;
    }

    return html;
  }

  var getFriends = function (currentStep){
    var success = function(response){
      _babyStepFriends = response.friends;
      moveFriends(currentStep);
    }
    var error = function(error){
      console.log(error)
    }

    $.ajax({
      url: '/assets/data/baby-steps.json',
      success: success,
      error: error,
      dataType: 'json'
    });
  }

  var moveFriends = function(currentStep) {
    var selectedFriends = _.filter(_babyStepFriends, {'babyStep': currentStep});
    var sorted =_.sortBy(selectedFriends, function(friend) { return friend.lastName; });
    var template = renderFriends(sorted, currentStep);
    getCurrentStepNode(currentStep).child.find('.step-footer').html(template);
  };

  var getCurrentStepNode = function(index){
    var parent = $('.step-list');
    var childList = $('.step-list article').data('data-step-content', index);
    var child = $(childList[index-1]);
    return {
      parent: parent,
      child: child
    };
  }

  var moveStep = function (nextStep){
    // set height based current node position in parent
    $('.step-list').css('top', '-'+ getCurrentStepNode(nextStep).child.position().top+'px');
  }

  var moveNav = function(currentStep){
    // current top position
    var position = $( currentStep ).position();
    $('.hightlight').css({'top' : position.top + 'px'});
  }

  var setup = function(){
    // create event listener
    $('ul li').on('click', function(e) {
      var currentSelected = $('.navigation a.active');
      var index = $(this).data('step');
      
      e.stopPropagation();
      e.preventDefault();

      // trigger the hottness
      moveNav(this);
      moveStep(index);
      moveFriends(index);
  
      // remove and add css class
      $(currentSelected).removeClass('active');
      $(e.target).addClass('active');
    });
    getFriends(startStep);
  }

  $(document).ready( function() {
    setup();
  });

})();