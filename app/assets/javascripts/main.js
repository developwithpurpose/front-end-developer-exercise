//Load JSON from 'baby-steps.json'

$(function () {
    console.log("ready!");
    let currentStep = 1;
    console.log(currentStep);

    //Determine which radio button is checked:
    $(document).ready(function () {
        $('input:radio[name=radio-set]').change(function () {
            currentStep = this.value;
            if (this.value == '1' | 1) {
                console.log(currentStep);
                alert("Allot Thai Gayo Bhai");
            }
            else if (this.value == '2' | 2) {
                alert("Transfer Thai Gayo");
                //console.log(this.value);
            }
            //selectedValue = $("input[name=radio-set]:checked").val();

            console.log(currentStep);
            // do stuff with currentStep
        });
    });


    /*
    $("input[type='radio']").on('change', function () {
        var selectedValue = $("input[name=radio-set]:checked").val();
        console.log(selectedValue);
        if (selectedValue) {
            alert("Hello, your favorite programming language= " + selectedValue);
        }
        console.log(selectedValue);
    });
    */

    //const currentStep = $('input[name=radio-set]:checked').val();
    //console.log(currentStep);

    //let currentCheckedBabyStep;

    /*
        return (document.getElementById('tab-1').checked) ? 1 :
            (document.getElementById('tab-2').checked) ? 2 :
                (document.getElementById('tab-3').checked) ? 3 :
                    (document.getElementById('tab-4').checked) ? 4 :
                        (document.getElementById('tab-5').checked) ? 5 :
                            (document.getElementById('tab-6').checked) ? 6 :
                                (document.getElementById('tab-7').checked) ? 7 :
    
                                    null;
    
        console.log(currentCheckedBabyStep);
        */


    $.getJSON('./assets/javascripts/baby-steps.json', function (data) {
        console.log(data);
        //console.log(data.friends[i])





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
