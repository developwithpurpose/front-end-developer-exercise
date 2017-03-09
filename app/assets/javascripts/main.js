        function getPage(selector) {
            var text = $(selector).text();
            return parseInt(text.replace(/[^0-9\.]{1}/g, ''), 10);
        }

        (function () {
            var friends = [];
            $('.active').show();
            page = getPage('.active figure figcaption h1');

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
/*

if 0 friends, then don't show any message
if 1 friend, then show "Paul Taylor is also in Baby Step 2"
if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"

*/
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
                console.log(message.length)
                if (message.length > 0){
                    $('.friends-on-step').html(message);
                } 
            });
        } ());
