(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var currentStep = "1";
var friends;




var changeActive = function(e){
    var greyIcon = $("img", this)[0];
    var blueIcon = $("img", this)[1];
    var selectedLI = $(this);
    var stepId = $("a", this).attr("data");
    var selectedText = $("p", this);
    var selectedIcon = $("img", this);
    var currentGreyIcon = $("img", ".active")[0];
    var currentBlueIcon = $("img", ".active")[1];


    $(currentGreyIcon).removeClass("hidden");
    $(currentBlueIcon).addClass("hidden");
    $(".active").addClass("inactive").removeClass("active");
    $("#"+currentStep).addClass("hidden");
        
    selectedLI.addClass("active");
    selectedText.addClass("active");
    $("#"+ stepId).removeClass("hidden");
    $(greyIcon).addClass("hidden");
    $(blueIcon).removeClass("hidden");

    currentStep = stepId;
    showFriends();


};


$(".steps_nav_li").click(changeActive);

var showFriends = function(){
    var friendsOnStep = [];
    friends.forEach(function(element){
        if(element.babyStep.toString() == currentStep){
            friendsOnStep.push(element);
        }
    });

    console.log(friendsOnStep);

    var friendsString;
    switch(friendsOnStep.length){
        case 1:
            friendsString = `<p class="friends_text"><a href="#" class="friend_name">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a> is also on Baby Step ${currentStep}</p>`;
            break;
        case 2:
            friendsString = `<p class="friends_text"><a href="#" class="friend_name">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a> and <a href="#" class="friend_name">${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</a> are also on Baby Step ${currentStep}</p>`;
            break;
        case 3:
            friendsString = `<p class="friends_text"><a href="#" class="friend_name">${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a> and <a href="#" class="friend_name">${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</a>  and ${(friendsOnStep.length -2)} other friend are also on Baby Step ${currentStep}</p>`;
            break;
        case 4:
            friendsString = `<p class="friends_text"><a href="#" class="friend_name"> ${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a> and <a href="#" class="friend_name">${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</a>  and ${(friendsOnStep.length -2)} other friend are also on Baby Step ${currentStep}</p>`;
            break;
        default:
            friendsString = "";

    }


    $(".friends").html(friendsString);
};



$.ajax({
    url: "../baby-steps.json",
    method: "GET",
    success: function(data){
    friends = data.friends;
    showFriends();
    }
});







},{}]},{},[1]);
