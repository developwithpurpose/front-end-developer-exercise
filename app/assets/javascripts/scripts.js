(function ($, window, document) {
    'use strict';

/*
 * DOC READY
 */
    $(function () {
        $('body').removeClass('no-js');

        $('.tabs-nav').find('li').first().addClass('active')
            .children('.tabs-link-icon').addClass('blue');

        showFriends($('.tabs-content'));

    });

/*
 * LISTENERS
 */
    $('.tabs-nav').on('click', 'li', function (e) {
        var $tabsBody = $('.tabs-body');
        var $this = $(this);
        var href = $this.children().first('a').attr('href');

        if (!$this.hasClass('active')) {
            $tabsBody.animate(
                {opacity: 0},
                150,
                function () {
                    $tabsBody.scrollTop($(href).position().top);
                    $tabsBody.animate({opacity: 1}, 150);
                }
            );

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

            friendsData.sort(function compareStep (a, b) {
                return a.babyStep - b.babyStep;
            });

            for (i = 0; i < $el.length; i++) {
                $span = $('<span>', {'class': 'my-friends'});
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
                    friends.sort(function compareLastName (a, b) {
                        if (a.lastName < b.lastName) return -1;
                        if (a.lastName > b.lastName) return 1;
                        return 0;
                    });
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
            return getFriendLink(friends[0], true) + ' is also in Baby Step ' + (i + 1);
        case 2:
            return getFriendLink(friends[0], true) + ' and ' + getFriendLink(friends[1], true) +
                    ' are also in Baby Step ' + (i + 1);
        case 3:
            return getFriendLink(friends[0], true) + ', ' + getFriendLink(friends[1], true) +
                    ', and 1 other friend are also in Baby Step ' + (i + 1);
        default:
            return getFriendLink(friends[0], true) + ', ' + getFriendLink(friends[1], true) +
                    ', and ' + (friends.length - 2) +
                    ' other friends are also in Baby Step ' + (i + 1);
        }
    };

    var getFriendLink = function (friend, toString) {
        var $a = $('<a>', {'href': '#'});

        $a.text(friend.firstName + ' ' + friend.lastName);

        return toString ? $a[0].outerHTML : $a;
    };

}(window.jQuery, window, document));