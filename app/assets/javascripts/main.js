var buttons = document.querySelectorAll(".buttonsContainer button");
var babySteps = document.querySelectorAll(" .babySteps");
var buttonImage = document.querySelectorAll(".button-image");

function showSteps (step, color) {
    var stepUp = step + 1;

    buttons.forEach (function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
        node.style.fontWeight = "";
    });
    buttons[step].style.backgroundColor = color;
    buttons[step].style.color = "#36abe1";
    buttons[step].style.fontWeight = "600";

    babySteps.forEach (function (node) {
        node.style.display = "none";
    });
    babySteps[step].style.display = "block";

    buttonImage.forEach(function (node) {
         node.style.content= "";
    });
    buttonImage[step].style.content = "url('assets/images/icons/individual/icons_small_bs" + stepUp+ "_blue.png')";
}

showSteps(0,'white');
