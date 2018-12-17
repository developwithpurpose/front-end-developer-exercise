// $(".button").click( function() {
//     $.getJSON("baby-steps.json", function(obj) {
//         $.each(obj, function(key, value) {
//             $(".babySteps").append("<p>" + value.firstName + "</p>");
//         });
//     });
// });
"use strict";

let myRequest = new Request("./baby-steps.json");

fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(things) {
        console.log(things.friends);
    });
