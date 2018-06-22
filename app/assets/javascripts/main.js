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


  $( document ).ready(function() {
    navClicks()
  });
})();
