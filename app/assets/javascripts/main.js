$(function() {

  var location = window.location;

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
      $('#result').empty();
      var buttonId = this.id;
      $.ajax({
        url: "./assets/javascripts/baby-steps.json",
        dataType: "text",
        success: function(data) {
          var json = $.parseJSON(data);
            for (var i in json.friends) {
              if (buttonId === "one") {
                if (json.friends[i].babyStep === 1) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
              else if (buttonId === "two") {
                if (json.friends[i].babyStep === 2) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
              else if (buttonId === "three") {
                if (json.friends[i].babyStep === 3) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
              else if (buttonId === "four") {
                if (json.friends[i].babyStep === 4) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
              else if (buttonId === "five") {
                if (json.friends[i].babyStep === 5) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
              else if (buttonId === "six") {
                if (json.friends[i].babyStep === 6) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
              else if (buttonId === "seven") {
                if (json.friends[i].babyStep === 7) {
                  userStep = json.friends[i].firstName + ' ' + json.friends[i].lastName ;
                  $('#result').append('<h4>' + userStep + ', ' + ' are your Friends on this step.' + '</h4>');
                }
              }
          }
        }
      })
    });
  });

});
