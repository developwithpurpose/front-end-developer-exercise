(function(window, $) {
    $('.step').hide();

    $.ajax({
        method: 'GET',
        url: 'baby-steps.json'
    }).then(function(data) {
        var orderedFriends = _.orderBy(data.friends, function(friend) {
            return friend.lastName;
        });
        var friends = _.map(orderedFriends, function(friend) {
            return {
                displayName: friend.firstName + ' ' + friend.lastName,
                babyStep: friend.babyStep
            };
        });
        
        var selectActiveTrigger = function(stepNumber) {
            var stepTriggers = $('nav ul li');
            stepTriggers.removeClass('active');
            stepTriggers.filter('[data-step=' + stepNumber + ']').addClass('active');
        };

        var selectActiveContent = function(stepNumber) {
            var contentContainers = $('main .step');
            contentContainers.removeClass('active');
            contentContainers.filter('[data-step=' + stepNumber + ']').addClass('active');
        };

        var doTransition = function(fromStep, toStep) {
            $('.step').hide();
            var content = $('.step[data-step=' + toStep + ']');
            content.slideDown(700);
        };

        var wrapAnchor = function(name) {
            return '<a href="javascript:void(0)">' + name + '</a>';
        };

        var getFriendsDisplay = function(stepNumber) {
            var friendsToShow = _.filter(friends, function(friend) {
                return +friend.babyStep === +stepNumber;
            });
            switch (friendsToShow.length) {
                case 0:
                    return '';
                case 1:
                    return wrapAnchor(friendsToShow[0].displayName) + ' is also in Baby Step ' + stepNumber;
                case 2:
                    return wrapAnchor(friendsToShow[0].displayName) + ' and ' + wrapAnchor(friendsToShow[1].displayName) + ' are also in Baby Step ' + stepNumber;
                default:
                    return wrapAnchor(friendsToShow[0].displayName) + ', ' + wrapAnchor(friendsToShow[1].displayName) + ', and ' + (friendsToShow.length - 2) + ' other friend' + (friendsToShow.length <= 3 ? '' : 's') + ' are also in Baby Step ' + stepNumber;
            }
        };

        var showFriends = function(stepNumber) {
            var display = getFriendsDisplay(stepNumber);
            $('main .step.active .friends-display').html('<div>' + display + '</div>');
        };

        var previousStepNumber = 0;
        var selectStep = function(stepNumber) {
            selectActiveTrigger(stepNumber);
            doTransition(previousStepNumber, stepNumber);
            selectActiveContent(stepNumber);
            showFriends(stepNumber);
            previousStepNumber = stepNumber;
        };

        $(function() {
            selectStep(1);

            $('nav ul li a').click(function(e) {
                var targetStep = $(e.target).closest('li').attr('data-step');
                selectStep(targetStep);
            });
        });
    });
}(this, this.jQuery))