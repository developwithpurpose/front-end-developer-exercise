"use strict";

var getFriends;

(function (exports) {
  function getRemoteFriends(callback) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        var res = JSON.parse(req.response);
        if (req.status == 200) callback(res.friends);else console.error("Failed to load (HTTP error)");
      }
    };

    req.open('GET', './baby-steps.json');
    req.send();
  }

  if (typeof exports !== "undefined") exports.getFriends = getRemoteFriends;
  getFriends = getRemoteFriends;
})(void 0);