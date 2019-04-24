(function($) {
  "use strict";
  var babySteps,
    links,
    listeners = [],
    friends = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] },
    friendsURL = "baby-steps.json",
    lastSelected;

  function init() {
    babySteps = document.querySelectorAll('div[class*="baby-steps__"]');
    links = document.querySelectorAll("nav ul li a");

    fetchFriends(setFriends);
    hideBabySteps();
    attachListeners();
    showBabyStep(1);
    checkForLastSelected();
  }

  function setFriends(data) {
    data.friends.forEach(function(friend) {
      if (friends[friend.babyStep]) {
        friends[friend.babyStep].push(friend);
      } else {
        friends[friend.babyStep] = [friend];
      }
    });

    setFriendMessages();
  }

  function setFriendMessages() {
    babySteps.forEach(function(babyStep) {
      var step = babyStep.dataset.step;
      var numberOfFriends = friends[step].length || 0;
      if (numberOfFriends === 0) {
        return;
      }

      var sortedFriends = sortFriendsByLastNameAsc(step);
      var articleBody = babyStep.querySelector("article");
      var html = generateFriendDiv(sortedFriends, numberOfFriends, step);

      articleBody.appendChild(html);
    });
  }

  function generateFriendDiv(sortedFriends, numberOfFriends, step) {
    var friendList = document.createElement("div");
    friendList.classList.add("baby-step__friends");
    var html = "";

    if (numberOfFriends === 1) {
      html += generateFriendLink(sortedFriends[0]);
      html += " is also";
    } else if (numberOfFriends === 2) {
      html += generateFriendLink(sortedFriends[0]);
      html += " and ";
      html += generateFriendLink(sortedFriends[1]);
      html += " are also";
    } else if (numberOfFriends === 3) {
      html += generateFriendLink(sortedFriends[0]);
      html += ", ";
      html += generateFriendLink(sortedFriends[1]);
      html += " and 1 other friend are also";
    } else if (numberOfFriends > 3) {
      html += generateFriendLink(sortedFriends[0]);
      html += ", ";
      html += generateFriendLink(sortedFriends[1]);
      html += " and " + (numberOfFriends - 2) + " other friends are also";
    }

    html += " in Baby Step " + step;

    friendList.innerHTML = html;
    return friendList;
  }

  function sortFriendsByLastNameAsc(babyStep) {
    return friends[babyStep].sort(function(a, b) {
      var name1 = a.lastName.toUpperCase();
      var name2 = b.lastName.toUpperCase();

      let comparison = 0;
      if (name1 > name2) {
        comparison = 1;
      } else if (name1 < name2) {
        comparison = -1;
      }
      return comparison;
    });
  }

  function generateFriendLink(friend) {
    return '<a href="#">' + friend.firstName + " " + friend.lastName + "</a>";
  }

  function fetchFriends(callback) {
    $.getJSON(friendsURL, function(data) {
      callback(data);
    });
  }

  function hideBabySteps() {
    babySteps.forEach(function(babyStep) {
      babyStep.style.display = "none";
    });
  }

  function attachListeners() {
    links.forEach(function(link) {
      var listener = link.addEventListener("click", selectBabyStep);
      listeners.push(listener);
    });
  }

  function showBabyStep(stepNumber) {
    babySteps.forEach(function(babyStep, i) {
      if (i === stepNumber - 1) {
        babyStep.style.display = "block";
      }
    });
  }

  function resetActiveLinks() {
    links.forEach(function(link) {
      link.classList.remove("active");
    });
  }

  function selectBabyStep(e) {
    e.preventDefault();
    resetActiveLinks();
    e.target.classList.toggle("active");

    var babyStepNumber = e.target.dataset.step || 1;
    checkForLastSelected();
    var current = e.target.parentNode.querySelector(".navbar__icons");
    current.classList.add("navbar__icons-" + babyStepNumber + "--blue");

    lastSelected = current;
    hideBabySteps();
    showBabyStep(babyStepNumber);
  }

  function checkForLastSelected() {
    if (lastSelected) {
      var lastSelectedStep = lastSelected.parentNode.dataset.step;
      lastSelected.classList.remove(
        "navbar__icons-" + lastSelectedStep + "--blue"
      );
    } else {
      lastSelected = links[0].parentNode.querySelector(".navbar__icons");

      lastSelected.classList.add("navbar__icons-1--blue");
    }
  }

  init();
})(jQuery);
