(function() {
  var startStep = 1;
  var _babyStepFriends = {};

  /**
   * generateFriendLink returns links based of passed friend
   * @param  {[object]}
   * @return {[string]}
   */
  var generateFriendLink = function (friend){
    return '<a class="link" href="#">' + friend.firstName + ' ' +friend.lastName + '</a>';
  };

  /**
   * renderFriends returns the complete html string of current friends on step.
   * @param  {[array]}
   * @param  {[int]}
   * @return {[string]}
   */
  var renderFriends = function(currentFriends, currentStep){
    switch (currentFriends.length) {
      case 0:
        return '';
      case 1:
        return generateFriendLink(currentFriends[0]) +" is also in Baby Step " + currentStep;
      case 2:
        return generateFriendLink(currentFriends[0]) + " and " + generateFriendLink(currentFriends[1]) +" are also in Baby Step " + currentStep;
      case 3:
        return generateFriendLink(currentFriends[0]) + ", "+ generateFriendLink(currentFriends[1]) +", and 1 other friend are also in Baby Step " + currentStep;
      default:
        return generateFriendLink(currentFriends[0]) + ", "+  generateFriendLink(currentFriends[1]) +", and 2 other friends are also in Baby Step " + currentStep;
    }

  }

  /**
   * getFriends makes an ajax call to get the list of friends from json file
   * @param  {int}
   */
  var getFriends = function (currentStep){
    var success = function(response){
      _babyStepFriends = response.friends;
      setFriends(currentStep);
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

  /**
   * setFriends sets the friend text in the current step view
   * @param  {[int]}
   */
  var setFriends = function(currentStep) {
    var selectedFriends = _.filter(_babyStepFriends, {'babyStep': currentStep});
    var sorted =_.sortBy(selectedFriends, function(friend) { return friend.lastName; });
    var template = renderFriends(sorted, currentStep);
    getCurrentStepNode(currentStep).child.find('.step-footer').html(template);
  };

  /**
   * getCurrentStepNode gets the current step node in the parent
   * @param  {int}
   * @return {[object]}
   */
  var getCurrentStepNode = function(index){
    var parent = $('.step-list');
    var childList = $('.step-list article').data('data-step-content', index);
    var child = $(childList[index-1]);
    return {
      parent: parent,
      child: child
    };
  }

  /**
   * moveStep moves the step content into view
   * @param  {int}
   */
  var moveStep = function (nextStep){
    // set height based current node position in parent
    $('.step-list').css('top', '-' + getCurrentStepNode(nextStep).child.position().top + 'px');
  }

  /**
   * moveNav Moves the highlight to the selected step
   * @param  {[int]}
  */
  var moveNav = function(currentStep){
    // current top position
    var position = $( currentStep ).position();
    $('.navigation__list--hightlight').css({'top' : position.top + 'px'});
  }

  /**
   * setup sets up the app when broswer is ready
   */
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
      setFriends(index);
  
      // remove and add css class
      $(currentSelected).removeClass('active');
      $(e.target).addClass('active');
    });
    
    // create defualt styles
    $('.navigation__list--hightlight').css({'display' : 'block'});
    $('ul li:first-child a').addClass('active');
    getFriends(startStep);
  }

  $(document).ready( function() {
    setup();
  });

})();