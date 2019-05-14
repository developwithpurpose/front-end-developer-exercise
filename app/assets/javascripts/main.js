$(function() {
  $('.nav-tab').click(function () {
    for(var i=1; i<=7; i++) {
      $('.baby-step-' + i).addClass('hide');
    }

    updateFriends(this.value);

    $('.nav-tab').removeClass('nav-tab-active');
    $('.nav-tab-' + this.value).addClass('nav-tab-active')
    $('.baby-step-' + this.value).removeClass('hide');
  });

  function updateFriends(babyStep) {
    var friendsOnStep;

    $.get('../../baby-steps.json', function(data) {
      friendsOnStep = data.friends.filter(friend => friend.babyStep === babyStep);
      friendsOnStep.sort(function(a, b){return a.lastName.localeCompare(b.lastName)});

      $('.friends').removeClass('hide');
      $('.friend-2').text('');
      $('.friend-separator').text('');
      $('.friend-suffix').text('');
      
      if(friendsOnStep.length === 0) {
        $('.friends').addClass('hide');
      } else if (friendsOnStep.length === 1) {
        $('.friend-1').text(friendsOnStep[0].firstName + ' ' + friendsOnStep[0].lastName);
        $('.friend-suffix').text(' is');
      } else if (friendsOnStep.length >= 2) {
        if (friendsOnStep.length === 2) {
          $('.friend-separator').text(' and ');
        } else if (friendsOnStep.length >= 3) {
          $('.friend-separator').text(', ');
          $('.friend-suffix').text(', and ' + (friendsOnStep.length-2) + ' other friend'
            + (friendsOnStep.length-2 > 1 ? 's' : ''));
        }
        $('.friend-1').text(friendsOnStep[0].firstName + ' ' + friendsOnStep[0].lastName);
        $('.friend-2').text(friendsOnStep[1].firstName + ' ' + friendsOnStep[1].lastName);
        $('.friend-suffix').append(' are');
      }

      $('.friend-suffix').append(' also in Baby Step ' + babyStep);
    }, 'json');
  }
});
