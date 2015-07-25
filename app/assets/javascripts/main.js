$(function() {

  var steps = $("#content>ul>li").each(function() {
    $(this).click(function() {
      steps.removeClass("step");
      $(this).addClass("step");

      $("#content>div.step-content").hide().eq(steps.index($(this))).show("slow");

      window.location.hash = $(this).attr("tab");

    });
  });
  $(document).ready( function () {

    $('button').click( function () {
      $.ajax({
        url: "./assets/javascripts/baby-steps.json",
        dataType: "text",
        success: function(data) {
          var json = $.parseJSON(data);
          console.log(json.friends);
          console.log(json.friends[0].babyStep);

          $('#result').html(json.friends[0]);
        }
      })
    });
  });

});
