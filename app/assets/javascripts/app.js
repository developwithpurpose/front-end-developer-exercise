
$(document).ready(function () {

    // get friend data from json file
    var data = require("../../baby-steps.json");
    var friends = data.friends;

    // sort data alpha ascend
    function compare(a, b) {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;
        return 0;
    }

    friends.sort(compare);
    console.log(friends);


    $(document).on("click", ".babystep", function (friends) {

        // Do not reload page   
        event.preventDefault();

        // find friends on same step
        const stepNumber = $("data-stepNumber");

        const stepFriends = friends.filter(friend => friend.babystep == stepNumber);
        //console.log(stepFriends);
        const numoffriends=stepFriends.length;
        let friend1 = [stepFriends[0].firstName, stepFriends[0].lastName];
        let friend2 = [stepFriends[1].firstName, stepFriends[1].lastName];

        
        friend1.join(" ");
        friend2.join(" ");
        //Customize the message
        let msg = ""
        if (numoffriends==0) { 
            return msg="<p> </p>";
        }
        else if (numoffriends==1) { 
            return msg="<p>" +friend1 +" is also in Baby Step 2</p>";
        }
        else if (numoffriends==2) { 
            return msg="<p>" +friend1+" and " + friend2 + " are also in Baby Step 3</p>";
        }
        else if (numoffriends==3) { 
            return msg="<p>" +friend1+", " + friend2 + ", and 1 other are also in Baby Step 4</p>";
        }
        else { 
            return msg="<p>" +friend1+", " + friend2 + ", and 2 others are also in Baby Step 5</p>";
        }
        $("#friends").html(msg);
    });

});