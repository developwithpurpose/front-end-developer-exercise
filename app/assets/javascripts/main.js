"use strict";

console.log('its hooked');


$.ajax({
    url: '../../baby-steps.json',
    success: (data) => {
         let friends = data.friends;
        console.log('friends', friends);
        displayFriends(friends)
    }
});




const makeActive =  function () {
    let clearNav = $('img', this)[0];
    let fillNav = $('img', this)[1];
    let currentTab = $(this);
    let babyStep = $('a', this).attr('datatype');
    let stepText = $('p', this);
    let currentActiveClearIcon = $('img', '.active')[0];
    let currentActiveFillIcon = $('img', '.active')[1]



    $(currentActiveClearIcon).removeClass('hidden');
    $(currentActiveFillIcon).addClass('hidden');
    $('.active').addClass('inactive').removeClass('active');
    currentTab.addClass('active');
    stepText.addClass('active');
    currentTab.attr('aria-selected', 'true');
    clearNav.addClass('hidden');
    fillNav.removeClass('hidden');

    displayFriends();


    console.log('this', currentTab);
    console.log('fillIcon', fillNav);
    console.log('clearIcon', clearNav);
    console.log('babyStep', babyStep);
    console.log('stepText', stepText);
    console.log('CACI', currentActiveClearIcon);
    console.log('CAFI', currentActiveFillIcon);

};


$(".baby-step-nav-li").click(makeActive);


var displayFriends = function (friends) {
   let stepFriends = [];
   friends.forEach((friend) => {
       if (friend.babyStep.to)
       console.log('friend', friend);
   })

}


