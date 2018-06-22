(function () {

  function navClicks () {
    $('.active-step-one').click(function (){
      $(".baby-step-one").fadeIn(1000);
      $(".baby-step-two, .baby-step-three, .baby-step-four, .baby-step-five, .baby-step-six, .baby-step-seven").css('display', 'none');
    });
    $('.active-step-two').click(function (){
      $(".baby-step-two").fadeIn(1000);
      $(".baby-step-one, .baby-step-three, .baby-step-four, .baby-step-five, .baby-step-six, .baby-step-seven").css('display', 'none');
    });
    $('.active-step-three').click(function (){
      $(".baby-step-three").fadeIn(1000);
      $(".baby-step-one, .baby-step-two, .baby-step-four, .baby-step-five, .baby-step-six, .baby-step-seven").css('display', 'none');
    });
    $('.active-step-four').click(function (){
      $(".baby-step-four").fadeIn(1000);
      $(".baby-step-one, .baby-step-three, .baby-step-five, .baby-step-six, .baby-step-seven").css('display', 'none');
    });
    $('.active-step-five').click(function (){
      $(".baby-step-five").fadeIn(1000);
      $(".baby-step-one, .baby-step-two, .baby-step-three, .baby-step-four, .baby-step-six, .baby-step-seven").css('display', 'none');
    });
    $('.active-step-six').click(function (){
      $(".baby-step-six").fadeIn(1000);
      $(".baby-step-one, .baby-step-three, .baby-step-four, .baby-step-five, .baby-step-seven").css('display', 'none');
    });
    $('.active-step-seven').click(function (){
      $(".baby-step-seven").fadeIn(1000);
      $(".baby-step-one, .baby-step-three, .baby-step-four, .baby-step-five, .baby-step-six").css('display', 'none');
    });
  };

  function ajaxCall () {
  $.get("../../baby-steps.json", function(data, status){
    var count_2 = 0, count_3 = 0, count_4 = 0, count_5 = 0, count_6 = 0, count_7 = 0;
    var namesList_2, namesList_3, namesList_4, namesList_5, namesList_6, namesList_7;
     $.each(data, function(key, val) {
       $.each(val, function(key, values){
         if (values.babyStep === 2) {
           namesList_2 = values.firstName + ' ' + values.lastName + ', ';
           count_2++;
         } else if (values.babyStep === 3) {
            namesList_3 += values.firstName + ' ' + values.lastName + ', ';
            count_3++;
         } else if (values.babyStep === 4) {
            namesList_4 += values.firstName + ' ' + values.lastName + ', ';
            count_4++;
         } else if (values.babyStep === 5) {
           namesList_5 += values.firstName + ' ' + values.lastName + ', ';
           count_5++;
         } else if (values.babyStep === 6) {
           namesList_6 += values.firstName + ' ' + values.lastName + ', ';
           count_6++;
         } else if (values.babyStep === 7) {
           namesList_7 += values.firstName + ' ' + values.lastName + ', ';
           count_7++;
         }
       });
    });
    $('#step_names_2').append(namesList_2);
    $('#step_names_3').append(namesList_3.replace('undefined', ''));
    $('#step_names_4').append(namesList_4.replace('undefined', ''));
    $('#step_names_5').append(namesList_5.replace('undefined', ''));
    $('#step_names_6').append(namesList_6.replace('undefined', ''));
    $('#step_names_7').append(namesList_7.replace('undefined', ''));

    $('#step_count_2').append(count_2);
    $('#step_count_3').append(count_3);
    $('#step_count_4').append(count_4);
    $('#step_count_5').append(count_5);
    $('#step_count_6').append(count_6);
    $('#step_count_7').append(count_7);
 });
}

  $( document ).ready(function() {
    navClicks();
    ajaxCall();
  });
})();
