const friendList = {
    "friends": [
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
        { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
        { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
        { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
        { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
        { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
        { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
        { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
        { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
        { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
        { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
        { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
        { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
        { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
        { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
        { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
    ]
};

$('.baby-step-1').click(() => {
    moveActive('.baby-step-1');
    slideActiveBox(0);
    switchDesc('.baby-step-1-body');
    getFriendsOnStep(1);
})
$('.baby-step-2').click(() => {
    moveActive('.baby-step-2');
    slideActiveBox(1);
    switchDesc('.baby-step-2-body');
    getFriendsOnStep(2);
})
$('.baby-step-3').click(() => {
    moveActive('.baby-step-3');
    slideActiveBox(2);
    switchDesc('.baby-step-3-body');
    getFriendsOnStep(3);
})
$('.baby-step-4').click(() => {
    moveActive('.baby-step-4');
    slideActiveBox(3);
    switchDesc('.baby-step-4-body');
    getFriendsOnStep(4);
})
$('.baby-step-5').click(() => {
    moveActive('.baby-step-5');
    slideActiveBox(4);
    switchDesc('.baby-step-5-body');
    getFriendsOnStep(5);
})
$('.baby-step-6').click(() => {
    moveActive('.baby-step-6');
    slideActiveBox(5);
    switchDesc('.baby-step-6-body');
    getFriendsOnStep(6);
})
$('.baby-step-7').click(() => {
    moveActive('.baby-step-7');
    slideActiveBox(6);
    switchDesc('.baby-step-7-body');
    getFriendsOnStep(7);
})

const moveActive = function(newActiveStep) {
    $('.active .icon-blue').hide()
    $('.active .icon-gray').show()
    $('.active').removeClass('active');

    $(newActiveStep).addClass('active');
    $('.active .icon-gray').hide()
    $('.active .icon-blue').show()
}

const slideActiveBox = function(boxNumber) {
    const topValue = boxNumber * 75 + boxNumber + 1;
    $('.active-box').css("top", topValue + 'px');
}

const switchDesc = function(babyStep){
    $('.active-detail').fadeOut("slow", function(){
        $('.active-detail').removeClass('active-detail');
        
        $(babyStep).addClass('active-detail');
        $(babyStep).fadeIn("slow");    
    });
}

const getFriendsOnStep = function(babyStep){
    $('.friends span').remove();
    friendsOnStep = 0;
    more = 0;
    friendList.friends.forEach((friend) => {
        if(friend.babyStep === babyStep){
            friendsOnStep++;
            if (friendsOnStep < 3) {
                if (friendsOnStep > 1){
                    $('.friends').append(
                        "<span class='friend-name'>" + ', ' + friend.firstName + " " + friend.lastName + "</span>"
                    );
                } else {
                    $('.friends').append(
                        "<span class='friend-name'>" + friend.firstName + " " + friend.lastName + "</span>"
                    );
                }
                
            } else {
                more++;
            }
        }
    });
    if(more !== 0){
        if(more === 1){
            $('.friends').append(
                "<span> and " + more + " more friend</span>"
            ); 
        } else{
            $('.friends').append(
                "<span> and " + more + " more friends</span>"
            ); 
        }
        
    }
}