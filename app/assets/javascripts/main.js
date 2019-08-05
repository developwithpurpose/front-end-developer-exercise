//Load JSON from 'baby-steps.json'

$(function () {
    console.log("ready!");

    $.getJSON('./assets/javascripts/baby-steps.json', function (data) {
        console.log(data);
        console.log(data.friends[0])

            (Object.keys(data.friends) = 1 ? )

        $("span.friends").append(`<p>${data.friends.map(x => JSON.stringify(x))}</p>`);
    });
});















/*
document.querySelector(".friends").onload = () => {
    let displayResources = document.querySelector(".friends");
    displayResources.textContent =
        "Loading data from JSON source...";
    fetch("./assets/javascripts/baby-steps.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);

            let output =
                "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
            for (let i in result) {
                output +=
                    "<tr><td>" +
                    result[i].name +
                    "</td><td>" +
                    result[i].provider +
                    "</td><td>" +
                    result[i].url +
                    "</td></tr>";
            }
            output += "</tbody></table>";
            friends.innerHTML = output;
        })
        .catch((error) => {
            console.log("reset client error-------", error)
        });
};
*/
//
// Perform other work here ...

// Set another completion function for the request above
//jqxhr;

//Write to html
