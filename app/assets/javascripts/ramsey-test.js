var resetLinkColors = function () {
  $("nav li").filter(".active").removeClass("active");
};

function moveToAnchor(id){
  var anchorLocation = $("a[name='a-"+ id +"']").offset().top;
  $("main").animate(
    { scrollTop: anchorLocation },
    1000
  );
}


var setUp = function () {
  $("nav li a").on("click", function (e) {
    e.preventDefault();
    resetLinkColors();
    $(this).parent().addClass("active");

    var targetId = $(this).parent().attr('id')
    moveToAnchor(targetId);
  });
};

$(function () {
  setUp();
});