

$(document).ready( function() {
    
    // Render
    $.ajax({
        type: 'GET',
        url: "../baby-steps.json",
        dataType: 'json',
    })
    .success (function(data) {
        //console.log('Friends', data);
        var friends = data.friends;
        
        var sorted = {};
        for (friend in friends) {
            person = friends[friend]
            //console.log('Friends', person)
            $('#babystep-' + person["babyStep"]).append("<div><span>" + person["firstName"] + ' ' +  person["lastName"] + "</span></div>");
        }
        
    });
    
    
    // Transition Functions 
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('#tabTrans li').click( function() {
        $(this).addClass('animated slideInDown').one(animationEnd, function() {
            $(this).removeClass('animated slideInDown')
        });
        $('div.active').addClass('animated slideOutUp').one(animationEnd, function() {
            $('div.active').removeClass('animated slideOutUp');
        });
    });
});
    