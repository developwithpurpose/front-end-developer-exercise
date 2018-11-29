$(function() {
  var $window = $(window);
  var $body = $(document.body);
  var $babystepsContainer = $('.babysteps');
  var $babystepsContent = $('.babysteps-content', $babystepsContainer);
  var $babystepsMenu = $('.babysteps-list', $babystepsContainer);
  var $babystepLinks = $('.babysteps-list-link', $babystepsMenu);
  var stepsPositionMap = calculateBabystepPositions();
  var $babystepLinksDefault = findBabystepLinkByLocationHash() || $babystepLinks.first();
  var activeStepId = '';

  
  /**
   * On init
   */
  activateBabyStep($babystepLinksDefault);
  fetchAndPopulateFriends();
  $body.addClass('js-on');


  /**
   * Bindings
   */
  $babystepLinks.on('click', function(e) {
    e.preventDefault();
    activateBabyStep($(e.currentTarget));
  });

  $window.on('hashchange', function() {
    var $babystepLinkTarget = findBabystepLinkByLocationHash();

    if ($babystepLinkTarget) {
      activateBabyStep($babystepLinksDefault);
    }
  });


  /**
   * Logic
   */
  function activateBabyStep($babystepAnchor) {
    var targetElementId = $($babystepAnchor).attr('href').replace('#', '');

    // Do nothing if step has not changed
    if (targetElementId === activeStepId) {
      return;
    }

    // Remember previous step
    activeStepId = targetElementId;

    // Reset previous selections
    resetAllBabystepsToInactive();

    // Activate desired selection
    var $targetContentElement = $('#' + targetElementId);
    $targetContentElement.addClass('active');
    $babystepAnchor.closest('.babysteps-list-item').addClass('active');
    scrollToBabystep(targetElementId);
  }

  function resetAllBabystepsToInactive() {
    $('.babysteps-list-item', $babystepsMenu).removeClass('active');
    $('.babysteps-content-item', $babystepsContent).removeClass('active');
  }

  function scrollToBabystep(contentItemElementId) {
    var containerOffset = $babystepsContent.offset();
    var position = stepsPositionMap[contentItemElementId];

    $babystepsContent.animate({
      scrollTop: position.top - containerOffset.top
    }, 350);
  }

  function calculateBabystepPositions() {
    var stepsPositionMap = {};

    $('.babysteps-content-item', $babystepsContent).each(function(i, elem) {
      var $elem = $(elem);
      stepsPositionMap[$elem.attr('id')] = $elem.offset();
    });

    return stepsPositionMap;
  }

  function findBabystepLinkByLocationHash() {
    var locationHash = location.hash.replace('#', '');

    $('.babysteps-list-link[href="#' + locationHash + '"]');

    if (!locationHash || !stepsPositionMap[locationHash]) {
      return null;
    }

    $babystepLinksDefault = $('.babysteps-list-link[href="#' + locationHash + '"]');

    return ($babystepLinksDefault.length > 0)
      ? $babystepLinksDefault
      : null;
  }

  function fetchAndPopulateFriends() {
    $.get('baby-steps.json')
      .then(function(response) {
        var friends = response.friends;
        var sortedFriends = sortFriendsByLastName(friends);
        var friendsOutput = mapFriendsByBabystep(sortedFriends);
        populateFriendsInBabysteps(friendsOutput);
      })
      .catch(function() {
        // todo: implement error handling
      });
  }

  function sortFriendsByLastName(friends) {
    return friends.sort(function(a, b) {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  function mapFriendsByBabystep(friends) {
    var babysteps = {};

    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];
      var key = "babystep" + friend.babyStep;
  
      if (!babysteps[key]) {
        babysteps[key] = [];
      }
  
      babysteps[key].push(friend);
    }

    return babysteps;
  }

  function populateFriendsInBabysteps(friends) {
    var babystepIds = Object.keys(friends);

    for (var i = 0; i < babystepIds.length; i++) {
      var babystepId = babystepIds[i];
      var $friendElement = $('.babysteps-friends', '#' + babystepId);
      var friendsInBabyStep = friends[babystepId];
      var messageFromFriends = formatFriendMessage(friendsInBabyStep);

      $friendElement.html(messageFromFriends);
    }
  }

  function formatFriendMessage(friendsInBabyStep) {
    var friend1, friend2, friend1Anchor, friend2Anchor;
    var friendsArray = friendsInBabyStep.slice();

    if (friendsArray.length === 1) {
      friend1 = friendsArray.shift();
      
      return $('<span>')
        .append(getFriendAnchor(friend1))
        .append(' is also in Baby Step ' + friend1.babyStep);
    } else if (friendsArray.length === 2) {
      friend1 = friendsArray.shift();
      friend2 = friendsArray.shift();
      friend1Anchor = getFriendAnchor(friend1);
      friend2Anchor = getFriendAnchor(friend2);

      return $('<span>')
        .append(friend1Anchor)
        .append(' and ')
        .append(friend2Anchor)
        .append(' are also in Baby Step ' + friend1.babyStep);
    } else if (friendsArray.length === 3) {
      friend1 = friendsArray.shift();
      friend2 = friendsArray.shift();
      friend1Anchor = getFriendAnchor(friend1);
      friend2Anchor = getFriendAnchor(friend2);

      return $('<span>', { html: friend1Anchor })
        .append(', ')
        .append(friend2Anchor)
        .append(', and 1 other friend are also in Baby Step ' + friend1.babyStep);
    } else if (friendsArray.length >= 4) {
      friend1 = friendsArray.shift();
      friend2 = friendsArray.shift();
      friend1Anchor = getFriendAnchor(friend1);
      friend2Anchor = getFriendAnchor(friend2);

      return $('<span>', { html: friend1Anchor })
        .append(', ')
        .append(friend2Anchor)
        .append(', and ' + friendsArray.length + ' other friends are also in Baby Step ' + friend1.babyStep);
    }

    return null;
  }

  function getFriendAnchor(friend) {
    var fullName = formatFriendName(friend);

    return $('<a>', {
      href: '',
      rel: 'noopener noreferrer',
      target: '_blank',
      text: fullName,
      title: 'See profile of ' + fullName,
    });
  }

  function formatFriendName(friend) {
    return friend.firstName + " " + friend.lastName;
  }
});
