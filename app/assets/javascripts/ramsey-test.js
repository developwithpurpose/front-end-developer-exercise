var resetLinkColors = function () {
  $("nav li").filter(".active").removeClass("active");
};

var moveToAnchor = function (id) {
  var locId = "a-" + id;
  $("main").animate(
    { scrollTop: locations[locId] - 260 },
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

setAnchorLocations = function () {
  var locName;
  for (var i = 1; i < 8; i++) {
    locName = "a-step" + i;
    var anchorLocation = $("a[name='" + locName + "']").offset().top;
    window.locations[locName] = anchorLocation;
  };
}

var setUp = function () {
  window.locations = {};
  animateNav('step1');
  setAnchorLocations();

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