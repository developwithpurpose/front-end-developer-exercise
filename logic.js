$(document).ready(function() {
    var friendstep1 = [],
        friendstep2 = [],
        friendstep3 = [],
        friendstep4 = [],
        friendstep5 = [],
        friendstep6 = [],
        friendstep7 = [];
    $.ajax({
        type: "GET",
        url: "../../baby-steps.json",
        success: function(result) {
            var friends = result.friends;
            for (var i = 0; i < friends.length; i++) {
                var fullName = friends[i].firstName + " " + friends[i].lastName;

                switch (friends[i].babyStep) {
                    case 1:
                        friendstep1.push(fullName);
                        break;
                    case 2:
                        friendstep2.push(fullName);
                        break;
                    case 3:
                        friendstep3.push(fullName);
                        break;
                    case 4:
                        friendstep4.push(fullName);
                        break;
                    case 5:
                        friendstep5.push(fullName);
                        break;
                    case 6:
                        friendstep6.push(fullName);
                        break;
                    case 7:
                        friendstep7.push(fullName);
                        break;
                }
            }

            calcFriends(friendstep1, "#babyStep1");
            calcFriends(friendstep2, "#babyStep2");
            calcFriends(friendstep3, "#babyStep3");
            calcFriends(friendstep4, "#babyStep4");
            calcFriends(friendstep5, "#babyStep5");
            calcFriends(friendstep6, "#babyStep6");
            calcFriends(friendstep7, "#babyStep7");
        }
    });
    function calcFriends(friendsArray, element) {
        if (friendsArray.length !== 0) {
            var yourFriends = newPTag(friendsArray);
            if (friendsArray.length > 2) {
                if (friendsArray.length - 2 === 1) {
                    var others = friendsArray.length - 2 + " Other Friend ";
                } else {
                    var others = friendsArray.length - 2 + " Other Friends ";
                }
                $(element).append(
                    "<p class='myFriends'>" +
                        yourFriends +
                        " and " +
                        others +
                        "are also in " +
                        $(element).attr("data-step") +
                        "</p>"
                );
            } else if (friendsArray.length === 1) {
                $(element).append(
                    "<p class='myFriends'>" +
                        yourFriends +
                        " is also in " +
                        $(element).attr("data-step") +
                        "</p>"
                );
            } else if (friendsArray.length <= 2) {
                $(element).append(
                    "<p class='myFriends'>" +
                        yourFriends +
                        "are also in " +
                        $(element).attr("data-step") +
                        "</p>"
                );
            }
        }
    }
    function newPTag(friendsArray) {
        var friendLinks = "";
        for (var i = 0; i < 2; i++) {
            if (friendsArray[i] !== undefined) {
                if (friendsArray.length === 1) {
                    friendLinks += '<a href="">' + friendsArray[i] + "</a> ";
                } else if (friendsArray.length === 2) {
                    if (i === 0) {
                        friendLinks +=
                            '<a href="">' + friendsArray[i] + "</a> and ";
                    } else {
                        friendLinks +=
                            '<a href="">' + friendsArray[i] + "</a> ";
                    }
                } else {
                    if (i === 0) {
                        friendLinks +=
                            '<a href="">' + friendsArray[i] + "</a>, ";
                    } else {
                        friendLinks +=
                            '<a href="">' + friendsArray[i] + "</a> ";
                    }
                }
            }
        }
        return friendLinks;
    }
    $(".navItem").click(function() {
        if ($($("body").find(".active")).length !== 0) {
            $($("body").find(".active")[0].hash).slideUp("normal");
            $($("body").find(".active")[0]).removeClass("active");
        }
        if ($(this).hasClass("active")) {
            $($(this).attr("href")).slideDown("normal");
        } else {
            $($(this).attr("href")).slideDown("normal");
            $(this).addClass("active");
        }
    });
});