var resetLinkColors = function () {
  $("nav li").filter(".active").removeClass("active");
};

var setUp = function () {
  // Highlight icons as nav is clicked
  $("nav li a").on("click", function () {
    resetLinkColors();
    $(this).parent().addClass("active");
  });
};

$(function () {
  setUp();
});