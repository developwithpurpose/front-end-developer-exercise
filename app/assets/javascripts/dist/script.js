"use strict";

(function ($, w) {
    "use strict";
    /* global
     * console, setTimeout */

    var theWindow = $(window);
    var wb = {
        issuesByYear: {
            test: function test() {
                return true;
            },
            run: function run() {
                function renderMessage(friendsArray, stepIndex) {
                    var stepIndexAtOne = stepIndex - 1;
                    var message = "";
                    var activeStep = $(".step:eq(" + stepIndexAtOne + ")").find(".step__message");
                    var friendsOnStep = $.grep(friendsArray.friends, function (friend) {
                        return friend.babyStep === stepIndex;
                    });

                    switch (friendsOnStep.length) {
                        case 0:
                            break;
                        case 1:
                            message = "<a href=\"#!\">" + returnName(friendsOnStep[0]) + "</a> is also in Baby Step " + stepIndex;
                            activeStep.html(message);
                            break;
                        case 2:
                            message = "<a href=\"#!\">" + returnName(friendsOnStep[0]) + "</a> and <a href=\"#!\">" + returnName(friendsOnStep[1]) + "</a> are also in Baby Step " + stepIndex;
                            activeStep.html(message);
                            break;
                        case 3:
                            message = "<a href=\"#!\">" + returnName(friendsOnStep[0]) + "</a>, <a href=\"#!\">" + returnName(friendsOnStep[1]) + "</a>, and 1 other friend are also in Baby Step " + stepIndex;
                            activeStep.html(message);
                            break;
                        default:
                            message = "<a href=\"#!\">" + returnName(friendsOnStep[0]) + "</a>, <a href=\"#!\">" + returnName(friendsOnStep[1]) + "</a>, and " + (friendsOnStep.length - 2) + " other friends are also in Baby Step " + stepIndex;
                            activeStep.html(message);
                    }

                    function returnName(friendObject) {
                        return friendObject.firstName + " " + friendObject.lastName;
                    }
                }

                function fetchFriendsOnStep(stepIndex) {
                    $.get("baby-steps.json").then(function (data) {
                        renderMessage(data, stepIndex);
                    });
                }

                $("nav li a").on("click", function (e) {
                    var itemIndex = $(this).parent().index();

                    $("nav li").removeClass("nav-active-step");
                    $(".step").removeClass("step-active-step");

                    $(this).parent().addClass("nav-active-step");
                    $(".step:eq(" + itemIndex + ")").addClass("step-active-step");

                    fetchFriendsOnStep(itemIndex + 1);
                });
            }
        }
    };

    Object.keys(wb).forEach(function (key) {
        if (wb[key].test()) {
            wb[key].run();
        }
    });
})(jQuery, window);