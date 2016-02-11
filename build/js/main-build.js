/*global $, jQuery, alert*/
"use strict";

/*------ parse and sort the baby-steps.json array when they click a new step ------*/
function sortNames(a, b) {
    var aName = a.lastName.toLowerCase(),
        bName = b.lastName.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

function loadJson(nextStep) {
    $.getJSON("baby-steps.json")

        .done(function (data) {
            $.each(data, function () {
                var sortedFriends = data.friends.sort(sortNames),
                    totalFriends = 0, // reset this sucker every time we're pulling the json
                    stepFriends = [], // we're creating a new empty array for all the friends on this step to make life easier later on
                    otherFriends;

                $.each(sortedFriends, function (key, val) {
                    /*jslint unparam:true*/ // we're not using the key value anywhere...jslint gets angry if we don't ignore it
                    var lastName = val.lastName,
                        firstName = val.firstName,
                        stepNum = val.babyStep;
                    if (stepNum === nextStep) { // only pull the data if they're on this step
                        stepFriends.push(firstName + " " + lastName);
                    }
                });

                totalFriends = stepFriends.length;
                if (totalFriends === 1) {
                    $("#step" + nextStep + " .friends").html('<a href="#">' + stepFriends[0] + '</a> is also in Baby Step ' + nextStep);
                } else if (totalFriends === 2) {
                    $("#step" + nextStep + " .friends").html('<a href="#">' + stepFriends[0] + '</a> and <a href="#">' + stepFriends[1] + '</a> are also in Baby Step ' + nextStep);
                } else if (totalFriends === 3) {
                    $("#step" + nextStep + " .friends").html('<a href="#">' + stepFriends[0] + '</a>, <a href="#">' + stepFriends[1] + '</a>, and one other friend are also in Baby Step ' + nextStep);
                } else if (totalFriends > 3) {
                    otherFriends = totalFriends - 2;
                    $("#step" + nextStep + " .friends").html('<a href="#">' + stepFriends[0] + '</a>, <a href="#">' + stepFriends[1] + '</a>, and ' + otherFriends + ' other friends are also in Baby Step ' + nextStep);
                }
            });
        })

        .fail(function () {
            $(".friends").hide(); // if we had an error, just don't show the divs at all...
            console.log("Oops...we had some trouble loading external data for friends.");
        });
}

/*------ Functions for navigation animation ------*/

/*--- fade in / out the correct article ---*/
function changeStep(prevStep, nextStep) {
    $("#step" + prevStep).fadeOut(300, function () { // don't fade in the next one until the other one is gone!
        $("#step" + nextStep).fadeIn("slow");
    });
}

/*--- slide the highlight to the correct nav item ---*/
function changeNav(prevStep, nextStep) {
    $("nav a#nav-step" + prevStep).removeClass("active");
    if (nextStep !== 1) {
        $(".highlight").css({
            "top" : ((nextStep - 1) * 61), //moving the highlight based on which item is triggered
            "height" : "60px"
        });
    } else {  // if it's the first list item being highlighted, let's shrink the box a bit to allow for 2px of a border to show at the top
        $(".highlight").css({
            "height" : "58px",
            "top" : "2px"
        });
    }
    $("nav a#nav-step" + nextStep).addClass("active"); // apply the .active class to the step they've clicked on
}

/*--- once the DOM is ready, add an event listener to all the nav > a items and fire accordingly ---*/
$(function () { // wait until the DOM is ready 
    var curIndex,
        nextIndex;
    $(".highlight").fadeIn(); // fade in the highlighting div. We hid it in CSS for non-javascript clients
    $("#baby-steps section").not(document.getElementById("step1")).hide(); // hide all of the DIVs excep the first one so the fade in/out animation will work correctly

    $("nav a").click(function (e) { // listen for someone to click on the left nav
        e.preventDefault();
        curIndex = $("nav a.active").parent().index() + 1; // add one to get the step number
        nextIndex = $(this).parent().index() + 1; // add one to get the step number
        if (curIndex !== nextIndex) { // make sure we're not clicking on the same button. That's just silly.
            loadJson(nextIndex);
            changeStep(curIndex, nextIndex);
            changeNav(curIndex, nextIndex);
        }
    });
    loadJson(1); // go ahead and load the json for baby step 1
});
