$(document).ready(function(){
  $('.baby-step').hide();
  $('.baby-step.active').show();

  $('a[class^="step"]').click(function(event) {
    event.preventDefault();


    var step_class = $(this).attr('class').split(' ')[0];
    if($('.'+step_class+"-text").hasClass('active') == false){
      $('.baby-step.active').fadeOut("slow", function() {
        $('.baby-step.active').removeClass("active");
        $('.'+step_class+"-text").fadeIn("slow", function() {
          $('.'+step_class+"-text").addClass("active");
        });
      });
    }

  });
});
