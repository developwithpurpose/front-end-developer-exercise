$(document).ready(function() {
    //setup event handlers
    $('#list .list-item').on('click', onListItemClick);

    refreshFriends();
});

function refreshFriends() {
    $.get( "baby-steps.json", function(data) {
        friends = data.friends;
        generateFooterMessages(friends);
    });
}

function generateFooterMessages(friends) {
    for(var i = 1; i <= 7; i++) {
        $('#item-'+ i + '-detail .detail-footer').html(getFooterMessageFor(friends,i));
    }
}

function getFooterMessageFor(friends, step) {
    var relevantFriends = _.filter(friends, {babyStep: step}),
        message = '';

    if (relevantFriends.length > 0) {
        message += '<a>' + 
            relevantFriends[0].firstName +
            ' ' +
            relevantFriends[0].lastName + 
        '</a>';
    }

    if (relevantFriends.length == 2) {
        message += ' and ';
    } else if(relevantFriends.length > 1) {
        message += ' , ';
    }

    if (relevantFriends.length > 1) {
        message += '<a>' + 
            relevantFriends[1].firstName +
            ' ' +
            relevantFriends[1].lastName + 
        '</a>';
    }

    if (relevantFriends.length == 1) {
        message += ' is also in Baby Step ' + step;
    }

    if (relevantFriends.length == 2) {
        message += ' are also in Baby Step ' + step;
    }
    
    if (relevantFriends.length == 3) {
        message += ' and 1 Other Friend are also in Baby Step ' + step;
    }

    if (relevantFriends.length > 3) {
        message += ' and ' + (relevantFriends.length - 2) + ' Other Friends are also in Baby Step ' + step;
    }

    return message;
}

function onListItemClick(event) {
    scrollToItemDetail(event.currentTarget.id + '-detail');
    moveHighlightToItem(event.currentTarget.id);
}

function scrollToItemDetail(id) {
    var detailTop = $('#' + id).position().top,
        $detailWrapper = $('#detail-wrapper'),
        currentScrollTop = $detailWrapper.scrollTop();

    $detailWrapper.stop().animate({
        scrollTop : currentScrollTop + detailTop
    }, 500, 'swing');
}

function moveHighlightToItem(id) {
    var $item = $('#' + id);

    $('.list-item').removeClass('selected');
    $item.addClass('selected');

    var itemTop = $item.position().top,
        $selectedHighlight = $('#selected-highlight');

    $selectedHighlight.stop().animate({
        top : itemTop
    }, 500, 'swing');
}

