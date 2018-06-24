$("a").click(function() {

  $(".steps").hide();

  let boxToShow;
  if ($(this).hasClass("selected")) {
      boxToShow = "#" + ($(this).attr("class").split(" ")[1]);
  } else {
      boxToShow = "#" + ($(this).attr("class"))
  }

  $(boxToShow).slideToggle(1000);

});
$("a").click(function() {
  $(".step-select-container .steps-select").removeClass("selected");

  $(".active").hide()
  $(".in-active").show()

  $(this).children().addClass("selected")

  firstImage = $(this).children().find("img").first()
  secondImage = $(this).children().find("img:eq(1)")

  if ($(this).children().hasClass("selected")) {
      firstImage.hide()
      secondImage.show()

  }

});