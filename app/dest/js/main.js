$(document).ready(function() {

    var stepsSlider = $('.b-steps__slider').bxSlider({
        mode: 'vertical',
        controls: false,
        pager: false,
        speed: 500
    });

    $('.b-steps__nav__item').click(function(e) {
        var $this = $(this);

        if (!stepsSlider.isWorking()) {
            $('.b-steps__nav__item').removeClass('active');

            $(this).addClass('active');

            $('.b-steps__nav__overlay').css('top', $(this).position().top);

            stepsSlider.goToSlide($this.data('step') - 1);
        }

        e.preventDefault();
    });

    $.getJSON('js/baby-steps.json', function(data) {
        var friends = _.groupBy(data.friends, 'babyStep');

        $('.b-steps__item[data-step]').each(function(item, index) {
            var $this       = $(this);
            var $friends    = $this.find('.b-steps__item__friends');
            var stepNum     = $this.data('step');
            var stepFriends = _.sortBy(friends[stepNum], 'lastName');

            if (stepFriends) {
                var links = _.map(stepFriends, function(item, index) {
                   return '<a href="#">' + [item.firstName, item.lastName].join(' ') + '</a>'; 
                });

                if (links.length == 1) {
                    $friends.html(links[0] + ' is also in Baby Step ' + stepNum);
                }

                if (links.length == 2) {
                    $friends.html(links.join(' and ') + ' are also in Baby Step ' + stepNum);
                }

                if (links.length >= 3) {
                    $friends.html(links.slice(0, 2).join(', ') + ' and ' + (links.length - 2) + ' other friend' + ((links.length - 2) > 1 ? 's' : '') + ' are also in Baby Step ' + stepNum);
                }

            }
        });

        stepsSlider.reloadSlider();
    });

});