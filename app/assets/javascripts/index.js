$(function() {
    document.getElementById("btn-bs1").focus();
    var selectedBtn = "";
    $(".step").click(function() {
      selectedBtn = $(this).attr("id").split('-');
      var btnString = selectedBtn[1]
      var btnNumber = btnString[btnString.length - 1];
      var scrollLoc = 0;
      for (i = 1; i < btnNumber; i++) {
        scrollLoc += $("#detail-bs" + i).height();
        console.log("#detail-bs" + i + " height=" + $("#detail-bs" + i).height());
      };
      $(".step-detail").animate({scrollTop: scrollLoc},'slow');
      $(".step-detail").css({'height': $("#detail-bs" + btnNumber).height() + 'px'});
    });

    var dataRequest = new XMLHttpRequest();
    dataRequest.open('GET', 'http://localhost:3000/friends');
    dataRequest.onload = function() {
      var friendJSON = JSON.parse(dataRequest.responseText);
      renderHTML(friendJSON);
    };
    dataRequest.send();

    function renderHTML(friendData) {
      var friendStepArray = [];
      for (stepNum=1; stepNum < 8; stepNum++){
        friendStepArray[stepNum] = "";
        var friendCount = "";
        for (i=0; i < friendData.length; i++) {
          if (friendData[i].babyStep == stepNum) {
            friendCount++;
            friendStepArray[stepNum] += friendData[i].firstName + " " + friendData[i].lastName + ", ";
          }
        };
        var friendString = "";
        friendString = friendStepArray[stepNum].split(",");
        if (friendCount > 3) {
          fiendCount = friendCount - 2;
          friendString = "<text-blue>" + friendString[0] + "</text-blue><text>, </text><text-blue>" + friendString[1]
                          + "</text-blue><text> and " + fiendCount + " Other Friends are on this step</text>";
          appendHTML(friendString, stepNum)
        }
        else if (friendCount == 3) {
          fiendCount = friendCount - 2;
          friendString = "<text-blue>" + friendString[0] + "</text-blue><text>, </text><text-blue>" + friendString[1]
                          + "</text-blue><text> and " + fiendCount + " Other Friend are on this step</text>";
          appendHTML(friendString, stepNum)
        }
        else if (friendCount == 2) {
          friendString = "<text-blue>" + friendString[0] + "</text-blue><text> and </text><text-blue>" + friendString[1]
                          + "</text-blue><text> are on this step</text>";
          appendHTML(friendString, stepNum)
        }
        else if (friendCount == 1) {
          friendString = "<text-blue>" + friendString[0] + "</text-blue><text> is on this step</text>";
          appendHTML(friendString, stepNum)
        }
      };
    };

    function appendHTML(appendString, elementNum) {
      $("#detail-bs"+elementNum+"-dynamic").append(appendString);
    }
});
