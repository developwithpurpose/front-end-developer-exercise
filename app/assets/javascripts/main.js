$(function() {
        var babyStep = "1";
        var babyStepsFriends = 0;
        var friendsOnSteps = [];
        loadFriends();

        $(".numoffriends").hide();

        $(".tabs input").on("click", loadFriends);

        function loadFriends() {
            var tabID = this.id;

            $(".numoffriends").fadeOut(10);

            if (tabID != undefined)
                babyStep = tabID.slice(-1);

            $.ajax({
                url: "baby-steps.json",
                dataType: 'json',
                data: null,
                type: 'GET',
                success: function(json) {

                    json.friends.sort(function(a, b) {
                        var nameA = a.lastName.toUpperCase();
                        var nameB = b.lastName.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });

                    var friendsOnSteps = [];
                    json.friends.forEach(function(friend) {
                        if (friend.babyStep.toString() === babyStep) {
                            friendsOnSteps.push(friend)
                        }
                    });

                    var babyStepText;

                    if (friendsOnSteps.length === 0) {
                    	babyStepText = 'No friends on this step.';
                    } else if (friendsOnSteps.length === 1) {
                        babyStepText = "<a href='#'>" + friendsOnSteps[0].firstName + " " + friendsOnSteps[0].lastName + "</a> is also on Baby Step " + babyStep;
                    } else if (friendsOnSteps.length === 2) {
						babyStepText = "<a href='#'>" + friendsOnSteps[0].firstName + " " + friendsOnSteps[0].lastName + "</a> and <a href='#'>" + friendsOnSteps[1].firstName + " " + friendsOnSteps[1].lastName + "</a> are also on Baby Step " + babyStep;
                    } else if (friendsOnSteps.length > 2) {
						babyStepText = "<a href='#'>" + friendsOnSteps[0].firstName + " " + friendsOnSteps[0].lastName + "</a>, <a href='#'>" + friendsOnSteps[1].firstName + " " + friendsOnSteps[1].lastName + "</a>, and " + (friendsOnSteps.length - 2) + " other friends are also on Baby Step " + babyStep;
                    } else {
                    	babyStepText = 'No friends on this step.';
                    }

                    $(".numoffriends").html(babyStepText).fadeIn(1000);
                },

                error: function(xhr, status, text) {
                    console.log(status + ' ' + text);
                }
            });
        }
    });