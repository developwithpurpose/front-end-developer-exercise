$(document).ready(function () {
    babyStepNavClickHandler();
});

function babyStepNavClickHandler () {
    $('nav.sidebar ul').on('click', function (e) {
        $('nav.sidebar li').removeClass('active');
        $(e.target).addClass('active');

        var babyStepNumber = $(event.target).attr('id');
        var step = document.getElementById("baby-step-" + babyStepNumber + "-article");
        step.scrollIntoView();
    });
}
