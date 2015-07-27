function Social() {
    function loadSocialInfo() {
        var xhrObj = new window.XMLHttpRequest();
        if (window.ActiveXObject) {
            try {
                xhrObj = new window.ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhrObj = new window.ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        if (xhrObj) {
            xhrObj.open("GET", "/app/assets/javascripts/baby-steps.json");
            xhrObj.onreadystatechange = function() {
                if (xhrObj.readyState === 4 && xhrObj.status === 200) {
                    var response = JSON.parse(xhrObj.responseText);
                    if (response.friends) {
                        var friendDictionary = {};
                        var i;
                        for (i = 1; i <= 7; i++) {
                            friendDictionary[i] = [];
                        }
                        for (i = 0; i < response.friends.length; i++) {
                            friendDictionary[response.friends[i].babyStep].push(response.friends[i]);
                        }
                        for (i = 1; i <= 7; i++) {
                            if (friendDictionary[i].length > 0) {
                                friendDictionary[i] = window.Utils.alphabetizeFriends(friendDictionary[i]);
                            }
                        }
                        renderFriends(friendDictionary);
                    }
                }
            };
            xhrObj.send();
        }
    }
    function renderFriends(friendDictionary) {
        for (var i = 1; i <= 7; i++) {
            var friends = friendDictionary[i];
            var textToAdd = null;
            var tempText = "";
            var j;
            if (friends.length === 1) {
                textToAdd = "<span class='friend'>" + friends[0].firstName + " " + friends[0].lastName + "</span> is also in Baby Step " + i;
            } else if (friends.length === 2) {
                tempText = "";
                for (j = 0; j < 2; j++) {
                    tempText += "<span class='friend'>" + friends[j].firstName + " " + friends[j].lastName + "</span> and ";
                }
                textToAdd = tempText.substring(0, tempText.length - 4) + " are also in Baby Step " + i;
            } else if (friends.length > 2) {
                tempText = "";
                for (j = 0; j < 2; j++) {
                    tempText += "<span class='friend'>" + friends[j].firstName + " " + friends[j].lastName + "</span>, ";
                }
                tempText += " and " + (friends.length - 2) + " other ";
                if (friends.length === 3) {
                    tempText += "friend";
                } else {
                    tempText += "friends";
                }
                textToAdd = tempText + " are also in Baby Step " + i;
            }
            if (textToAdd) {
                var babyStep = document.getElementById("baby-step-" + i);
                babyStep.innerHTML += "<p style='webkit-margin-before:0;'>" + textToAdd + "</p>";
            }
        }
    }
    return {
        loadSocialInfo: loadSocialInfo
    };
}

window.Social = new Social();

function Utils() {
    function alphabetizeFriends(friendsArray) {
        if (friendsArray.length === 1) {
            return friendsArray;
        }
        var left = [], right = [];
        var middle = Math.floor(friendsArray.length / 2);
        var i;
        for (i = 0; i < middle; i++) {
            left.push(friendsArray[i]);
        }
        for (i = middle; i < friendsArray.length; i++) {
            right.push(friendsArray[i]);
        }
        left = alphabetizeFriends(left);
        right = alphabetizeFriends(right);
        return alphabeticalMerge(left, right);
    }
    function alphabeticalMerge(left, right) {
        var returnValue = [];
        var leftIterator = 0;
        var rightIterator = 0;
        while (leftIterator < left.length && rightIterator < right.length) {
            if (left[leftIterator].lastName[0] <= right[rightIterator].lastName[0]) {
                returnValue.push(left[leftIterator]);
                leftIterator++;
            } else {
                returnValue.push(right[rightIterator]);
                rightIterator++;
            }
        }
        if (leftIterator < left.length) {
            while (leftIterator < left.length) {
                returnValue.push(left[leftIterator]);
                leftIterator++;
            }
        } else if (rightIterator < right.length) {
            while (rightIterator < right.length) {
                returnValue.push(right[rightIterator]);
                rightIterator++;
            }
        }
        return returnValue;
    }
    return {
        alphabetizeFriends: alphabetizeFriends
    };
}

window.Utils = new Utils();

(function() {
    var navListElement = document.querySelectorAll("li");
    for (var i = 0; i < navListElement.length; i++) {
        navListElement[i].onclick = makeClickHandler(i, navListElement[i]);
    }
    function makeClickHandler(index, elem) {
        return function() {
            selectStep(index, elem);
        };
    }
    function selectStep(babyStep, elem) {
        animateToStep(document.getElementById("baby-step-1").style.marginTop, babyStep * 465 * -1, 0, true);
        var activeLi = document.querySelectorAll(".active")[0];
        activeLi.className = "";
        activeLi.children[1].src = activeLi.children[1].src.replace("_blue.png", ".png");
        elem.className = "active";
        elem.children[1].src = elem.children[1].src.replace(".png", "_blue.png");
    }
    function animateToStep(currentMargin, desiredMargin, direction, firstCheck) {
        if (!direction && currentMargin - 5 < desiredMargin) {
            document.getElementById("baby-step-1").style.marginTop = desiredMargin + "px";
            return;
        } else if (direction && currentMargin + 5 > desiredMargin) {
            document.getElementById("baby-step-1").style.marginTop = desiredMargin + "px";
            return;
        }
        if (currentMargin && typeof currentMargin === "string") {
            currentMargin = parseInt(currentMargin.replace("px", ""));
        }
        if (firstCheck) {
            if (currentMargin < desiredMargin) {
                direction = 1;
            }
        }
        var offset = -5;
        if (direction) {
            offset = 5;
        }
        currentMargin += offset;
        document.getElementById("baby-step-1").style.marginTop = currentMargin + "px";
        window.setTimeout(function() {
            animateToStep(currentMargin, desiredMargin, direction);
        }, 1);
    }
    window.setTimeout(window.Social.loadSocialInfo);
})();