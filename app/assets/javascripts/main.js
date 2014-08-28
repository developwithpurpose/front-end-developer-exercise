
$.stepAnimate = $.stepAnimate || {};

$.stepAnimate = function() {
    var stepHeight = -500;
    var navHeight = 61;

    init = function() {
        $('.sideMenu li').click(function () {
            var index = this.attributes['data-index'].value;
            moveToStep(this, index);
        });
    },

    moveToStep = function(obj, index) {
        // Set selected step.
        for (var i = 0; i < 7; i++) {
            var navItem = $('.sideMenu li[data-index="' + i + '"]');
            var step = 'step' + (Number(i) + 1);
            var step_sel = 'step' + (Number(i) + 1) + '_sel';
            if (i == index) {
                if (navItem.is('.' + step)) {
                    $('.sideMenu li[data-index="' + i + '"]').addClass(step_sel);
                    $('.sideMenu li[data-index="' + i + '"]').removeClass(step);
                }
            }
            else {
                if (navItem.is('.' + step_sel)) {
                    $('.sideMenu li[data-index="' + i + '"]').removeClass(step_sel);
                    $('.sideMenu li[data-index="' + i + '"]').addClass(step);
                }
            }
        }
        
        // Move to step description
        $('.allSteps').animate({ top: (stepHeight * index).toString() }, 500);

        // Move side nav background
        $('.selected').animate({ top: (navHeight * index).toString() }, 500);
    };
       
    return {
        init: init
    }  
}();

$.loadFriends = $.loadFriends || {};

$.loadFriends = function() {
    var freindList;

    init = function() {
        //Load the json object
        $.getJSON("/app/assets/javascripts/baby-steps.json", function(data) {
            if (data != null) {
                
                //Sort by last name ascending.
                freindList = data['friends'].sort(sortByLastName);

                //Set friend messages
                for (var i = 1; i <= 7; i++) {
                    loadFriendsMsg(i);
                }
            }
        });
    },

    sortByLastName = function(a,b) {
            var x = a['lastName'];
            var y = b['lastName'];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    },

    loadFriendsMsg = function(stepNo) {
        var friendCount = 0;
        var friendNames = '';
        //Step one.
        $.each(freindList, function(key, val) {
            if (Number(val.babyStep) === stepNo) {
                //Get freinds for steps.
                if (friendCount < 2) {
                    friendNames += ((friendCount >= 1) ?  ', ' : '');
                    friendNames += val.firstName + ' ' + val.lastName;
                }
                friendCount++;
            }
        });

        //Set friends names        
        $('#friendsNames' + stepNo).html(friendNames);

        //Set message
        //if 0 friends, then don't show any message
        //if 1 friend, then show "Paul Taylor is also in Baby Step 2"
        //if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
        //if 3 friends, then show "Deborah Lee, Shirley Perez and 1 other friend are also in Baby Step 4"
        //if 4 or more friends, then show "Patricia Allen, Matthew Garcia and 2 other friends are also in Baby Step 5"
        if (friendCount == 0) {
            $('#friendsMsg' + stepNo).html(' ');
        }
        else if (friendCount == 1) {
            $('#friendsMsg' + stepNo).html(' is also in Baby Step ' + stepNo);
        }
        else if (friendCount == 2) {
            $('#friendsMsg' + stepNo).html(' are also in Baby Step ' + stepNo);
        }
        else if (friendCount == 3) {
            $('#friendsMsg' + stepNo).html(', and 1 other friend are also in Baby Step ' + stepNo);
        }
        else if (friendCount > 3) {
            $('#friendsMsg' + stepNo).html(', and ' + (friendCount - 2) + ' other friends are also in Baby Step ' + stepNo);
        }
    };

    return {
        init: init
    }   
}();

(function () {
    var animate = $.stepAnimate;
    animate.init();

    var friends = $.loadFriends;
    friends.init();
}());