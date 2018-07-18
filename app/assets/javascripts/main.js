var friendNameFromObject = function(object) {
    return "<a href=#>" + object.firstName + " " + object.lastName + "</a>";
}

var friendTextFromList = function(list, babyStepNumber) {
    if (!list || list.length === 0) return false;
    var friendNameText = friendNameFromObject(list[0]);

    var firstAndText = list.length > 2 ? ", " : " and ";

    if (list.length > 1) {
        friendNameText += firstAndText + friendNameFromObject(list[1]);
    }
    var additionalCount = list.length - 2;
    if (additionalCount >= 1) {
        friendNameText += ", and " + additionalCount + " other friend"
    }
    if (additionalCount > 1) {
        friendNameText += "s";
    }

    if (list.length > 1) {
        friendNameText += " are also in Baby Step " + babyStepNumber;
    } else {
        friendNameText += " is also in Baby Step " + babyStepNumber;
    }
    return friendNameText;
};

$(document).ready(function() {

    $('ol').removeClass('nojs');
    $('ol li#babystep1').addClass('active');

    $( "ol li > a" ).click(function( event ) {
        $("ol li").removeClass("active");
        $( this ).parent().addClass("active");

        event.preventDefault();
    });

    $.get("/baby-steps.json", function(text) {
        var friends = text.friends;
        var friendsByStep = new Array(8);
        for (var i=0; i<friends.length;i++) {
            var friend = friends[i];
            if (!friendsByStep[friend.babyStep]) friendsByStep[friend.babyStep] = [];
            friendsByStep[friend.babyStep].push(friend);
        }
        
        for (var babyStepNumber=1;babyStepNumber<8;babyStepNumber++) {
            var friendsText = friendTextFromList(friendsByStep[babyStepNumber], babyStepNumber);
            if (friendsText !== false)
            $( "#babystep" +  babyStepNumber + " section").append( "<p class='friend-text'>" + friendsText + "!</p>"  );
        }
    });
});
