"use strict";

console.log("Why, Hello!");

$(document).ready(function(){

    $.ajax({
        url: "../app/baby-steps.json",
        type: "get",
        dataType: "JSON",
        success: function(data) {
            data.friends.sort(function(a, b){
                var name1 = a.lastName.toLowerCase();
                var name2 = b.lastName.toLowerCase();
                return (name1 < name2) ? -1: 1;
            });

            $(".steps").click(function(e){
                var targetID = e.currentTarget.id.replace("step-", "");
                DisplayFriends(data.friends, targetID);
            });
        }
    });
});


function DisplayFriends(data, targetID){
    var dataArray = [];
    var friendText;
    var friend1;
    var friend2;
    var otherFriends;

    $.each(data, function(index, value){
        if(value.babyStep == targetID)
        {
            dataArray.push({FN:value.firstName, LN:value.lastName});
        }
    });

    if(dataArray.length >= 1){
        friend1 = dataArray[0].FN + " " + dataArray[0].LN;
    }

    if(dataArray.length >= 2){
        friend2 = dataArray[1].FN + " " + dataArray[1].LN;
    }

    switch(dataArray.length) {

        case 0:
            break;

        case 1:
            friendText = "<a style='color:#6fbee7'>" + friend1 +  "</a> is also in Baby Step " + targetID;
            break;

        case 2:
            friendText = "<a style='color:#6fbee7'>" + friend1 + "</a>, <a style='color:#6fbee7'>" + friend2 + "</a> are also in Baby Step " + targetID;
            break;

        case 3:
            friendText = "<a style='color:#6fbee7'>" + friend1 + "</a>, <a style='color:#6fbee7'>" + friend2 + " <a/> and 1 other friend are also in Baby Step " + targetID;
            break;

        default:
            otherFriends = dataArray.length -2;
            friendText = "<a style='color:#6fbee7'>" + friend1 + "</a>,<a style='color:#6fbee7'> " + friend2 + "<a/> and " + otherFriends + " other friends are also in Baby Step " + targetID;
    }

    $("#friends-" + targetID).html(friendText);
}
