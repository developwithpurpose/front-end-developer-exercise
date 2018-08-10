var babySteps = document.getElementsByClassName('babyStep'), i;

for (var i = 1; i < babySteps.length; i++) {
    babySteps[i].style.display = 'none';
}


$(document).ready(function () {

    $.getJSON("../../baby-steps.json", function (data) {

        for (var i = 1; i <= 7; i++) {
            var friendsArr = [];

            $.each(data.friends, function (key) {
                var friend = data.friends[key];
                if (friend.babyStep === i) {
                    friendsArr.push(friend);
                }
            });

            if (friendsArr.length > 3) {
                var friend1 = friendsArr[0];
                var friend2 = friendsArr[1];
                var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a>, <a href="#">' + friend2.firstName + ' ' + friend2.lastName + '</a> and ' + (friendsArr.length - 2) + ' Other Friends are on this step';
                $("#babyStep" + i + "Div .friends").append(stringBuild);
            }
            else if (friendsArr.length === 3) {
                var friend1 = friendsArr[0];
                var friend2 = friendsArr[1];
                var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a>, <a href="#">' + friend2.firstName + ' ' + friend2.lastName + '</a> and ' + (friendsArr.length - 2) + ' Other Friend are on this step';
                $("#babyStep" + i + "Div .friends").append(stringBuild);
            }
            else if (friendsArr.length === 2) {
                var friend1 = friendsArr[0];
                var friend2 = friendsArr[1];
                var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a> and <a href="#">' + friend2.firstName + ' ' + friend2.lastName + '</a> are on this step';
                $("#babyStep" + i + "Div .friends").append(stringBuild);
            }
            else if (friendsArr.length === 1) {
                var friend1 = friendsArr[0];
                var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a> is on this step';
                $("#babyStep" + i + "Div .friends").append(stringBuild);
            }

        }

    });

    $("li a").click(function (e) {
        e.preventDefault();

        var currentLinkId = $("nav li .current").attr("id");
        var currentDivId = e.currentTarget.id;

        if (currentLinkId != currentDivId) {
            $("nav li #" + currentLinkId).removeClass("current");
            $(".babyStep").fadeOut("slow").promise().done(function () {
                $("div #" + currentDivId + "Div").fadeIn("slow");
                $("nav li #" + currentDivId).addClass("current");
            });
        }

    })
});