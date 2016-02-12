/*global $, jQuery, alert*/
"use strict";

// Here we go...
// sortName allows us to parse and sort the baby-steps.json data.
// If you wanted more versatility, you could build this out
// a bit more to be able to pass an additional piece allowing 
// you to define how you want it sorted.
function sortNames(a, b) {
    var aName = a.lastName.toLowerCase(),
        bName = b.lastName.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

// loadJson is grabbing the JSON file specified and looping through it.
// Since this sucker is firing each time they click on a new nav item,
// we're checking if the friends in the JSON match the step we're on.
// If they do, we're adding them (already sorted) to a new array to
// make things easier for counting and displaying.
function loadJson(nextStep) {
    $.getJSON("baby-steps.json")

        .done(function (data) {
            $.each(data, function () {
                var sortedFriends = data.friends.sort(sortNames),
                    totalFriends = 0,
                    stepFriends = [],
                    otherFriends;

                $.each(sortedFriends, function (key, val) {
                    /*jslint unparam:true*/ // we're not using the key value anywhere...jslint gets angry if we don't ignore it
                    var lastName = val.lastName,
                        firstName = val.firstName,
                        stepNum = val.babyStep;
                    if (stepNum === nextStep) {
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

// We want to make sure we fail gracefully if the JSON doesn't 
// load properly. So, we're going to hide all of the .friends DIVs
// and give them a friendly note in the console.
        .fail(function () {
            $(".friends").hide(); // if we had an error, just don't show the divs at all...
            console.log("Oops...we had some trouble loading external data for friends.");
        });
}

// Fired when they click on a new nav item. We're just fading out
// the previous DIV and fading in the new one. Pretty simple.
function changeStep(prevStep, nextStep) {
    $("#step" + prevStep).fadeOut(300, function () {
        $("#step" + nextStep).fadeIn("slow");
    });
}

// changeNav makes our nifty little highlight box slide to the 
// correct nav item and then apply the .active class. It's fired 
// each time they click—-so long as they're not being sneaky and 
// clicking on the same item twice. Also, we're letting CSS do the 
// animation and just setting the position.
function changeNav(prevStep, nextStep) {
    $("nav a#nav-step" + prevStep).removeClass("active");
    if (nextStep !== 1) {
        $(".highlight").css({
            "top" : ((nextStep - 1) * 61),
            "height" : "60px"
        });
    } else {
        $(".highlight").css({
            "height" : "58px",
            "top" : "2px"
        });
    }

    $("nav a#nav-step" + nextStep).addClass("active");
}

// Once the DOM is ready, let's get the party started! 
// We're going to fade in the highlight for the nav, add the .active
// class to the first nav item, and hide all of the steps articles
// other that the first one. We'll also add an event listener for 
// clicks on each nav item.
$(function () {
    var curIndex,
        nextIndex;

    $(".highlight").fadeIn();
    $("#nav-step1").addClass("active");
    $("#baby-steps article").not(document.getElementById("step1")).hide();

    $("nav a").click(function (e) {
        e.preventDefault();
        curIndex = $("nav a.active").parent().index() + 1;
        nextIndex = $(this).parent().index() + 1;

        if (curIndex !== nextIndex) {
            loadJson(nextIndex);
            changeStep(curIndex, nextIndex);
            changeNav(curIndex, nextIndex);
        }
    });

    loadJson(1);
});