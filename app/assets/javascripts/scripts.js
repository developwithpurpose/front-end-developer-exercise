$(document).ready(function() {

  // initial tab and tab-content show
  $('.tab:first-child, .tab:first-child .icon').addClass('active');
  $('.tab-content').find('.container:first-child').addClass('active');

  // array to store JSON objects as javascript
  var friends = [];

  // jquery getJSON request and push loop of data into friends array
  $.getJSON( '../../baby-steps.json', function( data ) {
    $.each(data, function(i, friend) {
      for (var i = 0; i < friend.length; i++) {
        friends.push(friend[i]);
      }
    });
  });

  $('.tab').click(function() {
    // on tab click remove sibling active classes
    $(this).siblings('.tab').find('.icon.active').removeClass('active');
    $(this).siblings('.tab.active').removeClass('active');

    // on tab click add class active
    $(this).addClass('active');
    $(this).children('.icon').addClass('active');

    // tab-content containers toggling class active
    $($(this).attr('href')).siblings('.container.active').removeClass('active');
    $($(this).attr('href')).addClass('active');

    // switch statements to match data-step tab attributes with babystep value of JSON objects
    // nested switch statement to apply html with correct message based on switch outcome
    switch ($(this).attr('data-step')) {
      case '2':
        var step2 = friends.filter(function( i ) { return i.babyStep == 2; });
        switch (true) {
          case (step2.length == '1'):
            document.getElementById('knock-knock-2').innerHTML = '<span>' + step2[0].firstName + ' ' + step2[0].lastName + '</span> is also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step2.length == '2'):
            document.getElementById('knock-knock-2').innerHTML = '<span>' + step2[0].firstName + ' ' + step2[0].lastName + '</span> and <span>' + step2[1].firstName + ' ' + step2[1].lastName + '</span> are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step2.length == '3'):
            document.getElementById('knock-knock-2').innerHTML = '<span>' + step2[0].firstName + ' ' + step2[0].lastName + ', ' + step2[1].firstName + ' ' + step2[1].lastName + '</span> and 1 other friend are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step2.length >= '4'):
            document.getElementById('knock-knock-2').innerHTML = '<span>' + step2[0].firstName + ' ' + step2[0].lastName + ', ' + step2[1].firstName + ' ' + step2[1].lastName + '</span> and ' + (step2.length - 2) + ' other friends are also on Baby Step ' + $(this).attr('data-step');
            break;
        }
        break;
      case '3':
        var step3 = friends.filter(function( i ) { return i.babyStep == 3; });
        switch (true) {
          case (step3.length == '1'):
            document.getElementById('knock-knock-3').innerHTML = '<span>' + step3[0].firstName + ' ' + step3[0].lastName + '</span> is also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step3.length == '2'):
            document.getElementById('knock-knock-3').innerHTML = '<span>' + step3[0].firstName + ' ' + step3[0].lastName + '</span> and <span>' + step3[1].firstName + ' ' + step3[1].lastName + '</span> are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step3.length == '3'):
            document.getElementById('knock-knock-3').innerHTML = '<span>' + step3[0].firstName + ' ' + step3[0].lastName + ', ' + step3[1].firstName + ' ' + step3[1].lastName + '</span> and 1 other friend are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step3.length >= '4'):
            document.getElementById('knock-knock-3').innerHTML = '<span>' + step3[0].firstName + ' ' + step3[0].lastName + ', ' + step3[1].firstName + ' ' + step3[1].lastName + '</span> and ' + (step3.length - 2) + ' other friends are also on Baby Step ' + $(this).attr('data-step');
            break;
        }
        break;
      case '4':
        var step4 = friends.filter(function( i ) { return i.babyStep == 4; });
        switch (true) {
          case (step4.length == '1'):
            document.getElementById('knock-knock-4').innerHTML = '<span>' + step4[0].firstName + ' ' + step4[0].lastName + '</span> is also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step4.length == '2'):
            document.getElementById('knock-knock-4').innerHTML = '<span>' + step4[0].firstName + ' ' + step4[0].lastName + '</span> and <span>' + step4[1].firstName + ' ' + step4[1].lastName + '</span> are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step4.length == '3'):
            document.getElementById('knock-knock-4').innerHTML = '<span>' + step4[0].firstName + ' ' + step4[0].lastName + ', ' + step4[1].firstName + ' ' + step4[1].lastName + '</span> and 1 other friend are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step4.length >= '4'):
            document.getElementById('knock-knock-4').innerHTML = '<span>' + step4[0].firstName + ' ' + step4[0].lastName + ', ' + step4[1].firstName + ' ' + step4[1].lastName + '</span> and ' + (step4.length - 2) + ' other friends are also on Baby Step ' + $(this).attr('data-step');
            break;
        }
        break;
      case '5':
        var step5 = friends.filter(function( i ) { return i.babyStep == 5; });
        switch (true) {
          case (step5.length == '1'):
            document.getElementById('knock-knock-5').innerHTML = '<span>' + step5[0].firstName + ' ' + step5[0].lastName + '</span> is also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step5.length == '2'):
            document.getElementById('knock-knock-5').innerHTML = '<span>' + step5[0].firstName + ' ' + step5[0].lastName + '</span> and <span>' + step5[1].firstName + ' ' + step5[1].lastName + '</span> are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step5.length == '3'):
            document.getElementById('knock-knock-5').innerHTML = '<span>' + step5[0].firstName + ' ' + step5[0].lastName + ', ' + step5[1].firstName + ' ' + step5[1].lastName + '</span> and 1 other friend are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step5.length >= '4'):
            document.getElementById('knock-knock-5').innerHTML = '<span>' + step5[0].firstName + ' ' + step5[0].lastName + ', ' + step5[1].firstName + ' ' + step5[1].lastName + '</span> and ' + (step5.length - 2) + ' other friends are also on Baby Step ' + $(this).attr('data-step');
            break;
        }
        break;
      case '6':
        var step6 = friends.filter(function( i ) { return i.babyStep == 6; });
        switch (true) {
          case (step6.length == '1'):
            document.getElementById('knock-knock-6').innerHTML = '<span>' + step6[0].firstName + ' ' + step6[0].lastName + '</span> is also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step6.length == '2'):
            document.getElementById('knock-knock-6').innerHTML = '<span>' + step6[0].firstName + ' ' + step6[0].lastName + '</span> and <span>' + step6[1].firstName + ' ' + step6[1].lastName + '</span> are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step6.length == '3'):
            document.getElementById('knock-knock-6').innerHTML = '<span>' + step6[0].firstName + ' ' + step6[0].lastName + ', ' + step6[1].firstName + ' ' + step6[1].lastName + '</span> and 1 other friend are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step6.length >= '4'):
            document.getElementById('knock-knock-6').innerHTML = '<span>' + step6[0].firstName + ' ' + step6[0].lastName + ', ' + step6[1].firstName + ' ' + step6[1].lastName + '</span> and ' + (step6.length - 2) + ' other friends are also on Baby Step ' + $(this).attr('data-step');
            break;
        }
        break;
      case '7':
        var step7 = friends.filter(function( i ) { return i.babyStep == 7; });
        switch (true) {
          case (step7.length == '1'):
            document.getElementById('knock-knock-7').innerHTML = '<span>' + step7[0].firstName + ' ' + step7[0].lastName + '</span> is also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step7.length == '2'):
            document.getElementById('knock-knock-7').innerHTML = '<span>' + step7[0].firstName + ' ' + step7[0].lastName + '</span> and <span>' + step7[1].firstName + ' ' + step7[1].lastName + '</span> are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step7.length == '3'):
            document.getElementById('knock-knock-7').innerHTML = '<span>' + step7[0].firstName + ' ' + step7[0].lastName + ', ' + step7[1].firstName + ' ' + step7[1].lastName + '</span> and 1 other friend are also on Baby Step ' + $(this).attr('data-step');
            break;
          case (step7.length >= '4'):
            document.getElementById('knock-knock-7').innerHTML = '<span>' + step7[0].firstName + ' ' + step7[0].lastName + ', ' + step7[1].firstName + ' ' + step7[1].lastName + '</span> and ' + (step7.length - 2) + ' other friends are also on Baby Step ' + $(this).attr('data-step');
            break;
        }
        break;
    }
  });
});
