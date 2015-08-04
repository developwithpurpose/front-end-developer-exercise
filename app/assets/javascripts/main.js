(function() {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    $.smoothScroll({
      scrollElement: $('div.babysteps'),
      scrollTarget: target
    });
    return false;
  });

  var bs1 = [],
      bs2 = [],
      bs3 = [],
      bs4 = [],
      bs5 = [],
      bs6 = [],
      bs7 = [];

  $(function() {
    $.getJSON("assets/javascripts/baby-steps.json", function(data) {
      $.each(data.friends, function(key, val) {
        if (val.babyStep === 1) {
          bs1.push(val);
        } else if (val.babyStep === 2) {
          bs2.push(val);
        } else if (val.babyStep === 3) {
          bs3.push(val);
        } else if (val.babyStep === 4) {
          bs4.push(val);
        } else if (val.babyStep === 5) {
          bs5.push(val);
        } else if (val.babyStep === 6) {
          bs6.push(val);
        } else if (val.babyStep === 7) {
          bs7.push(val);
        }
      });

      var friends = [bs1, bs2, bs3, bs4, bs5, bs6, bs7];
      appendFriends(friends)
      function appendFriends(array) {
        for(var i = 0; i < 7; i++) {
          //console.log(array[i]);
          if (array[i].length == 1) {
            //console.log(array[i][0]);
            if (array[i][0] == undefined) {
              return;
              } else {
                $('.bs' + (i + 1)).append('<p class="friends">' + array[i][0].firstName + array[i][0].lastName + ' is also in Baby Step ' + i + '</p>')
              }
            } else if (array[i].length == 2) {
              $('.bs' + (i + 1)).append('<p class="friends">' + array[i][0].firstName + ' ' + array[i][0].lastName + ' and ' + array[i][1].firstName + ' ' + array[i][1].lastName + ' are also in Baby Step ' + i + '</p>')
            } else if (array[i].length > 2) {
              $('.bs' + (i + 1)).append('<p class="friends">' + array[i][0].firstName + ' ' + array[i][0].lastName + ', ' + array[i][1].firstName + ' ' + array[i][1].lastName + ' and ' + (array[i].length - 2) + 'others are also in Baby Step ' + i + '</p>')
            }
          }
        }
      });

      function oneFriend(friend, step) {
          $('.bs' + step).append('<p>' + friend.firstName + friend.lastName + ' is also in Baby Step ' + step + '</p>')
      };

      function twpFriends(friend, step) {
          $('.bs' + step).append('<p>' + friend.firstName + friend.lastName + ' is also in Baby Step ' + step + '</p>')
      };
  });
}());
