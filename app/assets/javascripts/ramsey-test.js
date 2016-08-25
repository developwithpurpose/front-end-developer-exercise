var resetLinkColors = function () {
  $("nav li").filter(".active").removeClass("active");
};

var moveToAnchor = function (id) {
  var anchorLocation = $("a[name='a-"+ id +"']").offset().top;
  $("main").animate(
    { scrollTop: anchorLocation },
    1000
  );
}

var animateNav = function (id) {
  var anchorLocation = $("li[id='" + id + "']").offset().top;
  $("#nav-box").animate(
    { top: anchorLocation },
    600
  );
}

var setUp = function () {
  animateNav('step1');

  $("nav li a").on("click", function (e) {
    e.preventDefault();
    resetLinkColors();
    $(this).parent().addClass("active");

    var targetId = $(this).parent().attr('id')
    moveToAnchor(targetId);
    animateNav(targetId);
  });
};

$(function () {
  setUp();
});