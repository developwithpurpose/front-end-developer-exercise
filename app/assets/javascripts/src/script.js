(function($, w){
    "use strict";
    /* global
     * console, setTimeout */

var theWindow = $(window);
var wb = {
    issuesByYear: {
        test: function test() {
            return true;
        },
        run: function() {
            function renderMessage(friendsArray, stepIndex) {
                var stepIndexAtOne = (stepIndex - 1);
                var message = "";
                var activeStep = $(".step:eq(" + stepIndexAtOne + ")").find(".step__message");
                var friendsOnStep = $.grep(friendsArray.friends, function(friend) {
                    return friend.babyStep === stepIndex;
                });

                switch(friendsOnStep.length) {
                    case 0:
                        break;
                    case 1:
                        message = "<a href=\"#!\">Paul Taylor</a> is also in Baby Step " + stepIndex;
                        activeStep.html(message);
                        break;
                    case 2:
                        message = "<a href=\"#!\">Thomas Harris</a> and <a href=\"#!\">Sharon Thomas</a> are also in Baby Step " + stepIndex;
                        activeStep.html(message);
                        break;
                    case 3:
                        message = "<a href=\"#!\">Deborah Lee</a>, <a href=\"#!\">Shirley Perez</a>, and 1 other friend are also in Baby Step " + stepIndex;
                        activeStep.html(message);
                        break;
                    default:
                        message = "<a href=\"#!\">Patricia Allen</a>, <a href=\"#!\">Matthew Garcia</a>, and 2 other friends are also in Baby Step " + stepIndex;
                        activeStep.html(message);
                }
            }

            function fetchFriendsOnStep(stepIndex) {
                $.get("baby-steps.json").then(function(data) {
                    renderMessage(data, stepIndex);
                });
            }

            $("nav li a").on("click", function(e) {
                $("nav li").removeClass("active-step");
                $(this).parent().addClass("active-step");

                fetchFriendsOnStep($(this).parent().index() + 1);
            });
        }
    }
};

Object.keys(wb).forEach(function(key){
    if (wb[key].test()){ wb[key].run(); }
});

}(jQuery, window));
