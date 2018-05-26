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