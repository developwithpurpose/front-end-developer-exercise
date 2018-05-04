'use strict';

(function () {
    if (window.location.hash) {
        var hashLink = window.location.hash.replace('#', '#link__');
        
    } else {
        handleBabyStepNavigation('#link__baby-step-1');
    }

    $.get('../baby-steps.json', function(babyStepsData) {
        setBabyStepsFriendsMessages(babyStepsData);
    });

    $('a.menu__item').click(function (event) {
        event.preventDefault();
        history.pushState({}, "", this.href);        
        handleBabyStepNavigation('#' + this.id);
    });

    function handleBabyStepNavigation(linkId) {
        var $menuItem = $(linkId);
        
        if (!$menuItem.hasClass('menu__item--selected')) {
            var thatSrc = $menuItem.find('.menu__icon').attr('src');

            $menuItem.parent().children().removeClass('menu__item--selected');
            $menuItem.addClass('menu__item--selected');
            $menuItem.siblings().find('.menu__icon').each(function (index) {
                this.src = this.src.replace('_blue.png', '.png');
            });
            $menuItem.find('.menu__icon').attr('src', thatSrc.replace('.png', '_blue.png'));

            scrollToBabyStep(linkId);
        }
    }

    function scrollToBabyStep(linkId) {
        var babyStepId = linkId.replace('link__', '');
        var $babySteps = $('.baby-steps');
        var $babyStep = $(babyStepId);

        $babySteps.animate({
            top: '-' + $babyStep.position().top + 'px'
        },
            500);
    }

    function setBabyStepsFriendsMessages(babyStepsData) {
        var sortedFriends = babyStepsData.friends.sort(compareNames);

        $('article.baby-step').each(
            function () {
                var babyStep = parseInt(this.id.slice(-1));

                var friends = sortedFriends.filter(function (friend) {
                    return friend.babyStep === babyStep;
                });

                if (friends.length < 1) {
                    return;
                } else {
                    var message = formatFriendsMessage(friends);
                    var $messageElement = $(this).find('.baby-step__message');

                    $messageElement.html(message);;
                    $messageElement.show();
                }
            }
        );
    }

    function compareNames(a, b) {
        if (a.lastName < b.lastName)
            return -1;
        if (a.lastName > b.lastName)
            return 1;
        return 0;
    }

    function formatFriendsMessage(friends) {
        var message = '';

        switch (friends.length) {
            case 1:
                message = '<span class="baby-step__message--friend">' +
                    friends[0].firstName + ' ' + friends[0].lastName + '</span> is also in Baby Step ' + friends[0].babyStep;
                break;
            case 2:
                message = '<span class="baby-step__message--friend">' +
                    friends[0].firstName + ' ' + friends[0].lastName + '</span> and <span class="baby-step__message--friend">' +
                    friends[1].firstName + ' ' + friends[1].lastName + '</span>' +
                    ' are also in Baby Step ' + friends[0].babyStep;
                break;
            case 3:
                message = '<span class="baby-step__message--friend">' +
                    friends[0].firstName + ' ' + friends[0].lastName + '</span>, <span class="baby-step__message--friend">' +
                    friends[1].firstName + ' ' + friends[1].lastName + '</span> and 1 other friend' +
                    ' are also in Baby Step ' + friends[0].babyStep;
                break;
            default:
                message = '<span class="baby-step__message--friend">' +
                    friends[0].firstName + ' ' + friends[0].lastName + '</span>, <span class="baby-step__message--friend">' +
                    friends[1].firstName + ' ' + friends[1].lastName + '</span> and ' + (friends.length - 2) + ' other friends' +
                    ' are also in Baby Step ' + friends[0].babyStep;
        }
        return message;
    }
})();