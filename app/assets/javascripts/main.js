$(function() {

  var steps = $("#content>ul>li").each(function() {
    $(this).click(function() {
      steps.removeClass("step");
      $(this).addClass("step");

      $("#content>div.step-content").hide().eq(steps.index($(this))).show("fast");

      window.location.hash = $(this).attr("tab");
    });
  });

  if (location.hash) {
        showTab(location.hash);
    }
    else {
        showTab("tab1");
    }

    function showTab(tab) {
        $("#content ul li:[tab*=" + tab + "]").click();
    }

    // Bind the event hashchange, using jquery-hashchange-plugin
    $(window).hashchange(function() {
        showTab(location.hash.replace("#", ""));
    });

    // Trigger the event hashchange on page load, using jquery-hashchange-plugin
    $(window).hashchange();
});
