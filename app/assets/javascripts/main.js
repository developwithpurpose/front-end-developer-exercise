'use strict';

(function () {
  'use strict';

  var slideRightSidebar = function slideRightSidebar(stepNumber) {
    $('#baby-steps-panel').css('top', '-' + (stepNumber - 1) * 800 + 'px');
  };
  slideRightSidebar(1);

  $.get('../baby-steps.json', function (data) {
    $.makeArray($('#baby-steps-panel').find('section')).map(function (section) {
      var sectionId = parseInt(section.getAttribute('id').split('-')[1]);
      $.makeArray($('#' + section.getAttribute('id')).find($('.baby-step-friends'))).map(function (stepFriendsDiv) {
        var friendArray = [];
        data.friends.map(function (friend) {
          if (friend.babyStep === sectionId) {
            friendArray.push(friend);
          }
        });
        var totalFriendsOnStep = friendArray.length;
        var stortedArray = friendArray.sort(function (nameOne, nameTwo) {
          if (nameOne.lastName > nameTwo.lastName) {
            return -1;
          }
          if (nameOne.lastName < nameTwo.lastName) {
            return 1;
          }
          return 0;
        }).reverse();
        if (stortedArray.length > 3) {
          var messageNames = stortedArray[0].firstName + ' ' + stortedArray[0].lastName + ', ' + stortedArray[1].firstName + ' ' + stortedArray[1].lastName + ',';
          var remaingFriendsMessage = ' and ' + (stortedArray.length - 2) + ' other friends are also in Baby Step ' + sectionId;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[0].innerHTML = messageNames;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[1].innerHTML = remaingFriendsMessage;
        } else if (stortedArray.length === 3) {
          var _messageNames = stortedArray[0].firstName + ' ' + stortedArray[0].lastName + ', ' + stortedArray[1].firstName + ' ' + stortedArray[1].lastName + ',';
          var _remaingFriendsMessage = ' and ' + (stortedArray.length - 2) + ' other friend are also in Baby Step ' + sectionId;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[0].innerHTML = _messageNames;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[1].innerHTML = _remaingFriendsMessage;
        } else if (stortedArray.length === 2) {
          var _messageNames2 = stortedArray[0].firstName + ' ' + stortedArray[0].lastName + ' and ' + stortedArray[1].firstName + ' ' + stortedArray[1].lastName;
          var _remaingFriendsMessage2 = ' are also in Baby Step ' + sectionId;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[0].innerHTML = _messageNames2;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[1].innerHTML = _remaingFriendsMessage2;
        } else if (stortedArray.length === 1) {
          var _messageNames3 = stortedArray[0].firstName + ' ' + stortedArray[0].lastName;
          var _remaingFriendsMessage3 = ' is also in Baby Step ' + sectionId;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[0].innerHTML = _messageNames3;
          $('#' + section.getAttribute('id')).find($('.baby-step-friends').children())[1].innerHTML = _remaingFriendsMessage3;
        }
      });
    });
  });

  $.makeArray($('#left-sidebar').find('li')).map(function (value) {
    $('#' + value.getAttribute('id')).parent().click(function (event) {
      var clickedElement = $('#' + event.currentTarget.getAttribute('id'));
      var clickedIdNumber = parseInt(event.currentTarget.getAttribute('id').split('-')[1]);
      clickedElement.find('li').addClass('active');
      clickedElement.siblings().find('li').removeClass('active');
      $('#transition-bar').css('top', 61 * (clickedIdNumber - 1) + 'px');
      slideRightSidebar(clickedIdNumber);
      event.preventDefault();
    });
  });
})();