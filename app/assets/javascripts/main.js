$(function() {
  var current_step    = 1,
      highlight_block = $('.highlight-block'),
      content_block   = $('.content'),
      steps           = $('.sidebar a').size(),
      LINK_HEIGHT     = 60,
      STEP_HEIGHT     = 520,
      SPEED_STEP      = 300,
      friends_by_step = {},
      friendLink,
      drawFriends;

  // Init side bar links
  $('.sidebar').on('click', 'a', function(e) {
    var step, speed;

    step = parseInt($(e.currentTarget).attr('href').replace('#step-', ''));

    if (current_step != step) {
      $('.sidebar .active').removeClass('active');
      $(e.currentTarget).closest('li').addClass('active');

      speed = Math.abs(current_step - step) * SPEED_STEP;

      highlight_block.animate({
        'margin-top' : (steps * LINK_HEIGHT * -1) + (step - 1) * LINK_HEIGHT
      }, speed);

      content_block.animate({
        scrollTop: (step - 1) * STEP_HEIGHT
      }, speed);

      current_step = step;
    }
  });

  // Load Baby steps
  $.get(
    './assets/javascripts/baby-steps.json',
    function(data) {
      data.friends.sort(function(a,b) {
        if (a.lastName < b.lastName) { return -1; }
        if (a.lastName > b.lastName) { return 1; }
        if (a.firstName < b.firstName) { return -1; }
        if (a.firstName > b.firstName) { return 1; }

        return 0
      });

      $.each(data.friends, function(index, el) {
        if (!friends_by_step[el.babyStep]) {
          friends_by_step[el.babyStep] = [];
        }

        friends_by_step[el.babyStep].push(el);
      });

      drawFriends();
    },
    "json"
  );


  // Load page from location hash
  if (window.location.hash != '') {
    var step = parseInt(window.location.hash.replace('#step-', '')),
        link = $('a.step-'+step);

    if (link.size() > 0) {
      link.trigger('click');
    }
  }


  friendLink = function(friend_obj) {
    return '<a href="#">' + friend_obj.firstName + ' ' + friend_obj.lastName + '</a>';
  }


  // Draw friends by step
  drawFriends = function() {
    var str;

    for (key in friends_by_step) {
      switch (friends_by_step[key].length) {
        case 1:
          str = [friendLink(friends_by_step[key][0]), ' is also in Baby Step ', key];
          break
        case 2:
          str = [friendLink(friends_by_step[key][0]), ' and ', friendLink(friends_by_step[key][1]),' are also in Baby Step ', key];
          break
        case 3:
          str = [friendLink(friends_by_step[key][0]), ', ', friendLink(friends_by_step[key][1]), ', and 1 other friend are also in Baby Step ', key];
          break
        default:
          str = [friendLink(friends_by_step[key][0]), ', ', friendLink(friends_by_step[key][1]), ', and ', (friends_by_step[key].length - 2),' other friends are also in Baby Step ', key];
      }

      $('.step-'+key+' p.friends').html(str.join(''));
    }
  }
});