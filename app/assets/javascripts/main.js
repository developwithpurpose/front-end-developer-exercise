$('a[href^="#"]').on('click', function(event) {

  var target = $( $(this).attr('href') );

  event.preventDefault();
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1900);
});
