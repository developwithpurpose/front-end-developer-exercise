$('.tabs').on('show.bs.tab', function (e) {    	
    if (e.relatedTarget === undefined) {    
      $($(e.target).attr('href')).slideDown('slow');
    }
    else {
      $($(e.relatedTarget).attr('href')).slideUp({ duration: 'fast', queue: true,
        done: function() {
          $($(e.target).attr('href')).slideDown('slow');
        }
      });
    }	
  });
   $(function () {
     $.ajax({
      type: 'GET',
      url: '/baby-steps.json',
      success: function (data) {
        console.log(data);
        var sortedNames = data.friends.sort(function (a, b) {
          if (a.lastName < b.lastName) return -1;
          if (a.lastName > b.lastName) return 1;
          return 0;
        });
        $('#list-one-list').click(function () {
            $('#myFriends-baby_1').empty();
            var validNames = [];
            $(sortedNames).each(function (i, value) {
              if (value.babyStep === 1) {
                validNames.push(value.firstName + ' ' + value.lastName);
              if (value.babystep === 0);
              return 0;
              }
            });
            var remainingNames = validNames.length - 2;
            $('#myFriends-baby_1').append('<span class="friend-name">' + validNames[0] + '</span> is also in Baby Step 1');
          });
        $('#list-two-list').click(function () {
          $('#myFriends-baby_2').empty();
          var validNames = [];
          $(sortedNames).each(function (i, value) {
            if (value.babyStep === 2) {
              validNames.push(value.firstName + ' ' + value.lastName);
            }
          });
          var remainingNames = validNames.length - 2;
          $('#myFriends-baby_2').append('<span class="friend-name">' + validNames[0] + '</span> is also in Baby Step 2');
        });
        $('#list-three-list').click(function () {
          $('#myFriends-baby_3').empty();
          var validNames = [];
          $(sortedNames).each(function (i, value) {
            if (value.babyStep === 3) {
              validNames.push(value.firstName + ' ' + value.lastName);
            }
          });
          var remainingNames = validNames.length - 2;
          $('#myFriends-baby_3').append('<span class="friend-name">' + validNames[0] + '</span> and <span class="friend-name">' + validNames[1] + '</span> are in Baby Step 3');
        });
        $('#list-four-list').click(function () {
          $('#myFriends-baby_4').empty();
          var validNames = [];
          $(sortedNames).each(function (i, value) {
            if (value.babyStep === 4) {
              validNames.push(value.firstName + ' ' + value.lastName);
            }
          });
          var remainingNames = validNames.length - 2;
          $('#myFriends-baby_4').append('<span class="friend-name">' + validNames[0] + '</span>, <span class="friend-name">' + validNames[1] + '</span> and ' + remainingNames + ' Other Friend is in Baby Step 4');
        });
        $('#list-five-list').click(function () {
          $('#myFriends-baby_5').empty();
          var validNames = [];
          $(sortedNames).each(function (i, value) {
            if (value.babyStep === 5) {
              validNames.push(value.firstName + ' ' + value.lastName);
            }
          });
          var remainingNames = validNames.length - 2;
          $('#myFriends-baby_5').append('<span class="friend-name">' + validNames[0] + '</span>, <span class="friend-name">' + validNames[1] + '</span> and ' + remainingNames + ' Other Friends are in Baby Step 5');
        });
        $('#list-six-list').click(function () {
          $('#myFriends-baby_6').empty();
          var validNames = [];
          $(sortedNames).each(function (i, value) {
            if (value.babyStep === 6) {
              validNames.push(value.firstName + ' ' + value.lastName);
            }
          });
          var remainingNames = validNames.length - 2;
          $('#myFriends-baby_6').append('<span class="friend-name">' + validNames[0] + '</span>, <span class="friend-name">' + validNames[1] + '</span> and ' + remainingNames + ' Other Friends are in Baby Step 6');
        });
        $('#list-seven-list').click(function () {
          $('#myFriends-baby_7').empty();
          var validNames = [];
          $(sortedNames).each(function (i, value) {
            if (value.babyStep === 7) {
              validNames.push(value.firstName + ' ' + value.lastName);
            }
          });
          var remainingNames = validNames.length - 2;
          $('#myFriends-baby_7').append('<span class="friend-name">' + validNames[0] + '</span>, <span class="friend-name">' + validNames[1] + '</span> and ' + remainingNames + ' Other Friends are in Baby Step 7');
        });
       }
    });
   });