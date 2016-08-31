var resetLinkColors = function () {
  $("nav li").filter(".active").removeClass("active");
};

var moveToAnchor = function (id) {
  var locId = "a-" + id;
  $("main").animate(
    { scrollTop: locations[locId] - 360 },
    1000
  );
};

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
};

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
    $("#friends-alert p").html(formatDisplay(displayFriendsInfoFor(targetId)));
  });
};

var formatDisplay = function (text) {
  if (text === "") {
    return "";
  } else {
    var splitDisplay = text.split(/(\sand\s\d.*|\sare\s.*|\sis\s.*)/);
    return "<strong>" + splitDisplay[0] + "</strong>" + splitDisplay[1];
  }
};

var processReturnedData = function ( data ) {
  // Sort into a friends object that stores an array of first names grouped by baby step
  //
  // friends {
  // step1: ["Sharon","Bobby","Arun"]
  // }

  window.friends = {};
  var friendsArray = data['friends'];

  for (var i in friendsArray){
    var stepKey = "step" + (friendsArray[i]['babyStep']);
    if (friends[stepKey] === undefined) {
      friends[stepKey] = new Array(friendsArray[i]['firstName'])
    } else {
      friends[stepKey].push(friendsArray[i]['firstName'])
    }
  }
};

var fetchData = function () {
  $.ajax({
    url: "./baby-steps.json",
    context: document.body
  }).done(function( returnedData ) {
    processReturnedData( returnedData );
  });
};

var displayFriendsInfoFor = function (step) {
  var displayText;
  if (friends[step] === undefined) {
    displayText = "";
  } else {
    displayText = displaySubject(step);
  }
  displayText += displayPredicate(step);
  return displayText;
};

var displaySubject = function (step) {
  var subject = "";
  var numNamesToDisplay = 2;

  if(friends[step].length < 4) {
    for (var i = 0; i < friends[step].length; i++) {
      if (friends[step].length > 1 && i != (friends[step].length - 1) && i != 0) {
        subject += ", "
      } else if (friends[step].length > 1 && i == (friends[step].length - 1)) {
        subject += " and "
      }
      subject += friends[step][i];
    };
  } else {
    for (var i = 0; i < numNamesToDisplay; i++) {
      if (friends[step].length > 1 && i != (friends[step].length - 1) && i != 0) {
        subject += ", "
      } else if (friends[step].length > 1 && i == (friends[step].length - 1)) {
        subject += " and "
      }
      subject += friends[step][i];
    };
      subject += " and " + (friends[step].length - numNamesToDisplay) + " other friends"
  }
  return subject;
};

var displayPredicate = function (step) {
  if(window.friends[step] === undefined) {
    return "";
  };

  var tense;
  switch (window.friends[step] != undefined && window.friends[step].length) {
    case 1:
      tense = "is "
      break;
    default:
      tense = "are "
      break;
  }
  return " " + tense + "also in baby " + step.replace("step", "step ");
};

var showContent = function () {
  $("main").show();
  $("nav").show();
  $("#nav-box").show();
  $("#nav-bg").show();
};

$(function () {
  showContent();
  setUp();
  fetchData();
});