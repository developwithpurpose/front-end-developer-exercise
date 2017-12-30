jQuery( document ).ready(function() {

  $('.babySteps div a').on('click',function(e) {
    // remove class from previously selected menu item
    $('.babySteps .activeBabyStep').removeClass('activeBabyStep');
    // add class to currently selected baby step menu item
    $('.babySteps div').eq($(this).parent().index()).addClass('activeBabyStep');
  });

});
