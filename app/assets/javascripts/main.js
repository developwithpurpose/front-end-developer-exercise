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
      var userStep = [];
      $.ajax({
        url: "./assets/javascripts/baby-steps.json",
        dataType: "text",
        success: function(data) {
          var json = $.parseJSON(data);
            for (var i in json.friends) {
              if (buttonId === "one") {
                if (json.friends[i].babyStep === 1) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
              else if (buttonId === "two") {
                if (json.friends[i].babyStep === 2) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
              else if (buttonId === "three") {
                if (json.friends[i].babyStep === 3) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
              else if (buttonId === "four") {
                if (json.friends[i].babyStep === 4) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
              else if (buttonId === "five") {
                if (json.friends[i].babyStep === 5) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
              else if (buttonId === "six") {
                if (json.friends[i].babyStep === 6) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
              else if (buttonId === "seven") {
                if (json.friends[i].babyStep === 7) {
                  userStep.push(json.friends[i].firstName + ' ' + json.friends[i].lastName);
                }
              }
            }
            if (userStep.length === 1) {
              $('#result').append('<h4>' + '<a href="">' + userStep + '</a>' + ' is your Friend on this step.' + '</h4>');
            }
            else if (userStep.length === 2) {
              $('#result').append('<h4>' + '<a href="">' + userStep[0] + ' and ' + userStep[1] + '</a>' + ' are your Friends on this step.' + '</h4>')
            }
            else if (userStep.length === 3) {
              $('#result').append('<h4>' + '<a href="">' + userStep[0] + ', ' + userStep[1] + '</a>' + ' and ' + (userStep.length - 2) + ' Other Friend are on this step.' + '</h4>')
            }
            else if (userStep.length > 3) {
              $('#result').append('<h4>' + '<a href="">' + userStep[0] + ', ' + userStep[1] + '</a>' + ' and ' + (userStep.length - 2) + ' Other Friends are on this step.' + '</h4>')
            }
        }
      })
    });
  });

});
