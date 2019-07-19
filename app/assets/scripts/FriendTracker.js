"use strict";

var listFriends = function listFriends(friends) {
  var _loop = function _loop(i) {
    var friendsInCurrentStep = friends.filter(function (obj) {
      return obj.babyStep == i;
    });
    if (typeof friendsInCurrentStep === "undefined") return "continue";
    var list = getFriendListByBabyStep(i, friendsInCurrentStep);
    document.getElementById('friends' + i).innerHTML = list;
  };

  for (var i = 1; i < 8; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }
};

getFriends(listFriends);