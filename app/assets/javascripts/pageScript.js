$(document).ready(function () {
    hideElements();
    buttons();
});

function hideElements() {
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#step5").hide();
    $("#step6").hide();
    $("#step7").hide();
    $("#Dynamic").hide();
}

function buttons() {
    $("#bs1").click(function () {
        hideElements();
        $("#step1").show();
        dynamContent(1);
    });
    $("#bs2").click(function () {
        hideElements();
        $("#step2").show();
        dynamContent(2);
    });
    $("#bs3").click(function () {
        hideElements();
        $("#step3").show();
        dynamContent(3);
    });
    $("#bs4").click(function () {
        hideElements();
        $("#step4").show();
        dynamContent(4);
    });
    $("#bs5").click(function () {
        hideElements();
        $("#step5").show();
        dynamContent(5);
    });
    $("#bs6").click(function () {
        hideElements();
        $("#step6").show();
        dynamContent(6);
    });
    $("#bs7").click(function () {
        hideElements();
        $("#step7").show();
        dynamContent(7);
    });
}

function dynamContent(num) {
    var data = null;
    var counter = 0;
    var insert = null;
    var method = "Get";
    var url = "baby-steps.json";
    var async = true;

    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            var friends = data.friends;
            var length = data.friends.length;
            var firstName;
            var lastName;
            var babyStep;
            var fName;
            var lName;

            for (let i = 0; i < length; i++) {
                if (data.friends[i].babyStep == num) {
                    counter++;
                }
            }

            if (counter == 1) {
                for (let i = 0; i < length; i++) {
                    if (data.friends[i].babyStep == num) {
                        firstName = friends[i].firstName;
                        lastName = friends[i].lastName;
                        babyStep = friends[i].babyStep;
                        insert = (firstName + " " + lastName + " is also on baby step " + babyStep);
                        $("#Dynamic").html(insert);
                        $("#Dynamic").show();
                    }
                }
            }
            else if (counter == 2) {
                for (let i = 0; i < length; i++) {
                    if (data.friends[i].babyStep == num) {
                        firstName = friends[i].firstName;
                        lastName = friends[i].lastName;
                        babyStep = friends[i].babyStep;
                        fName = friends[i + 1].firstName;
                        lName = friends[i + 1].lastName;
                        insert = (firstName + " " + lastName + " and " + fName + " " + lName + " is also on baby step " + babyStep);
                        break;
                    }
                }
                $("#Dynamic").html(insert);
                $("#Dynamic").show();
            }
            else if (counter >= 3) {
                for (let i = 0; i < length; i++) {
                    if (data.friends[i].babyStep == num) {
                        firstName = friends[i].firstName;
                        lastName = friends[i].lastName;
                        babyStep = friends[i].babyStep;
                        fName = friends[i + 1].firstName;
                        lName = friends[i + 1].lastName;
                        insert = (firstName + " " + lastName + " and " + fName + " " + lName + " and " + (counter - 2) + " other(s) is also on baby step " + babyStep);
                        break;
                    }
                }
                $("#Dynamic").html(insert);
                $("#Dynamic").show();
            }
        }
    }
    xttp.open(method, url, async);
    xttp.send();
}
