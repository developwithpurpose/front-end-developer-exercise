$(function () {
  $('#sidemenu a').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('open')) {
      // do nothing because the link is already open
    } else {
      var oldcontent = $('#sidemenu a.open').attr('href');
      var newcontent = $(this).attr('href');

      $(oldcontent).fadeOut('fast', function () {
        $(newcontent).fadeIn().removeClass('hidden');
        $(oldcontent).addClass('hidden');
      });


      $('#sidemenu a').removeClass('open');
      $(this).addClass('open');
    }
  });
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
      $('.bs-tab2').click(function () {
        $('#myFriends-bs2').empty();
        var validNames = [];
        $(sortedNames).each(function (i, value) {
          if (value.babyStep === 2) {
            validNames.push(value.firstName + ' ' + value.lastName);
          }
        });
        var remainingNames = validNames.length - 2;
        $('#myFriends-bs2').append('<a class="friend-name">' + validNames[0] + '</a> is also in Baby Step 2.');
      });
      $('.bs-tab3').click(function () {
        $('#myFriends-bs3').empty();
        var validNames = [];
        $(sortedNames).each(function (i, value) {
          if (value.babyStep === 3) {
            validNames.push(value.firstName + ' ' + value.lastName);
          }
        });
        var remainingNames = validNames.length - 2;
        $('#myFriends-bs3').append('<a class="friend-name">' + validNames[0] + '</a> and <a class="friend-name">' + validNames[1] + '</a> are also in Baby Step 3.');
      });
      $('.bs-tab4').click(function () {
        $('#myFriends-bs4').empty();
        var validNames = [];
        $(sortedNames).each(function (i, value) {
          if (value.babyStep === 4) {
            validNames.push(value.firstName + ' ' + value.lastName);
          }
        });
        var remainingNames = validNames.length - 2;
        $('#myFriends-bs4').append('<a class="friend-name">' + validNames[0] + '</a>, <a class="friend-name">' + validNames[1] + '</a> and ' + remainingNames + ' Other Friend is also in Baby Step 4.');
      });
      $('.bs-tab5').click(function () {
        $('#myFriends-bs5').empty();
        var validNames = [];
        $(sortedNames).each(function (i, value) {
          if (value.babyStep === 5) {
            validNames.push(value.firstName + ' ' + value.lastName);
          }
        });
        var remainingNames = validNames.length - 2;
        $('#myFriends-bs5').append('<a class="friend-name">' + validNames[0] + '</a>, <a class="friend-name">' + validNames[1] + '</a> and ' + remainingNames + ' Other Friends are also in Baby Step 5.');
      });
      $('.bs-tab6').click(function () {
        $('#myFriends-bs6').empty();
        var validNames = [];
        $(sortedNames).each(function (i, value) {
          if (value.babyStep === 6) {
            validNames.push(value.firstName + ' ' + value.lastName);
          }
        });
        var remainingNames = validNames.length - 2;
        $('#myFriends-bs6').append('<a class="friend-name">' + validNames[0] + '</a>, <a class="friend-name">' + validNames[1] + '</a> and ' + remainingNames + ' Other Friends are also in Baby Step 6.');
      });
      $('.bs-tab7').click(function () {
        $('#myFriends-bs7').empty();
        var validNames = [];
        $(sortedNames).each(function (i, value) {
          if (value.babyStep === 7) {
            validNames.push(value.firstName + ' ' + value.lastName);
          }
        });
        var remainingNames = validNames.length - 2;
        $('#myFriends-bs7').append('<a class="friend-name">' + validNames[0] + '</a>, <a class="friend-name">' + validNames[1] + '</a> and ' + remainingNames + ' Other Friends are also in Baby Step 7.');
      });


    }
  });

});


