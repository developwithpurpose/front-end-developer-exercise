var message = $("p#friends"),
    myCurStep,
    f;

$(function () {
    $("a.menu-btn").click(function() {
       $("body").toggleClass("show-nav");
       $(this).toggleClass("is-active");
       return false;
    });
    
    // hide steps and friends message initially
    $(".content .baby-step:gt(0), p#friends").addClass("hidden");

    // get list of friends
    $.getJSON("assets/javascripts/baby-steps.json")
        .done(function (data) {
            f = data;
        });

    $("main nav a").click(function () {
        var $this = $(this),
            stepToLoad = $this.attr("href").split("#")[1];

        // change all navigation links to default state
        $("main nav a").removeClass("active");
        
        // change the clicked navigation link to active state
        $this.addClass("active");

        // change all baby steps to default state
        // hide friends message
        $(".content .baby-step").add(message).removeClass("active").addClass("hidden");
        
        // select the baby step with the same ID as the link clicked,
        // change to active state
        $(".content .baby-step#" + stepToLoad).removeClass("hidden").addClass("active");

        // set current step
        // convert number (string) to integer
        myCurStep = parseInt($this.attr("href").split("-")[2], 10);
        
        buildListOfFriends();
        
        return false;
    });

});

function buildListOfFriends() {
    var friendsOnMyCurStep = [],
        friendsCount = 0,
        otherFriendsList,
        startStepMessage,
        endStepMessage = " also in Baby Step " + myCurStep + ".",
        friendsMessage,
        i;

    // sort object by last name ascending
    f.friends.sort(sortNames);

    // clear any old values from the array
    friendsOnMyCurStep.length = 0;

    // loop through JSON friends array
    for (i = 0; i < f.friends.length; i++) {
        
        // if a friend's step matches mine,
        if (f.friends[i].babyStep === myCurStep) {
            // push their full name to a new array of just friends on same step as me
            // for the first 2 friends, link the name
            if (friendsCount < 2) {
                friendsOnMyCurStep.push("<a href=\"#\">" + f.friends[i].firstName + " " + f.friends[i].lastName + "</a>");
            } else {
                // for friends after the first 2, push just their name (not linked)
                friendsOnMyCurStep.push(f.friends[i].firstName + " " + f.friends[i].lastName);
            }
            friendsCount++;
        }
    }

    // if there are no friends on the same step,
    // hide the message.
    if (!friendsOnMyCurStep.length || myCurStep === 1 || myCurStep > 7) {
        message.removeClass("active");
    } else {
        // change text from "are" to "is"
        startStepMessage = (friendsOnMyCurStep.length > 1) ? " are " : " is ";
    
        // change "friends" text for plural
        friendsMessage = (friendsOnMyCurStep.length === 3) ? " friend" : " friends ";
    
        // start building list
        if (friendsOnMyCurStep.length >= 3) {
            // put "other friends" in a list to show on hover
            otherFriendsList = friendsOnMyCurStep.slice(2).join(", ");
    
            // build list
            // Output the first 2 friends in the array, then add the message about other friends
            message.html(friendsOnMyCurStep.slice(0, 2).join(", ") +
                " and <span class=\"other-friends\" data-tipsy=\"" + otherFriendsList + "\">" + (friendsOnMyCurStep.length - 2) + " other " + friendsMessage + "</span>" +
                startStepMessage + endStepMessage);
            
        } else {
            // build list
            message.html(friendsOnMyCurStep.slice(0, 2).join(" and ") +
                startStepMessage + endStepMessage);
        }
        
        showFriendsMessage();
    }
}

function showFriendsMessage() {
    // delay friend message transition
    // to stagger animation and draw attention
    window.setTimeout(function() {
        message.toggleClass("hidden active");
    }, 250);
}

function sortNames(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    } else {
        return 0;
    }
}