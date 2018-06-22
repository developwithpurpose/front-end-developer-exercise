(function () {

  function navClicks () {

      $('.active-step-one').click(function (){
        $(".baby-step-one").fadeIn(1000);
        $(".baby-step-two, .baby-step-four, .baby-step-five, .baby-step-six, .baby-step-seven").css('display', 'none');
        });
      };


  $( document ).ready(function() {
    navClicks()
  });
})();
