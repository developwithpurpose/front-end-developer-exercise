(function($){
  "use strict";

  $(function(){

    $('.baby-step').click(function(e){
      $('.active').removeClass('active');
      $(this).addClass('active');
    });

    $.ajax('../baby-steps.json').done(function(info){
      
      var friendArray = info.friends;

      var
    });


  });

})(jQuery);
