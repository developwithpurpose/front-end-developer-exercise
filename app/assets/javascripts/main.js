$(document).ready(function(){
  $('.contentItem').hide();
  $('#babyStep1').show();
  $('.navbarItem').on('click', function(e){
    e.preventDefault();
    $('.navbarItem').removeClass('active');
    $(this).addClass('active');
    $('.contentItem').hide();
    $($(this).parent().attr('href')).show();;
  });
});
