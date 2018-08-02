//var $ = require("cheerio");

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


    $(document).on("click", "#babystep", function (friends) {

        // Do not reload page   
        event.preventDefault();

        // find friends on same step
        const stepNumber = $("data-stepNumber");

        const stepFriends = friends.filter(friend => friend.babystep == stepNumber);

        console.log(stepFriends);
    });

});