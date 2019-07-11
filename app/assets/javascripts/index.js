$(document).ready(function() {
  hideBlueTabs();
  loadIn();
  stepClick();
  init();
});

function loadIn() {
  $("#step1").show();
  $("#step2").hide();
  $("#step3").hide();
  $("#step4").hide();
  $("#step5").hide();
  $("#step6").hide();
  $("#step7").hide();
  $("#baby1").hide();
  $("#baby1blue").show();
}

function hideBlueTabs() {
  $("#baby1blue").hide();
  $("#baby2blue").hide();
  $("#baby3blue").hide();
  $("#baby4blue").hide();
  $("#baby5blue").hide();
  $("#baby6blue").hide();
  $("#baby7blue").hide();
  $("#baby1").show();
  $("#baby2").show();
  $("#baby3").show();
  $("#baby4").show();
  $("#baby5").show();
  $("#baby6").show();
  $("#baby7").show();
}

function hideAllTabs() {
  $("#step1").hide();
  $("#step2").hide();
  $("#step3").hide();
  $("#step4").hide();
  $("#step5").hide();
  $("#step6").hide();
  $("#step7").hide();
  $("#friends").hide();
}

function stepClick() {
  $("#baby1").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step1").show();
    $("#baby1").hide();
    $("#baby1blue").show();
    $("#friends").html(renderFriends(1));
    $("#friends").show();
  });
  $("#baby2").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step2").show();
    $("#baby2").hide();
    $("#baby2blue").show();
    $("#friends").html(renderFriends(2));
    $("#friends").show();
  });
  $("#baby3").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step3").show();
    $("#baby3").hide();
    $("#baby3blue").show();
    $("#friends").html(renderFriends(3));
    $("#friends").show();
  });
  $("#baby4").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step4").show();
    $("#baby4").hide();
    $("#baby4blue").show();
    $("#friends").html(renderFriends(4));
    $("#friends").show();
  });
  $("#baby5").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step5").show();
    $("#baby5").hide();
    $("#baby5blue").show();
    $("#friends").html(renderFriends(5));
    $("#friends").show();
  });
  $("#baby6").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step6").show();
    $("#baby6").hide();
    $("#baby6blue").show();
    $("#friends").html(renderFriends(6));
    $("#friends").show();
  });
  $("#baby7").click(function() {
    hideAllTabs();
    hideBlueTabs();
    $("#step7").show();
    $("#baby7").hide();
    $("#baby7blue").show();
    $("#friends").html(renderFriends(7));
    $("#friends").show();
  });
}

function init(babyStep) {
  getFriends(whenFriendsLoad, noFriendsLoad, babyStep);
}

function getFriends(success, error) {
  $.get("../../baby-steps.json")
    .done(success)
    .fail(error);
}

let allFriends = [];

function noFriendsLoad(e) {
    console.error("Failed to Load Friends", e);
}

function whenFriendsLoad(data) {
  allFriends = data.friends;
}

function renderFriends(babyStep) {
  let domString = "";
  let friendAmount = [];
  allFriends.forEach(friend => {
    if (friend.babyStep == babyStep) {
      friendAmount.push(friend);
    }
  });
  if (friendAmount.length === 1) {
    domString += `<p>`;
    domString += `<a href="/">${friendAmount[0].firstName +
      " " +
      friendAmount[0].lastName}</a>`;
    domString += ` is also on Baby Step ${babyStep}`;
    domString += `</p>`;
  } else if (friendAmount.length === 2) {
    domString += `<p>`;
    domString += `<a href="/">${friendAmount[0].firstName +
      " " +
      friendAmount[0].lastName}</a>`;
    domString += ` and `;
    domString += `<a href="/">${friendAmount[1].firstName +
      " " +
      friendAmount[1].lastName}</a>`;
    domString += ` are also on Baby Step ${babyStep}`;
    domString += `</p>`;
  } else if (friendAmount.length === 3) {
    domString += `<p>`;
    domString += `<a href="/">${friendAmount[0].firstName +
      " " +
      friendAmount[0].lastName}</a>`;
    domString += `, `;
    domString += `<a href="/">${friendAmount[1].firstName +
      " " +
      friendAmount[1].lastName}</a>`;
    domString += `, and ${friendAmount.length -
      2} other friend are also on Baby Step ${babyStep}`;
    domString += `</p>`;
  } else if (friendAmount.length >= 4) {
    domString += `<p>`;
    domString += `<a href="/">${friendAmount[0].firstName +
      " " +
      friendAmount[0].lastName}</a>`;
    domString += `, `;
    domString += `<a href="/">${friendAmount[1].firstName +
      " " +
      friendAmount[1].lastName}</a>`;
    domString += `, and ${friendAmount.length -
      2} other friends are also on Baby Step ${babyStep}`;
    domString += `</p>`;
  }
  return domString;
}

