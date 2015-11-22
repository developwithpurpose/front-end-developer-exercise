$(document).ready(function(){
  $('.contentItem').hide();
  $('#babyStep1').show();
  $('.activeBackground').width('300px');

  $('.navbarItem').on('click', function(e){
    var $element = $(this);
    //stop default behavior
    e.preventDefault();
    //remove the active class from any other navbarItem
    $('.navbarItem').removeClass('active');
    //Add active class to this navbarItem
    $element.addClass('active');
    //animate any activeBackground elements closed
    $('.activeBackground').animate({width: 0}, function(){
      $(this).remove();
    });
    $element.append('<div class="activeBackground"></div>');
    $('.activeBackground').animate({width: 300});
    
    $('.contentItem').hide();
    $($(this).parent().attr('href')).show();;
  });
});
