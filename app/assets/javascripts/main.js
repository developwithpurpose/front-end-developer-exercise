const friends = {
  "friends": [
      { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
      { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
      { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
      { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
      { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
      { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
      { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
      { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
      { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
      { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
      { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
      { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
      { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
      { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
      { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
      { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
      { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
      { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
      { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
      { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
      { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
  ]
}

function createBabyStepContent(currentStep) {
  var babyStep = BabyStepsCopy["babyStep" + currentStep],
      html = '<section>' + '<img src="' + babyStep.headerImage + '"/>';

  babyStep.text.forEach(function(text) {
    html += '<p>' + text + '</p>'; 
  });

  return html;
}

function createFriendsOnBabyStepContent(currentStep) {
  var html = "",
      friendsOnStep = friends["friends"].filter(function(friend) {
        return friend.babyStep === currentStep;
      });

  if (friendsOnStep.length === 1) {
    html += "<p>";
    html += "<a>" + friendsOnStep[0].firstName  + " " + friendsOnStep[0].lastName + "</a>";
    html += " is also in Baby Step " + currentStep;
    html += "</p>";
  }

  if (friendsOnStep.length === 2) {
    html += "<p>";
    html += "<a>" + friendsOnStep[0].firstName + " " + friendsOnStep[0].lastName + "</a>" + " and ";
    html += "<a>" + friendsOnStep[1].firstName + " " + friendsOnStep[1].lastName + "</a>"
    html += " are also in Baby Step " + currentStep; 
    html += "</p>";
  }

  if (friendsOnStep.length === 3) {
    html += "<p>";
    html += "<a>" + friendsOnStep[0].firstName + " " + friendsOnStep[0].lastName + "</a>" + ", ";
    html += "<a>" + friendsOnStep[1].firstName + " " + friendsOnStep[1].lastName + "</a>" + ", ";
    html += " and 1 other friend are also in Baby Step "  + currentStep; 
    html += "</p>";
  }

  if (friendsOnStep.length >= 4) {
    html += "<p>";
    html += "<a>" + friendsOnStep[0].firstName + " " + friendsOnStep[0].lastName + "</a>" + ", ";
    html += "<a>" + friendsOnStep[1].firstName + " " + friendsOnStep[1].lastName + "</a>" + ", ";
    html += "and " + (friendsOnStep.length - 2);
    html += " other friends are also in Baby Step " + currentStep;
    html += "</p>";
  }

  return html;
}

function createContent(currentStep) {
  var contentHtml = createBabyStepContent(currentStep);
  var friendsHtml = createFriendsOnBabyStepContent(currentStep);
  
  var html = "";
  html += contentHtml;
  html += friendsHtml;

  return html;
}

function setHrefWhenJsEnabled(_, el) {
  $(el).attr("href", "#step" + $(el).data().step);
}

$(document).ready(function() {
  const activeTabClass = "baby-step__text--active";
  const activeTabImageBaseUrl = "assets/images/icons/individual/icons_large_bs";
  
  var $article = $("article"),
      $babySteps = $(".baby-steps"),
      $babyStep = $babySteps.find(".baby-step"),
      $activeTab = $($babyStep[0]),
      $babyStepHighlighter = $babySteps.find("#babyStepHighlighter");

  var currentStep = $activeTab.data().step;
  var html = createContent(currentStep);
  $article.find("section").remove();
  $article.prepend(html).hide().fadeIn(300);
  
  $babySteps.find("a").each(setHrefWhenJsEnabled);
  
  $babyStep.click(function() {
    $activeTab
      .find("div")
      .removeClass(activeTabClass);
    
    $activeTab
      .find("img")
      .attr("src", activeTabImageBaseUrl + $activeTab.data().step + ".png");
    
    $activeTab = $(this);
    $activeTab
      .find("div")
      .addClass(activeTabClass);
    
    $activeTab
      .find("img")
      .attr("src", activeTabImageBaseUrl + $activeTab.data().step + "_blue.png");
    
    var stepPosition = $activeTab.position();
    $babyStepHighlighter.animate({ top: stepPosition.top });
    
    currentStep = $activeTab.data().step
    html = createContent(currentStep);

    $article.find("section").remove();
    $article.prepend(html).hide().fadeIn(300);
  });
});

 