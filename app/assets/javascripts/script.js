"use strict";

var url = "baby-steps.json";

fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    var names = data.friends;

    return names.map(function (name) {
        console.log("Name: " + name.firstName + " " + name.lastName + " - Baby Step: " + name.babyStep);
    });
});
