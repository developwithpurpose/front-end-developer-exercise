$(function () {

    // hide all but step one on load.  No flash!
    $("#baby-step-2-section").hide();
    $("#baby-step-3-section").hide();
    $("#baby-step-4-section").hide();
    $("#baby-step-5-section").hide();
    $("#baby-step-6-section").hide();
    $("#baby-step-7-section").hide();
    $("#section").hide();
    $("section").css("display", "");
    $("section").css("display", "block");
    $("#baby-step-1-button").addClass("babystep-selected");

    // toggle baby steps when clicked
    $("#baby-step-1-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-1-button").toggleClass("babystep-selected");
        $("#baby-step-1-section").fadeToggle();
    });
    $("#baby-step-2-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-2-button").toggleClass("babystep-selected");
        $("#baby-step-2-section").fadeToggle();
    });
    $("#baby-step-3-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-3-button").toggleClass("babystep-selected");
        $("#baby-step-3-section").fadeToggle();
    });
    $("#baby-step-4-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-4-button").toggleClass("babystep-selected");
        $("#baby-step-4-section").fadeToggle();
    });
    $("#baby-step-5-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-5-button").toggleClass("babystep-selected");
        $("#baby-step-5-section").fadeToggle();
    });
    $("#baby-step-6-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-6-button").toggleClass("babystep-selected");
        $("#baby-step-6-section").fadeToggle();
    });
    $("#baby-step-7-button").click(function () {
        $("section").css("display", "");
        $("section").css("display", "block");
        $("#baby-step-7-button").toggleClass("babystep-selected");
        $("#baby-step-7-section").fadeToggle();
    });
})

var bs1Btn = document.getElementById("baby-step-1-button");
var bs2Btn = document.getElementById("baby-step-2-button");
var bs3Btn = document.getElementById("baby-step-3-button");
var bs4Btn = document.getElementById("baby-step-4-button");
var bs5Btn = document.getElementById("baby-step-5-button");
var bs6Btn = document.getElementById("baby-step-6-button");
var bs7Btn = document.getElementById("baby-step-7-button");
var friendsContainer1 = document.getElementById("friends1");
var friendsContainer2 = document.getElementById("friends2");
var friendsContainer3 = document.getElementById("friends3");
var friendsContainer4 = document.getElementById("friends4");
var friendsContainer5 = document.getElementById("friends5");
var friendsContainer6 = document.getElementById("friends6");
var friendsContainer7 = document.getElementById("friends7");


var getFriends = function (stepNum) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "../../baby-steps.json");
    ourRequest.onload = function () {
        var ourData = ourRequest.responseText;
        var parsedData = JSON.parse(ourData);
        var friends = parsedData.friends;
        console.log(friends);
        renderBsFriends(friends, stepNum);
    };
    ourRequest.send();
}


function renderBsFriends(data, stepNum) {
    var numOfFriends = 0;
    var friendArray = [];
    for (var i = 0; i < data.length; i++) {
        var friends = "friends";
        
        //console.log(data[i].firstName + " " + data[i].lastName + " " + data[i].babyStep + " " + stepNum);
        if (data[i].babyStep === stepNum) {
            numOfFriends++;
            friendArray.push(data[i].firstName, data[i].lastName, data[i].babyStep);
            console.log("# of friends: " + numOfFriends);
        }
    }
    if (numOfFriends === 1) {
        var friendsContainer = document.getElementById(friends + (stepNum));
        friendsContainer.innerHTML =
            friendArray[0] + " " +
            friendArray[1] +
            " is also in Baby Step " + friendArray[2];
    }
    if (numOfFriends === 2) {
        var friendsContainer = document.getElementById(friends + (stepNum));
        friendsContainer.innerHTML =
        friendArray[3] + " " +
        friendArray[4] + " and " +
        friendArray[0] + " " +
        friendArray[1] +
            " are also in Baby Step " + friendArray[2];
    }
    if (numOfFriends === 3) {
        var friendsContainer = document.getElementById(friends + (stepNum));
        friendsContainer.innerHTML =
        friendArray[0] + " " +
        friendArray[1] + " and " +
        friendArray[6] + " " +
        friendArray[7] +
            " and 1 other friend are also in Baby Step " + friendArray[2];
    }
    if (numOfFriends > 3) {
        var friendsContainer = document.getElementById(friends + (stepNum));
        friendsContainer.innerHTML =
        friendArray[9] + " " +
        friendArray[10] + " and " +
        friendArray[6] + " " +
        friendArray[7] +
            " and 2 other friends are also in Baby Step " + friendArray[2];
    }
}


$("#baby-step-1-button").click(function () {
    getFriends(1);
});

$("#baby-step-2-button").click(function () {
    getFriends(2);
});

$("#baby-step-3-button").click(function () {
    getFriends(3);
});

$("#baby-step-4-button").click(function () {
    getFriends(4);
});

$("#baby-step-5-button").click(function () {
    getFriends(5);
});

$("#baby-step-6-button").click(function () {
    getFriends(6);
});

$("#baby-step-7-button").click(function () {
    getFriends(7);
});