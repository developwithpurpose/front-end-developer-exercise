let selectStep = (function() {
  let selection;
  return function(index) {
    if (selection !== undefined) {
      toggleStep(selection, false);
    }
    selection = index;
    toggleStep(index, true);
  };
})();

function toggleStep(index, toggle) {
  let link = $(".step-link").eq(index);
  let text = $(".content-article").eq(index);
  if (toggle) {
    link.addClass("selected-step");
    text.addClass("shown");
  } else {
    link.removeClass("selected-step");
    text.removeClass("shown");
  }
  $(".step-link .nav-img")
    .eq(index)
    .attr("src", getBlueImage(index, toggle));
}

$(document).ready(function() {
  $(".step-link").click(function(e) {
    selectStep(
      $("#" + e.currentTarget.id)
        .parent()
        .parent()
        .index()
    );
    return false;
  });
  $(".content-article").addClass("hidden");
  selectStep(0);
});

function getBlueImage(index, blue) {
  return `./assets/images/icons/individual/icons_small_bs${index + 1}${
    blue ? "_blue" : ""
  }.png`;
}
