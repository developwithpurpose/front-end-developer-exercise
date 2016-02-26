$(document).ready(function () {

    // Append, only here when javascript is enabled
    $('ul').append('<div id="slider"></div>');

    // For each navigation item click
    $('.navigation').on('click', 'ul li a', function (e) {
        // Prevent default behavior when clicking links
        e.preventDefault();
        
        // Store current step
        var step = parseInt($(this).attr('href').replace('#', ''));
        
        // Change sprite
        $('.selected-item').siblings('[class^=bs]').css('background-position-y', '');
        var currentSpritePosition = $(this).siblings('[class^=bs]').css("background-position").split(' ')[1];
        var y = Number(currentSpritePosition.replace(/[^0-9-]/g, ''));
        y -= 175;
        $(this).siblings('[class^=bs]').css('background-position-y', y + 'px');
        
        // Apply selected style to clicked navigation item
        $('.selected-item').removeClass('selected-item');
        $(this).addClass('selected-item');
        
        // Move slider over clicked navigation item
        $('#slider').css({
            'display': 'block'
        });
        var top = $(this).parent().position().top;

        $('#slider').stop().animate({
            'top': top
        });
            
        // Animate main content based on clicked step
        var position = $('#' + step).height() * (step - 1);
        $('.content-inner').stop().animate({
            scrollTop: position
        }, 1000, 'swing');
        
        // Move Dynamic-Content to current step
        $("#dynamic-content").fadeOut(0).appendTo("#" + step).fadeIn(100);

        // Request JSON data
        $.getJSON("../baby-steps.json", function (data) {
            var items = [];
            $.each(data.friends, function (key, val) {
                if (step === val.babyStep) {
                    items.push(val);
                }
            });
            items.sort(compare);
            var names = '';
            var i = 0;
            switch (items.length) {
                case 0:
                    $('#dynamic-content .friends-links').empty();
                    $('#dynamic-content .friends-text').empty();
                    break;
                case 1:
                    $("#dynamic-content .friends-links").html(items[0].firstName + ' ' + items[0].lastName);
                    $("#dynamic-content .friends-text").html(' is also in Baby Step ' + step);
                    break;
                case 2:
                    for (i = 0; i < items.length; i++) {
                        names = names.concat(items[i].firstName + ' ' + items[i].lastName);
                        if (i !== items.length - 1) {
                            names = names.concat(' and ');
                        }
                    }
                    $("#dynamic-content .friends-links").html(names);
                    $("#dynamic-content .friends-text").html(' are also in Baby Step ' + step);
                    break;
                case 3:
                    for (i = 0; i < 2; i++) {
                        names = names.concat(items[i].firstName + ' ' + items[i].lastName);
                        names = names.concat(', ');
                    }
                    $("#dynamic-content .friends-links").html(names);
                    $("#dynamic-content .friends-text").html(' and 1 other friend are also in Baby Step ' + step);
                    break;
                default:
                    for (i = 0; i < 2; i++) {
                        names = names.concat(items[i].firstName + ' ' + items[i].lastName);
                        names = names.concat(', ');
                    }
                    $("#dynamic-content .friends-links").html(names);
                    $("#dynamic-content .friends-text").html(' and 2 other friends are also in Baby Step ' + step);
            }
        });
    });

    // First time, start at step 1
    setTimeout(function () {
        $('.navigation ul a').first().click();
    }, 100);

});

function compare(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    } else {
        return 0;
    }
}