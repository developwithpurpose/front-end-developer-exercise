

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
            if (sorted[friends[friend].babyStep] == undefined) {
            sorted[friends[friend].babyStep] = [];
            }
            sorted[friends[friend].babyStep].push(friends[friend]);
            //console.log(sorted);
        }
        for (stepIndex in sorted) {
            var text = '';
            step = sorted[stepIndex];
            var babyStep = step[0]['babyStep'];
            var numPeople = step.length; 
            if (numPeople <= 2) {   
                var names = [];
                for (personIndex in step) {
                    names.push(step[personIndex]['firstName'] + " " + step[personIndex]['lastName'] );   
                }
                text = names.join();
                if (numPeople == 1) {
                    text += ' is also in ';
                }
                else {
                    text += ' are also in ';
                }
                //console.log(text, numPeople);
            }
            else {
                var names = [];
                for (i = 0; i < 2; i++) {
                    names.push(step[i]['firstName'] + " " + step[i]['lastName'] );   
                }
                text = names.join( ', ' );
                text = text + ", and " + (numPeople - 2);
                if ((numPeople - 2) == 1) {
                    
                    text += ' Other Friend are also in ';
                }
                else {
                    text += ' Other Friends in also';
                }
                console.log(numPeople)
            }
           $('#babystep-' + babyStep).append("<div class='col-xs-8'><span class='friendsName'>" + text  + " " + "Baby Step " + babyStep + ".</span></div>");
        }
    });
    
    tabTransition();
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function tabTransition() {
    $('#tabTrans li').click( function() {
        $(this).addClass('animated slideInDown').one(animationEnd, function() {
            $(this).removeClass('animated slideInDown')
        });
    });
};
   