class ContentNav {
    constructor(activeStep = 1) {
        this.slides = document.getElementsByClassName('c-content-slide');
        $('.js-content-nav-holder').prepend('<li class="c-content-nav__highlight js-nav-highlight"></li>');
        if (window.location.hash && window.location.hash.indexOf('step') >= 0) {
            activeStep = window.location.hash.replace('#step', '');
        }
        this.navigate(activeStep, false);
        this.getFriends();
    }
    getFriends() {
        let the_class = this;
        $.ajax({
            url: 'baby-steps.json',
            dataType: 'json'
        }).done(function (json) {
            json.friends.sort(function(a, b){
                if(a.lastName < b.lastName) { return -1; }
                if(a.lastName > b.lastName) { return 1; }
                return;
            })
            for (let i = 0; i < the_class.slides.length; i++) {
                let friends = [];
                for (let a = 0; a < json.friends.length; a++) {
                    if (json.friends[a].babyStep == the_class.slides[i].getAttribute('data-step')) {
                        friends.push(json.friends[a]);
                    }
                }
                if (friends.length > 0) {
                    let tpl = document.getElementById('friends-template').innerHTML;
                    let template = _.template(tpl);
                    let html = template({
                        friends: friends,
                        step: i + 1
                    });
                    the_class.slides[i].innerHTML += html;
                }
            }
        }).fail(function (error) {
            console.log(error.responseText);
        });
    }
    navigate(activeStep, animate = true) {
        let nav = $('.c-content-nav');
        let navItem = $('.c-content-nav__link[data-step="' + activeStep + '"]');
        if (!navItem.hasClass('c-content-nav__link--active')) {
            $('.c-content-nav__link--active').removeClass('c-content-nav__link--active');
            let content = $('.c-content');
            let contentItem = $('#step' + activeStep);
            navItem.addClass('c-content-nav__link--active');
            if (animate == true) {
                $('.js-nav-highlight').animate({
                    top: ((navItem.offset().top - nav.offset().top) - 1)
                }, 700);
                content.animate({
                    scrollTop: contentItem.offset().top - $('#step1').offset().top
                }, 700);
                window.history.pushState("", "", '#step' + activeStep);
            } else {
                $('.js-nav-highlight').css('top', (navItem.offset().top - nav.offset().top) - 1);
                content.scrollTop(contentItem.offset().top - $('#step1').offset().top);
            }
        }
    }
}

$('.js-content-nav-link').click(function (e) {
    e.preventDefault();
    content.navigate($(this).attr('data-step'));
});

window.addEventListener('hashchange', function () {
    if (window.location.hash && window.location.hash.indexOf('step') >= 0) {
        activeStep = window.location.hash.replace('#step', '');
    }
    content.navigate(activeStep, false);
});