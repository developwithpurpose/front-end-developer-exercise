$(document).ready(function(){
  var $mainContent = $('#mainContent');
  $mainContent.html('');

  $('.navbarItem').on('click', function(e){
    e.preventDefault();
    $('.navbarItem').removeClass('active');
    $(this).addClass('active');
  });
});
