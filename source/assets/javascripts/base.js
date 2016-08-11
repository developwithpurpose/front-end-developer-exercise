var $ = require('jquery');
var array = require('lodash/array');
var collection = require('lodash/collection');

var friends, offsetY, sidebar, step;

friends = [];
step = 1;

$('.sidebar').on('click', '.sidebar__item', function(event) {
  var step = $(this).data('step');

  event.preventDefault();

  loadFriendData(step);

  $('.sidebar__item').removeClass('sidebar__item--selected');
  $(event.currentTarget).addClass('sidebar__item--selected');

  $('html, body').animate({
    scrollTop: $(`#baby-step-${step}`).offset().top
  }, 500);
});

$('.link').on('click', function(event) {
  event.preventDefault();
});

function loadFriendData(step) {
  if (friends.length === 0) {
    $.ajax("baby-steps.json")
      .done(function(data) {
        friends = data['friends'];
        if (typeof friends !== 'undefined') {
          showFriends(friends, step);
        }
      })
      .fail(function() {
        alert("error");
      });
  } else {
    showFriends(friends, step);
  }
}

function showFriends(friends, step) {
  var firstTwoSortedFriendsOnStep,
  friendsContainer,
  friendsList,
  message,
  remainingFriendsOnStep,
  sortedFriends,
  sortedFriendsOnStep,
  verbage;

  friendsContainer = document.querySelector(`#baby-step-${step} .friends span`);

  if (friendsContainer.innerHTML.length <= 1) {
    sortedFriends = collection.sortBy(friends, ['lastName']);
    sortedFriendsOnStep = collection.filter(sortedFriends, {'babyStep': step});
    firstTwoSortedFriendsOnStep = array.take(sortedFriendsOnStep, 2);
    remainingFriendsOnStep = sortedFriendsOnStep.length - firstTwoSortedFriendsOnStep.length;

    friendsList = firstTwoSortedFriendsOnStep.map(function (friend, index) {
      return `<a href="#" class="link">${friend.firstName} ${friend.lastName}</a>`;
    });

    if (sortedFriendsOnStep.length === 0) {
      message = '';
    } else if (sortedFriendsOnStep.length === 1) {
      message = `${friendsList[0]} is also in Baby Step ${step}`;
    } else if (remainingFriendsOnStep <= 0) {
      message = `${friendsList.join(' and ')} are also in Baby Step ${step}`;
    } else if (remainingFriendsOnStep === 1) {
      message = `${friendsList.join(', ')}, and ${remainingFriendsOnStep} other friend are also in Baby Step ${step}`;
    } else {
      message = `${friendsList.join(', ')}, and ${remainingFriendsOnStep} other friends are also in Baby Step ${step}`;
    }

    friendsContainer.innerHTML = message;

    $(friendsContainer).parent().removeClass('fade-in');
  }
};

$('.friends').addClass('fade-in');

sidebar = document.querySelector('.sidebar-wrapper');
offsetY = sidebar.offsetTop;

function onScroll(e) {
  window.scrollY >= offsetY ? sidebar.classList.add('sticky') : sidebar.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);
