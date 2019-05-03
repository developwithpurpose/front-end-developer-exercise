$(document).ready(function() {
    var friendsin1 = [],
        friendsin2 = [],
        friendsin3 = [],
        friendsin4 = [],
        friendsin5 = [],
        friendsin6 = [],
        friendsin7 = [];
    $.ajax({
        type: "GET",
        url: "../../baby-steps.json", // Using our resources.json file to serve results
        success: function(result) {
            var friends = result.friends;
            for (var i = 0; i < friends.length; i++) {
                var fullName = friends[i].firstName + " " + friends[i].lastName;

                switch (friends[i].babyStep) {
                    case 1:
                        friendsin1.push(fullName);
                        break;
                    case 2:
                        friendsin2.push(fullName);
                        break;
                    case 3:
                        friendsin3.push(fullName);
                        break;
                    case 4:
                        friendsin4.push(fullName);
                        break;
                    case 5:
                        friendsin5.push(fullName);
                        break;
                    case 6:
                        friendsin6.push(fullName);
                        break;
                    case 7:
                        friendsin7.push(fullName);
                        break;
                }
            }

            calcFriends(friendsin1, "#babyStep1");
            calcFriends(friendsin2, "#babyStep2");
            calcFriends(friendsin3, "#babyStep3");
            calcFriends(friendsin4, "#babyStep4");
            calcFriends(friendsin5, "#babyStep5");
            calcFriends(friendsin6, "#babyStep6");
            calcFriends(friendsin7, "#babyStep7");
        }
    });
    function calcFriends(friendsArray, element) {
        if (friendsArray.length !== 0) {
            var yourFriends = createPTag(friendsArray);
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
    function createPTag(friendsArray) {
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
            $($(this).attr("href")).slideUp("normal");
        } else {
            $($(this).attr("href")).slideDown("normal");
            $(this).addClass("active");
        }
    });
});
