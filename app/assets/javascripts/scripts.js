(function ($, window, document) {
    'use strict';

/*
 * DOC READY
 */
    $(function () {
        $('body').removeClass('no-js');
        showFriends($('.tabs-content'));
    });

/*
 * LISTENERS
 */
    $('.tabs-nav').on('click', 'li', function (e) {
        var $tabsBody = $('.tabs-body');
        var $this = $(this);
        var href = $this.children().first('a').attr('href');

        if (!isElementInViewport($(href)[0])) {
            $tabsBody.animate(
                {opacity: 0},
                150,
                function () {
                    $(href)[0].scrollIntoView();
                    $tabsBody.animate({opacity: 1}, 150);
                }
            );
        }

        if (!$this.hasClass('active')) {
            $('.tabs-nav').find('li').removeClass('active');
            $('.tabs-link-icon').removeClass('blue');
            $this.addClass('active');
            $this.children('.tabs-link-icon').addClass('blue');
        }

        e.preventDefault();
    });

/*
 * FUNCTIONS
 */
    var showFriends = function ($el) {
        $.ajax({
            url: "/assets/data/baby-steps.json",
            method: 'GET',
            dataType: 'json',
            error: error,
            success: success
        });

        function error() {
            console.warn('Error retrieving friends list from server');
        }

        function success(data) {
            var friendsData = data.friends;
            var pointer = 0;
            var friends;
            var done;
            var babyStep;
            var msg;
            var $span;
            var i;

            friendsData.sort(sortBy('babyStep', false, parseInt));

            for (i = 0; i < $el.length; i++) {
                $span = $('<span>', {class: 'my-friends'});
                friends = [];
                done = false;

                while (!done && pointer < data.friends.length) {
                    babyStep = friendsData[pointer].babyStep;
                    if (babyStep > i + 1) {
                        done = true;
                    } else {
                        friends.push(friendsData[pointer]);
                        pointer++;
                    }
                }

                if (friends.length) {
                    friends.sort(sortBy('lastName', false));
                    msg = getFriendMessage(friends, i);
                    $span.html(msg);
                    $el.eq(i).append($span);
                }
            }
        }
    };

    var getFriendMessage = function (friends, i) {
        switch (friends.length) {
        case 0:
            break;
        case 1:
            return getFriendLink(friends[0]) + ' is also in Baby Step ' + (i + 1);
        case 2:
            return getFriendLink(friends[0]) + ' and ' + getFriendLink(friends[1]) +
                    ' are also in Baby Step ' + (i + 1);
        case 3:
            return getFriendLink(friends[0]) + ', ' + getFriendLink(friends[1]) +
                    ', and 1 other friend are also in Baby Step ' + (i + 1);
        default:
            return getFriendLink(friends[0]) + ', ' + getFriendLink(friends[1]) +
                    ', and ' + (friends.length - 2) +
                    ' other friends are also in Baby Step ' + (i + 1);
        }
    };

    var getFriendLink = function (friend, returnObj) {
        var $a = $('<a>');

        $a.text(friend.firstName + ' ' + friend.lastName);

        if (friend.href) {
            $a.attr('href', friend.href);
        } else {
            $a.attr('href', '#');
        }

        if (returnObj) {
            return $a;
        } else {
            return $a[0].outerHTML;
        }
    };

    // stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    var isElementInViewport = function (el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // stackoverflow.com/questions/979256/how-to-sort-an-array-of-javascript-objects
    var sortBy = function (field, reverse, primer) {
        var key = function (x) {
            return primer ? primer(x[field]) : x[field];
        };

        return function (a, b) {
            var A = key(a);
            var B = key(b);
            return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1,1][+!reverse];
        };
    };
}(window.jQuery, window, document));