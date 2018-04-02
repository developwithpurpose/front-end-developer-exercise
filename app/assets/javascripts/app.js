"use strict";

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/baby-steps.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

loadJSON(function(response) {

let jsonresponse = JSON.parse(response);

function lookUpFriend() {
    const friendsArray = [];
    let counter = 0;

    for (let j = 0; j < jsonresponse[0].friends.length; j++) {
        
        if (jsonresponse[0].friends[j].babyStep == "3") {
                friendsArray.push(" " + jsonresponse[0].friends[j].firstName + " " + jsonresponse[0].friends[j].lastName);
                    counter += 1;   
        }
        else {
            continue;
        }
    } 
    console.log(friendsArray[0].toString() + " and" + friendsArray[1].toString() + " are also on Baby Step 3");
}
    lookUpFriend();
 });
