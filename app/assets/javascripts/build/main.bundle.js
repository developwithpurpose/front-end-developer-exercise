"use strict";

var _loop = function _loop(i) {
  var target = void 0;
  target = document.getElementById("list_item_" + (i + 1));

  target.addEventListener("mouseover", function () {
    target.classList.add("hovered");
  });

  target.addEventListener("mouseout", function () {
    target.classList.remove("hovered");
  });

  target.addEventListener("click", function () {
    //defined below
    resetListItems();
    target.classList.add("selected");
    document.getElementById("description").style.transform = "translateY(-" + i + "00vh)";
  });
};

//List animations

for (var i = 0; i < 7; i++) {
  _loop(i);
}

var resetListItems = function resetListItems() {
  for (var i = 0; i < 7; i++) {
    document.getElementById("list_item_" + (i + 1)).classList.remove("selected");
  }
};

// since JavaScript is enabled, scrolling will be set to disabled for the description component
// this will allow for a cleaner user experience. This is a "quick fix" in the favor of time for this assignment

document.getElementById("description_window").style.overflow = "hidden";

// DYNAMIC CONTENT
var step1 = [];
var step2 = [];
var step3 = [];
var step4 = [];
var step5 = [];
var step6 = [];
var step7 = [];
var steps = [step1, step2, step3, step4, step5, step6, step7];

var arrangeFriends = function arrangeFriends(array) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var friend = _step.value;

      switch (friend.babyStep) {
        case 1:
          step1.push(friend);
          break;
        case 2:
          step2.push(friend);
          break;
        case 3:
          step3.push(friend);
          break;
        case 4:
          step4.push(friend);
          break;
        case 5:
          step5.push(friend);
          break;
        case 6:
          step6.push(friend);
          break;
        case 7:
          step7.push(friend);
          break;
        default:
          continue;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var setMessages = function setMessages() {
  var name = function name(friend) {
    return "<span class=\"link\">" + friend.firstName + " " + friend.lastName + "</span>";
  };
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = steps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var list = _step2.value;

      var targetElement = void 0;
      targetElement = document.getElementById("message_" + (steps.indexOf(list) + 1));
      switch (list.length) {
        case 0:
          continue;
          break;
        case 1:
          targetElement.innerHTML = name(list[0]) + " is also in Baby Step " + (steps.indexOf(list) + 1);
          break;
        case 2:
          targetElement.innerHTML = name(list[0]) + " and " + name(list[1]) + " are also in Baby Step " + (steps.indexOf(list) + 1);
          break;
        case 3:
          targetElement.innerHTML = name(list[0]) + ", " + name(list[1]) + ", and one other friend are also in Baby Step " + (steps.indexOf(list) + 1);
          break;
        default:
          targetElement.innerHTML = name(list[0]) + ", " + name(list[1]) + ", and " + (list.length - 2) + " other friends are also in Baby Step " + (steps.indexOf(list) + 1);
          break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var friends = fetch("baby-steps.json").then(function (res) {
  return res.json();
}).then(function (list) {
  return list.friends.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });
}).then(function (result) {
  arrangeFriends(result);
}).then(function () {
  setMessages();
});
