"use strict";

// set all of our variables up top - it's functional AND nice to look at!
var $;
var nav = document.getElementById("steps-nav");
var nextpos;
var curindex;
var nextindex;
var nexttop;

$(".highlight").fadeIn(); // fade in the highlighting div. We hid it in CSS for non-javascript clients
$("#baby-steps section").not(document.getElementById("step1")).hide(); // hide all of the DIVs excep the first one so the fade in/out animation will work correctly

function changestep(prev, next) {
    $("#step" + prev).fadeOut(300, function () { // don't fade in the next one until the other one is gone!
        $("#step" + next).fadeIn("slow");
    });
}

function changenav(prev, next) {
    $("nav a#nav-step" + prev).removeClass("active");
    if (next !== 1) {
        $(".highlight").css({
            "top" : ((next - 1) * 61), //moving the highlight based on which item is triggered
            "height" : "60px"
        });
    } else {  // if it's the first list item being highlighted, let's shrink the box a bit to allow for 2px of a border to show at the top
        $(".highlight").css({
            "height" : "58px",
            "top" : "2px"
        });
    }
    $("nav a#nav-step" + next).addClass("active");
}

$("nav a").click(function (e) { // listen for someone to click on the left nav
    e.preventDefault();
    curindex = $("nav a.active").parent().index() + 1; // add one to get the step number
    nextindex = $(this).parent().index() + 1; // add one to get the step number
    if (curindex !== nextindex) {
        changestep(curindex, nextindex);
        changenav(curindex, nextindex);
    }
});
