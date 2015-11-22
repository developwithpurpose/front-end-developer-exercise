$(document).ready(function(){
  $('.contentItem').hide();
  $('#babyStep1').show();
  $('.activeBackground').width('300px');

  $('.navbarItem').on('click', function(e){
    var $navbarElement = $(this);
    var $contentElement = $($(this).parent().attr('href'));
    var $previousContentElement = $($('.activeBackground').parent().parent().attr('href'));
    e.preventDefault();
    if(!$navbarElement.hasClass('active')){
      //remove the active class from any other navbarItem
      $('.navbarItem').removeClass('active');
      //Add active class to this navbarItem
      $navbarElement.addClass('active');
      //animate any activeBackground elements closed
      $('.activeBackground').animate({width: 0}, function(){
        $(this).remove();
        $navbarElement.append('<div class="activeBackground"></div>');
        $('.activeBackground').animate({width: 300});
      });
      $previousContentElement.toggle('slide', {direction: 'right'}, function(){
        $contentElement.toggle('slide', {direction: 'right'});
      });
    }
  });
});
