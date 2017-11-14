"use strict";

console.log('its hooked');

var defaultBabyStep = '1';
var friends;


$.ajax({
    url: "../baby-steps.json",
    method: "GET",
    success: function(data){
        friends = data.friends;
        displayFriends(friends);
    }
});




var makeActive = function () {
    var clearNav = $('img', this)[0];
    var fillNav = $('img', this)[1];
    var currentTab = $(this);
    var babyStep = $('a', this).attr('datatype');
    var stepText = $('p', this);
    var currentActiveClearIcon = $('img', '.active')[0];
    var currentActiveFillIcon = $('img', '.active')[1];





    $('article').addClass('hidden')
    $(currentActiveClearIcon).removeClass('hidden');
    $(currentActiveFillIcon).addClass('hidden');
    $('.active').addClass('inactive').removeClass('active');

    $(currentTab).addClass('active');
    $(stepText).addClass('active');
    $(currentTab).attr('aria-selected', 'true');
    $(`#${babyStep}`).toggleClass('hidden');
    $(clearNav).addClass('active');
    $(clearNav).addClass('hidden');
    $(fillNav).removeClass('hidden');
    defaultBabyStep = babyStep;
    displayFriends();


    // console.log('clearIcon', clearNav);
    // console.log('this', currentTab);
    // console.log('fillIcon', fillNav);
    console.log('babyStep', defaultBabyStep);
    // console.log('stepText', stepText);
    // console.log('CAFI', currentActiveFillIcon);
    console.log('CACI', currentActiveClearIcon);

};



$(".baby-step-nav-li").click(makeActive);


var displayFriends = function () {
   var stepFriends = [];
   // console.log('friends inside of displayFriends', friends);
   friends.forEach(function(friend) {
       if(friend.babyStep.toString() === defaultBabyStep){
           stepFriends.push(friend)
       }
        // console.log('friend', friend);
        // console.log('friendBabyStep', friend.babyStep);
        // console.log('stepFriends', stepFriends);
   });

    var babyStepText;

    switch(stepFriends.length){

        case 0:
            babyStepText = '';
            break;
        case 1:
            babyStepText = `<p class='dynamic-text' <a href="#" class="friend-name">${stepFriends[0].firstName} ${stepFriends[0].lastName}</a> is also on Baby Step ${defaultBabyStep} </p>`;
            break;
        case 2:
            babyStepText = `<p class='dynamic-text' <a href="#" class="friend-name">${stepFriends[0].firstName} ${stepFriends[0].lastName} and ${stepFriends[1].firstName} ${stepFriends[1].lastName}</a> are also on Baby Step ${defaultBabyStep}</p>`;
            break;
        case 3:
            babyStepText = `<p class='dynamic-text' <a href="#" class="friend-name">${stepFriends[0].firstName} ${stepFriends[0].lastName}, ${stepFriends[1].firstName} ${stepFriends[1].lastName}, </a> and ${stepFriends.length -2} other friend is also on Baby Step ${defaultBabyStep}</p>`;

        case 4:
            babyStepText = `<p class='dynamic-text' <a href="#" class="friend-name">${stepFriends[0].firstName} ${stepFriends[0].lastName}, ${stepFriends[1].firstName} ${stepFriends[1].lastName}, </a> and ${stepFriends.length -2} other friends are also on Baby Step ${defaultBabyStep}</p>`;

    }
    $('.step-friends').html(babyStepText)

};




