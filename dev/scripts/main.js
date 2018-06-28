'use strict';

var getData = function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'baby-steps.json',
        'dataType': 'json',
        'success': function (data) {
            json = data.friends;
        }
    });
    return json;
}


function filterFriends(step, id) {
    var friendsInit = getData();
    var friendsSum = friendsInit.length;
    var friends = $.grep(friendsInit, function (f, i) {
        return f.babyStep === step;
    });
    $('#friends').remove();
    $(id).append('<div id="friends"></div>');
    var otherFriends = function(friends){
        return friends - 2
    }
    if(friends.length === 0){
        //do nothing
    }
    if(friends.length === 1){
        $('#friends').html('<a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a> is also on Baby Step ' + step + '.')
    }
    if(friends.length === 2){
        $('#friends').html('<a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a> and <a href="#">' + friends[1].firstName + ' ' + friends[1].lastName+ '</a> are also on Baby Step ' + step + '.')
    }
    if(friends.length === 3){
        $('#friends').html('<a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>, <a href="#">' + friends[1].firstName + ' ' + friends[1].lastName + '</a> and 1 other friend are also on Baby Step ' + step + '.')
    }
    if(friends.length >= 4){
        $('#friends').html('<a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>, <a href="#">' + friends[1].firstName + ' ' + friends[1].lastName + '</a>, and ' + otherFriends(friends.length ) + ' other friends are also on Baby Step ' + step + '.')
     }
}


$('ul').append('<div id="active-bar"></div>');

var top = $('ul li:first-child a').parent().position().top;

$('#active-bar').css({ 'top': top });

$('ul li a').click(function (z) {
    z.preventDefault();
    var stepInteger = parseInt($(this).attr('data-step'));
    var top = $(this).parent().position().top;
    var scroller = $(this).attr('href');
    $('ul li a').removeClass('active');
    $(this).addClass('active');
    $('#active-bar').stop().animate({
        'top': top
    });
    $('#step-slide').animate({
        scrollTop: $(scroller).parent().scrollTop() + $(scroller).offset().top - $(scroller).parent().offset().top
    }, {
            duration: 1000,
            specialEasing: {
                width: 'linear',
                height: 'easeOutBounce'
            },
            complete: function (e) {
                console.log('***');
                filterFriends(stepInteger, scroller);
            }
        });
});
