"use strict";
$(document).ready(function () {
    $('main').tabs({
        beforeActivate: function (event, ui) {
            babySteps.animateBackground(ui.newTab);
        }
    }).addClass('ui-tabs-vertical ui-helper-clearfix');
    var activeLinkTop;
    if (!$('.no-cssgradients').length) {
        activeLinkTop = $('.ui-tabs-active').position().top - 336;
    } else {
        activeLinkTop = $('.ui-tabs-active').position().top;
    }
    $('#active-link-bg').css('top', activeLinkTop);
    babySteps.loadFriends();
});
var babySteps = {
    loadFriends: function () {
        $.getJSON('assets/javascripts/baby-steps.json', function (data) {
            var i;
            var j;
            var currentStepFriends = [];
            for (i = 1; i < 8; i += 1) {
                for (j = 0; j < data.friends.length; j += 1) {
                    if (data.friends[j].babyStep === i) {
                        currentStepFriends.push(data.friends[j].firstName + ' ' + data.friends[j].lastName);
                    }
                }
                if (currentStepFriends.length > 0) {
                    babySteps.createFriendsMarkup(i, currentStepFriends);
                }
                currentStepFriends = [];
                j = "";
            }
        });
    },
    createFriendsMarkup: function (stepNumber, currentStepFriends) {
        var friendMarkup;
        if (currentStepFriends.length === 1) {
            friendMarkup = "<span class='friend-name'>" + currentStepFriends[0] + "</span> is also in Baby Step " + stepNumber + ".";
        } else if (currentStepFriends.length === 2) {
            friendMarkup = "<span class='friend-name'>" + currentStepFriends[0] + "</span> and <span class='friend-name'>" + currentStepFriends[1] + "</span> are also in Baby Step " + stepNumber + ".";
        } else if (currentStepFriends.length === 3) {
            friendMarkup = "<span class='friend-name'>" + currentStepFriends[0] + "</span>, <span class='friend-name'>" + currentStepFriends[1] + "</span> and 1 other friend are also in Baby Step " + stepNumber + ".";
        } else if (currentStepFriends.length >= 4) {
            friendMarkup = "<span class='friend-name'>" + currentStepFriends[0] + "</span>, <span class='friend-name'>" + currentStepFriends[1] + "</span> and " + (currentStepFriends.length - 2) + " other friends are also in Baby Step " + stepNumber + ".";
        }
        $("#babyStep" + stepNumber + " .friends").append(friendMarkup);
    },
    animateBackground: function (newLink) {
        var newPosition = $(newLink).position();
        var change;
        if (!$('.no-cssgradients').length) {
            change = newPosition.top - 336;
        } else {
            change = newPosition.top;
        }
        $('#active-link-bg').animate({
            top: change
        }, 500);
    }
};