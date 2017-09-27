document.addEventListener('DOMContentLoaded', () => {

  $(".nav li").click(function() {
    if ($(".nav li").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");

  });
});
