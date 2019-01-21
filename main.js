function openStep(evt, babyStep) {
    var i, tabcontent, tablinks, change;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(babyStep).style.display = "block";
    evt.currentTarget.className += " active"
}

/* Attempt at Dynamic Content*/
$("friends").click(function () {
    $.ajax({
        url: "baby-steps.json", success: function (result) {
            $("#friends").html(result);
        }
    });
});

