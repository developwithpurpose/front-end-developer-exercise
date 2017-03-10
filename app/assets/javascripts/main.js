
function getPage(selector) {
    var text = $(selector).text();
    val = parseInt(text.replace(/[^0-9\.]{1}/g, ''), 10);
    return val;
}

(function () {
    var friends = [];
    $('.active').show();
    page = getPage('input[type="radio"]:checked:first-of-type + label');
    $.getJSON('baby-steps.json', function (data) {
        friends = data.friends;
        getMsg(friends, 1);
    });

    function getMsg(friends, page) {
        friend = [];
        message = '';
        $.each(friends, function (index, value) {
            if (parseInt(value.babyStep) == parseInt(page)) {
                friend.push('<a href="#">' + value.firstName + ' ' + value.lastName + '</a>');
            }
        });

        if (friend.length == 1) {
            message = friend[0] + ' is also in Baby Step ' + page;
        } else if (friend.length == 2) {
            message = friend[0] + ' and ' + friend[1] + ' are also in Baby Step ' + page;
        } else if (friend.length >= 3) {
            message = friend[0] + ', ' + friend[1] + ', and ' + (friend.length - 2) + ' other friend are also in Baby Step ' + page;
        }
        return message;
    }

    $('.step').on('click', function () {
        message = null;
        $('.friends-on-step').html('');
        $('.steps').removeClass('active');
        $('.step').removeClass('active');
        page = getPage('.' + $(this).attr('class').split(' ')[0]);
        $('#baby-step-' + page).addClass('active');
        $('.baby-nav-' + page).addClass('active');

        message = getMsg(friends, page);
        if (message.length > 0) {
            setTimeout(function () {
                $('.friends-on-step').html(message);
            }, 1000);
        }
    });
} ());
