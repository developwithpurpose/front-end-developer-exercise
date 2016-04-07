jQuery(document).ready(function ($) {

    var slideDuration = 400;
    var lastClickedTab;

    // Make sure intial baby step content will slide smoothly
    $(".baby-step").slideUp(0);
    $(".baby-step.active").slideDown(0);

    // Tabbed slide navigation for the baby steps
    $("nav a.tab").click(function () {

        if (lastClickedTab !== this) {
            $(".baby-step.active").slideUp(slideDuration);

            $(".active").removeClass("active");
            $(this).addClass("active");

            var content_show = $(this).attr("id");
            $("#" + content_show + "_content").slideDown(slideDuration);
            $("#" + content_show + "_content").addClass("active");

            lastClickedTab = this;
        }

        return false;
    });


    // Display data from the JSON file
    var displayFriends = function (response) {

        var allFriends = response.friends;

        for (var currentBabyStep = 0; currentBabyStep < allFriends.length; currentBabyStep++) {

            var currentBabyStepFriends = allFriends.filter(function (item) {
                return item.babyStep === currentBabyStep
            });

            if (currentBabyStepFriends.length > 0) {

                var totalFriends = currentBabyStepFriends.length;
                var numFriendsAdded = 0;
                var maxFriendsToAdd = 2;
                var messageHTML = "";

                // Add the first two friend names to the list
                for (var x = 0; x < maxFriendsToAdd; x++) {

                    if (numFriendsAdded === 0) {
                        messageHTML += "<span class='friend'>" + currentBabyStepFriends[x].firstName + " " + currentBabyStepFriends[x].lastName + "</span>";
                    } else if (totalFriends === 2 && numFriendsAdded < 2) {
                        messageHTML += " and <span class='friend'>" + currentBabyStepFriends[x].firstName + " " + currentBabyStepFriends[x].lastName + "</span>";
                    } else if (totalFriends > 2 && numFriendsAdded < 2) {
                        messageHTML += ", <span class='friend'>" + currentBabyStepFriends[x].firstName + " " + currentBabyStepFriends[x].lastName + "</span>";
                    }
                    numFriendsAdded++;

                }

                // Add number of other friends as well as the baby step number
                switch (totalFriends) {
                case 1:
                    messageHTML += " is also in Baby Step " + currentBabyStep;
                    break;
                case 2:
                    messageHTML += " are also in Baby Step " + currentBabyStep;
                    break;
                case 3:
                    messageHTML += ", and 1 other friend are also in Baby Step " + currentBabyStep;
                    break;
                default:
                    messageHTML += ", and " + (totalFriends - numFriendsAdded) + " other friends are also in Baby Step " + currentBabyStep;
                }

                // Display list of friends on the page
                var allFriendsSelector = "#baby_step_" + currentBabyStep + "_content footer p";
                $(allFriendsSelector).html(messageHTML);
            }

        }

    };

    // Load JSON data
    var $friendsList = $.getJSON(
        "./baby-steps.json",
        displayFriends
    );

});