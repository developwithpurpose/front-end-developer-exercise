(function($) {

    var App = {
        activeClass: 'active',
        clickables: [
            {
                selector: '.step-outline__step',
                handler: 'outlineStepHandler'
            },
            {
                selector: '.step-outline__step .step-name',
                handler: 'outlineStepHandler'
            },
            {
                selector: '.step-outline__step .step-logo',
                handler: 'outlineStepHandler'
            }
        ],
        init: function() {
            this.updateActiveStates('one');
            this.registerListeners();
            this.fetchFriendsForStep(1);
        },
        updateActiveStates: function(step) {
            $('.active').each(function(index, element) {
                $(element).removeClass(this.activeClass);
                if (!$(element).is(':animated')) {
                    $(element).css('background-color', 'inherit');
                } else {
                    setTimeout(function() { $(element).css('background-color', 'inherit'); }, 600);
                }
            }.bind(this));

            $('.step-outline__step--' + step).addClass(this.activeClass)
                .animate({
                    backgroundColor: "white"
                }, "slow");
            $('.step-info .step--' + step).addClass(this.activeClass);
        },
        registerListeners: function() {
            for(var index in this.clickables) {
                var clickable = this.clickables[index];
                if (clickable === null) {
                    continue;
                }

                if (typeof this[clickable.handler] !== 'function') {
                    continue;
                }

                $(clickable.selector).click(this[clickable.handler].bind(this));
            }
        },
        outlineStepHandler: function(event) {
            event.preventDefault();
            var stepNumStr = $(event.target).data('step') || $(event.target).parent().data('step');;
            var stepNumInt = $(event.target).data('step-int') || $(event.target).parent().data('step-int');;

            this.updateActiveStates(stepNumStr);
            this.fetchFriendsForStep(stepNumInt+1);
        },
        showFriends: function(friendList) {
            if (friendList.length <= 0) {
                $('.step__friends').html("");
                return;
            }

            $('.step__friends').html(this.constructFriendString(friendList));
        },
        constructFriendString: function(friendList) {
            var appendSummary = false;
            var friendSummary = "";
            var currentStepName = $('.step-outline__step.active .step-name').html();
            if (friendList.length > 2) {
                var extras = (friendList.length-2).toString();
                var plural = (extras / 2) >= 1 ? 'friends' : 'friend';
                friendSummary = " and " + extras + " other " + plural + " are also in " + currentStepName + ".";
            } else if (friendList.length > 1){
                friendSummary = " are also in " + currentStepName + ".";
            } else {
                friendSummary = " is also in " + currentStepName + ".";
            }

            var friendString = '';
            var friends = [];
            for(var friendIndex in friendList) {
                if (friendIndex > 1) {
                    break;
                }

                friends.push("<a href='#'>" + friendList[friendIndex].firstName + " " + friendList[friendIndex].lastName + "</a>");
            }

            friendString = (friendList.length === 2) ? friends.join(' and ') : friends.join(", ");
            return friendString + friendSummary;
        },
        fetchFriendsForStep: function(stepNum) {
            $.ajax('/friends/' + stepNum, {
                success: function(data, textStatus, jqhr) {
                    this.showFriends(data);
                }.bind(this),
                error: function(resultJqhr, textStatus) {
                    console.error('Fetch failed; unable to gather friends for this baby step.')
                }.bind(this)
            });
        }
    };

    $(document).ready(App.init.bind(App));
})(jQuery)
