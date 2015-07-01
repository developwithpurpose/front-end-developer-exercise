function setStepFriends(friendData) {
    var step1Friends = new Array();
    var step2Friends = new Array();
    var step3Friends = new Array();
    var step4Friends = new Array();
    var step5Friends = new Array();
    var step6Friends = new Array();
    var step7Friends = new Array();

    //Separate friends into steps
    $(friendData.friends).each(function () {
        switch (this.babyStep) {
            case 1:
                step1Friends.push(this);
                break;
            case 2:
                step2Friends.push(this);
                break;
            case 3:
                step3Friends.push(this);
                break;
            case 4:
                step4Friends.push(this);
                break;
            case 5:
                step5Friends.push(this);
                break;
            case 6:
                step6Friends.push(this);
                break;
            case 7:
                step7Friends.push(this);
                break;
        }
    });

    //Fill out the friends for each step
    fillOutFriends(step1Friends, $("#step1 .stepFriends"), 1);
    fillOutFriends(step2Friends, $("#step2 .stepFriends"), 2);
    fillOutFriends(step3Friends, $("#step3 .stepFriends"), 3);
    fillOutFriends(step4Friends, $("#step4 .stepFriends"), 4);
    fillOutFriends(step5Friends, $("#step5 .stepFriends"), 5);
    fillOutFriends(step6Friends, $("#step6 .stepFriends"), 6);
    fillOutFriends(step7Friends, $("#step7 .stepFriends"), 7);
}

function fillOutFriends(stepFriends, stepFriendsElement, stepId) {
    //Create links to the friends using the number of friends they have on the step to determine the text to show

    if (stepFriends.length == 1) {
        stepFriendsElement.append(createFriendLink(stepFriends[0]));
        stepFriendsElement.append("<span> is also in Baby Step " + stepId + "</span>");
    }
    else if (stepFriends.length == 2) {
        stepFriends = sortFriends(stepFriends);

        stepFriendsElement.append(createFriendLink(stepFriends[0]));
        stepFriendsElement.append("<span> and </span>");
        stepFriendsElement.append(createFriendLink(stepFriends[1]));
        stepFriendsElement.append("<span> are also in Baby Step " + stepId + "</span>");
    }
    else if (stepFriends.length == 3) {
        stepFriends = sortFriends(stepFriends);

        stepFriendsElement.append(createFriendLink(stepFriends[0]));
        stepFriendsElement.append("<span>, </span>");
        stepFriendsElement.append(createFriendLink(stepFriends[1]));
        stepFriendsElement.append("<span> and 1 other friend are also in Baby Step " + stepId + "</span>");
    }
    else if (stepFriends.length >= 4) {
        stepFriends = sortFriends(stepFriends);

        stepFriendsElement.append(createFriendLink(stepFriends[0]));
        stepFriendsElement.append("<span>, </span>");
        stepFriendsElement.append(createFriendLink(stepFriends[1]));
        stepFriendsElement.append("<span> and " + (stepFriends.length - 2) + " other friends are also in Baby Step " + stepId + "</span>");
    }
}

function sortFriends(stepFriends) {
    //Sort friends by last name
    var sortedFriends = stepFriends.sort(function (friend1, friend2) {
        return friend1.lastName.toLowerCase().localeCompare(friend2.lastName.toLowerCase());
    });

    return sortedFriends;
}

function createFriendLink(friend) {
    return "<a href=\"#\">" + friend.firstName + " " + friend.lastName + "</a>";
}

function stepSelect(stepClicked) {
    $(".stepSidebar li").removeClass("selected");
    $(stepClicked).addClass("selected");

    //Animate the highlight over 700 ms
    $(".stepSidebar li.stepHighlight").animate({
        top: stepClicked.offsetTop
    }, 700);

    var stepId = stepClicked.id.substr(stepClicked.id.length - 1);;
    var stepBody = $("#step" + stepId);
    //Sanity check
    if (stepBody.length > 0) {
        //Set the height of the container to the new step height to hide the others steps from view
        $(".stepContainer").css("height", stepBody.height() + "px");

        //Get the amount you need to scroll by getting how much you have already scroll
        //and adding the position you need to get to
        var scrollValue = stepBody.parent().position().top + stepBody.position().top;
        //Always subtract, negative scroll values will become positive when you subtract the negative
        var scrollAmount = "-=" + scrollValue;

        //Scroll the entire step container
        $(".stepContainer .stepScrollContainer").animate({
            top: scrollAmount
        }, 700);
    }
}
