$(document).ready(function () {
  hideBlue();
  initialLanding();
  navClick();
  initializer();
});

function initialLanding() {
  $("#babyStep1").show();
  $("#babyStep2").hide();
  $("#babyStep3").hide();
  $("#babyStep4").hide();
  $("#babyStep5").hide();
  $("#babyStep6").hide();
  $("#babyStep7").hide();
  $("#sideBar1").hide();
  $("#sideBar1Blue").show();
};

function hideAll() {
  $("#babyStep1").hide();
  $("#babyStep2").hide();
  $("#babyStep3").hide();
  $("#babyStep4").hide();
  $("#babyStep5").hide();
  $("#babyStep6").hide();
  $("#babyStep7").hide();
  $("#friends").hide();
};

function hideBlue() {
  $("#sideBar1Blue").hide();
  $("#sideBar2Blue").hide();
  $("#sideBar3Blue").hide();
  $("#sideBar4Blue").hide();
  $("#sideBar5Blue").hide();
  $("#sideBar6Blue").hide();
  $("#sideBar7Blue").hide();
  $("#sideBar1").show();
  $("#sideBar2").show();
  $("#sideBar3").show();
  $("#sideBar4").show();
  $("#sideBar5").show();
  $("#sideBar6").show();
  $("#sideBar7").show();
}

function navClick() {
  $("#sideBar1").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep1").slideDown(2000);
      $("#sideBar1").hide();
      $("#sideBar1Blue").show();
      $("#friends").html(writeFriends(1));
      $("#friends").fadeIn(4000);
  });
  $("#sideBar2").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep2").slideDown(2000);
      $("#sideBar2").hide();
      $("#sideBar2Blue").show();
      $("#friends").html(writeFriends(2));
      $("#friends").fadeIn(4000);
  });
  $("#sideBar3").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep3").slideDown(2000);
      $("#sideBar3").hide();
      $("#sideBar3Blue").show();
      $("#friends").html(writeFriends(3));
      $("#friends").fadeIn(4000);
  });
  $("#sideBar4").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep4").slideDown(2000);
      $("#sideBar4").hide();
      $("#sideBar4Blue").show();
      $("#friends").html(writeFriends(4));
      $("#friends").fadeIn(4000);
  });
  $("#sideBar5").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep5").slideDown(2000);
      $("#sideBar5").hide();
      $("#sideBar5Blue").show();
      $("#friends").html(writeFriends(5));
      $("#friends").fadeIn(4000);
  });
  $("#sideBar6").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep6").slideDown(2000);
      $("#sideBar6").hide();
      $("#sideBar6Blue").show();
      $("#friends").html(writeFriends(6));
      $("#friends").fadeIn(4000);
  });
  $("#sideBar7").click(function () {
      hideAll();
      hideBlue();
      $("#babyStep7").slideDown(2000);
      $("#sideBar7").hide();
      $("#sideBar7Blue").show();
      $("#friends").html(writeFriends(7));
      $("#friends").fadeIn(4000);
  });
}

// Dynamic Friends

function initializer(babyStep) {
  loadFriends(whenFriendsLoad, whenFriendsDontLoad, babyStep);
};

function loadFriends(successFunction, errorFunction) {
  $.get("../../baby-steps.json")
  .done(successFunction)
  .fail(errorFunction)
};

let friendsArray = [];

function whenFriendsLoad(data) {
  friendsArray = data.friends;
};

function whenFriendsDontLoad(error) {
  console.error('fail', error);
};

function writeFriends(babyStep) {
  let domString = '';
  let friendCount = [];
  friendsArray.forEach((friend) => {
    if(friend.babyStep === babyStep) {
      friendCount.push(friend);
    }
  })
  if(friendCount.length === 1){
    domString += `<p>`;
    domString += `<a href="/">${friendCount[0].firstName + ' ' + friendCount[0].lastName}</a>`;
    domString +=  ` is also in Baby Step ${babyStep}`;
    domString += `</p>`;
  } else if (friendCount.length === 2){
    domString += `<p>`;
    domString += `<a href="/">${friendCount[0].firstName + ' ' + friendCount[0].lastName}</a>`;
    domString += ` and `;
    domString += `<a href="/">${friendCount[1].firstName + ' ' + friendCount[1].lastName}</a>`;
    domString +=  ` are also in Baby Step ${babyStep}`;
    domString += `</p>`;
  } else if (friendCount.length === 3){
    domString += `<p>`;
    domString += `<a href="/">${friendCount[0].firstName + ' ' + friendCount[0].lastName}</a>`;
    domString += `, `;
    domString += `<a href="/">${friendCount[1].firstName + ' ' + friendCount[1].lastName}</a>`;
    domString +=  `, and ${friendCount.length - 2} other friend are also in Baby Step ${babyStep}`;
    domString += `</p>`;
  } else if (friendCount.length >= 4){
    domString += `<p>`;
    domString += `<a href="/">${friendCount[0].firstName + ' ' + friendCount[0].lastName}</a>`;
    domString += `, `;
    domString += `<a href="/">${friendCount[1].firstName + ' ' + friendCount[1].lastName}</a>`;
    domString +=  `, and ${friendCount.length - 2} other friends are also in Baby Step ${babyStep}`;
    domString += `</p>`;
  }
  return domString;
};
