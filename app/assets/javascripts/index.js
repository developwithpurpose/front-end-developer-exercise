$(function () {
    // Hide all babysteps but the first one
    $('.bs_content_deactive').css('display', 'none');

    // Friends
    $.getJSON("baby-steps.json", function (data) {
        var bs1_friends = [], bs2_friends = [], bs3_friends = [], bs4_friends = [], bs5_friends = [], bs6_friends = [], bs7_friends = [];
        $.each(data.friends, function (k, v) {
            switch (v.babyStep) {
                case 1:
                    bs1_friends.push(v);
                    break;
                case 2:
                    bs2_friends.push(v);
                    break;
                case 3:
                    bs3_friends.push(v);
                    break;
                case 4:
                    bs4_friends.push(v);
                    break;
                case 5:
                    bs5_friends.push(v);
                    break;
                case 6:
                    bs6_friends.push(v);
                    break;
                case 7:
                    bs7_friends.push(v);
                    break;
            }
        });

        var friends = [bs1_friends, bs2_friends, bs3_friends, bs4_friends, bs5_friends, bs6_friends, bs7_friends];

        // Sort the friends alphabetically by last name
        $.each(friends, function (k, v) {
            v.sort(function (a, b) {
                if (a.lastName < b.lastName)
                    return -1;
                if (a.lastName > b.lastName)
                    return 1;
                return 0;
            });
        });

        $('#bs1 .friends').append(display_friends(friends[0]));
        $('#bs2 .friends').append(display_friends(friends[1]));
        $('#bs3 .friends').append(display_friends(friends[2]));
        $('#bs4 .friends').append(display_friends(friends[3]));
        $('#bs5 .friends').append(display_friends(friends[4]));
        $('#bs6 .friends').append(display_friends(friends[5]));
        $('#bs7 .friends').append(display_friends(friends[6]));
    });

    // Set default image
    $('.bs_active img').attr('src', $('.bs_active img').data('hover'));

    // Hover image swapping (skipping active bs)
    $('#side_nav ul li').hover(function () {
        if (!$(this).hasClass('bs_active')) {
            $('img', this).attr('src', $('img', this).data('hover'));
        }
    }, function () {
        if (!$(this).hasClass('bs_active')) {
            $('img', this).attr('src', $('img', this).data('image'));
        }
    });

    // Click animations and image swapping
    $('#side_nav ul li').on('click', function () {
        var old_item = $('.bs_active');
        var id = $(this).data('id');

        l(old_item.data('id'));
        l(id);

        // Swap content
        if (old_item.data('id') != id) {
            $('.bs_content').css('display', 'none');
            $('#bs' + old_item.data('id')).css('display', 'none');
            $('#bs' + $(this).data('id')).show('slide', {direction: 'right'}, 500);
        }

        // Reset old icon
        $('img', old_item).attr('src', $('img', old_item).data('image'));

        // Set new icon
        $('img', this).attr('src', $('img', this).data('hover'));

        // Animate background
        old_item.stop().animateBG(600, 0, 500).removeClass('bs_active');
        $(this).stop().animateBG(0, 0, 500).addClass('bs_active');
    });
});