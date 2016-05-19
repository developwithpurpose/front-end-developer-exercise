$(document).ready(function() {

  var tab = $('.tabs').find('li'),
      step = $('div.step');

  function tabContent() {
    var ele = $(this),
        tabId = ele.data('tab');

    tab.removeClass('active');
    ele.addClass('active');

    step.removeClass('active');
    $('div.step' + tabId).addClass('active');


    // ajax function
    var url = '././baby-steps.json';

    var friends = $('div.step' + tabId + ' p.friends'),
        total,
        fullName;

    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        friends.html('');

        friends.find('.names').html('');
        friends.append('<span class="names"></span>');

        var newArray = [];
        $.each(data.friends, function(i, val) {
          if (tabId === val.babyStep) {
            total = val.babyStep - 1;
            fullName = val.firstName + ' ' + val.lastName;

            if (total >= 2) fullName = val.firstName + ' ' + val.lastName + ', ';

            friends.find('.names').append('<span class="fullName">' + fullName + '</span>');

          }
        });

        if (total > 2) {
          var otherFriends = total - 2,
              visible = friends.find('.fullName').slice(2);

          visible.hide();

          if(otherFriends == 1) {
            var message = ' and ' + otherFriends + ' other friend are also in Baby Step '+tabId+'.';
          }
          else if(otherFriends > 1) {
            var message = ' and ' + otherFriends + ' other friends are also in Baby Step '+tabId+'.';
          }
          if (otherFriends > 0) $('<span class="others">' + message + '</span>').insertAfter('.names');
        }
      },
      error: function() {
        console.log('ajax error');
      }
    });
    // End ajax function



  }
  tab.on('click', tabContent);




});
