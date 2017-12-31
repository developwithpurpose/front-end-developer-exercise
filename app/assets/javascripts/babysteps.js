jQuery( document ).ready(function() {


  // function to allow for changing of styles in sidenav
  $('.babySteps div a').on('click', function(e) {
    // remove class from previously selected menu item
    $('.babySteps .activeBabyStep').removeClass('activeBabyStep');
    // add class to currently selected baby step menu item
    $('.babySteps div').eq($(this).parent().index()).addClass('activeBabyStep');

    // hide initial welcome page
    $('.welcomePage').addClass('displayNone');
  });

});
