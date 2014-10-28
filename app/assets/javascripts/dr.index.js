(function ($) {

    var STEP_COUNT = 7;
    var FRIENDS_TEXT_4 = '<a href="#">{0}</a>, <a href="#">{1}</a>, and {2} other friends are also in Baby Step {3}';
    var FRIENDS_TEXT_3 = '<a href="#">{0}</a>, <a href="#">{1}</a>, and 1 other friend are also in Baby Step {2}';
    var FRIENDS_TEXT_2 = '<a href="#">{0}</a> and <a href="#">{1}</a> are also in Baby Step {2}';
    var FRIENDS_TEXT_1 = '<a href="#">{0}</a> is also in Baby Step {1}';

    // Show just the first one
    $('#content-step1').show();

    // Load JSON data
    $.getJSON('assets/javascripts/baby-steps.json', function (data) {
        var friendsTxt = '';
        for (var i = 1; i <= STEP_COUNT; i++) {
            // Get array of friends for each step
            var result = $.grep(data.friends, function (e) { return e.babyStep == i });

            // Fill in the 'friends' paragraph with custom text beased
            // on the number friends that are in the step I am looking at.
            if (result.length >=4) {
                friendsTxt = FRIENDS_TEXT_4
                    .replace('{0}', result[0].firstName + ' ' + result[0].lastName)
                    .replace('{1}', result[1].firstName + ' ' + result[1].lastName)
                    .replace('{2}', result.length - 2)
                    .replace('{3}', i);
                $('#content-step' + i + ' .friends').html(friendsTxt);
            } else if (result.length == 3) {
                friendsTxt = FRIENDS_TEXT_3
                    .replace('{0}', result[0].firstName + ' ' + result[0].lastName)
                    .replace('{1}', result[1].firstName + ' ' + result[1].lastName)
                    .replace('{2}', i);
                $('#content-step' + i + ' .friends').html(friendsTxt);
            } else if (result.length == 2) {
                friendsTxt = FRIENDS_TEXT_2
                    .replace('{0}', result[0].firstName + ' ' + result[0].lastName)
                    .replace('{1}', result[1].firstName + ' ' + result[1].lastName)
                    .replace('{2}', i);
                $('#content-step' + i + ' .friends').html(friendsTxt);
            } else if (result.length == 1) {
                friendsTxt = FRIENDS_TEXT_1
                    .replace('{0}', result[0].firstName + ' ' + result[0].lastName)
                    .replace('{1}', i);
                $('#content-step' + i + ' .friends').html(friendsTxt);
            }
        }
    })

    // Handle nav buttons onClick events
    $('#left-nav > ul > li').click(function () {
        
        // Reset current active button to inactive
        $('#left-nav > ul > li.active')
            .removeClass('active')
            .find('img')  // change element's sprite color
                .removeClass('blue')
                .addClass('grey');

        // Mark the newly selected element as active
        $(this)
            .addClass('active')
            .find('img') // change element's sprite color
                .removeClass('grey')
                .addClass('blue');

        // Hide active content
        $('#step-content > div.active').fadeOut(350).removeClass('active');

        $('#active-button-background').fadeOut(350);

        // What is the 'top' value of current element?
        var thisTop = $(this).position().top;

        // Get id of selected step's content div
        var stepContentId = '#content-' + $(this)[0].id;

        setTimeout(function () {
            // Show selected content
            $(stepContentId).fadeIn().addClass('active');

            // Highlight selected button
            $('#active-button-background')
                .css({ top: thisTop })
                .fadeIn(350);
        }, 350)
    });

}(jQuery));