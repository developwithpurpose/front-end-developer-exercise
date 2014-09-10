$(document).ready(function() {
  var $step = $(".step");

  $step.click(function() {
    var stepNumber = $(this).data("toggle");
    var topPosition = stepNumber * 61 - 61;
    $step.removeClass("active");
    $(this).toggleClass("active");
    $(".step.highlight").animate({top: topPosition});
  });

  $step.on('click', function() {
    var linkTarget = $(this).attr("href")
    $.smoothScroll({
      scrollElement: $(".article-container"),
      scrollTarget: linkTarget
    });
  });


  $step.one('click', function() {
    var stepNumber = $(this).data("toggle");

    $.ajax({
      url: "assets/javascripts/baby-steps.json",
      dataType: "text",
      success: function(data) {
        var json = $.parseJSON(data),
            arrayItem = json.friends[stepNumber];

        var cofriends = json.friends.filter(function(item, i) {
          return item.babyStep == stepNumber;
        }).sort(function(a,b) {
          return a.lastName.localeCompare(b.lastName);
        }).map(function(value) {
          return value.firstName + " " + value.lastName;
        });

        var message = "";
        switch(cofriends.length) {
          case 1:
          message += "<span class='friend'>" + cofriends[0] + "</span>" + " is";
            break;
          case 2:
            message += "<span class='friend'>" + cofriends[0] +
              "</span>" + " and " + "<span class='friend'>" +
              cofriends[1] + "</span>" + " are"
            break;
          default:
            if (cofriends.length > 0) {
              f1 = cofriends.shift();
              f2 = cofriends.shift();
              message += "<span class='friend'>" + f1 + "</span>" +
                ", " + "<span class='friend'>" + f2 + "</span>" +
                ", and " + cofriends.length + " other friend" +
                ((cofriends.length > 1) ? "s" : '') + " are";
            }
        }

        message = message.length > 0 ? (message + " also in Baby Step " + stepNumber) : "";
        var el = document.getElementById('step-' + stepNumber);
        el.innerHTML = el.innerHTML + "<p class='friends'>" + message + "</p>";
        // $('#results').html(
        //   'First name: ' + arrayItem.firstName
        //   + '<br />Author: ' + arrayItem.lastName
        //   + '<br />Baby Step: ' + );
      }
    });
    return false;
  });
});
