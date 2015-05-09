$(document).ready(function(){
  $('.baby-step').hide();
  $('.baby-step.active').show();

  //user clicks on step
  $('a[class^="step"]').click(function(event) {
    event.preventDefault();

    //Get the step name from the class on the button.
    var step_class = $(this).attr('class').split(' ')[0];
    //Check if clicked step is the current active step, if not do transition.
    if($('.'+step_class+"-text").hasClass('active') == false){
      /***content transition***/
      //Fade out active step content and remove active class.
      $('.baby-step.active').fadeOut("slow", function() {
        $('.baby-step.active').removeClass("active");
        //Fade in clicked step content and add active class to content.
        $('.'+step_class+"-text").fadeIn("slow", function() {
          $('.'+step_class+"-text").addClass("active");
        });
      });

      /***nav transition***/
      //Remove active class from current step link and add it to clicked step.
      $('ul li a.active').toggleClass('active');
      $(this).toggleClass('active');
    }

  });
});
