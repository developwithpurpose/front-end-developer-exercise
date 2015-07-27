//Create class that deals with the social aspect of this page
function Social() {

  function loadSocialInfo() {
    var xhrObj = new window.XMLHttpRequest();
    if (window.ActiveXObject) {
         try {
            xhrObj = new window.ActiveXObject("Msxml2.XMLHTTP");
         } catch(e) {
            xhrObj = new window.ActiveXObject("Microsoft.XMLHTTP");
         }
    }
    if (xhrObj) {
      xhrObj.open("GET", "/app/assets/javascripts/baby-steps.json");
      xhrObj.onreadystatechange = function () {
        if (xhrObj.readyState === 4 && xhrObj.status === 200) {
          var response = JSON.parse(xhrObj.responseText);
          if (response.friends) {
            //Create dictionary with arrays to add friends to base on baby steps.
            var friendDictionary = {};
            var i;
            for (i = 1; i <= 7; i++) {
              friendDictionary[i] = [];
            }
            for (i = 0; i < response.friends.length; i++) {
              friendDictionary[response.friends[i].babyStep].push(response.friends[i]);//Push friend into new array.
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

  //Called via loadSocialInfo and it expects there to be a dictionary with arrays as values for the different baby step numbers as keys.
  function renderFriends(friendDictionary) {
    //Iterate through baby steps
    for (var i = 1; i <= 7; i++) {
      var friends = friendDictionary[i];
      var textToAdd = null;
      var tempText = "";
      var j;
      if (friends.length === 1) {
        //paragraph.appendChild(friendSpans[0]);
        textToAdd = "<span class='friend'>" + friends[0].firstName + " " + friends[0].lastName + "</span> is also in Baby Step " + i;
      } else if (friends.length === 2) {
        tempText = "";
        for (j = 0; j < 2; j++) {
          tempText += "<span class='friend'>" + friends[j].firstName + " " + friends[j].lastName + "</span> and ";
        }
        //Remove trailing and
        textToAdd = tempText.substring(0, tempText.length -4) + " are also in Baby Step " + i;
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
      //Check for null empty string etc.
      if (textToAdd) {
        var babyStep = document.getElementById("baby-step-" + i);
        babyStep.innerHTML += "<p style='webkit-margin-before:0;'>" + textToAdd + "</p>";
      }
    }
  }
  return {
    loadSocialInfo:loadSocialInfo
  };
}
window.Social = new Social();
