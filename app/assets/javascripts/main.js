//Load JSON from 'baby-steps.json'
var jqxhr = $.getJSON("http://localhost:8080/assets/javascripts/baby-steps.json", function (data) {
    console.log(data);



})
    .done(function () {
        console.log("second success");



    })

    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("complete");
    });

// Perform other work here ...

// Set another completion function for the request above
jqxhr;

//Write to html
