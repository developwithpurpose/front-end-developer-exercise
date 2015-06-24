$(document).ready(function(){
  $(".step1").siblings("div").hide();

  $("ul.steps").each(function(){
    var $ul = $(this);

    $("li.link", $ul).on("click", function(e){
      e.preventDefault();
    });
  });
});
