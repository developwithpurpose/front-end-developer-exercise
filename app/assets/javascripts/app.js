var getJSON = function () {
    ajax_get('baby-steps.json');
}

var activeStepIdx = 0;
var activeStep = 1;
var stepFriends = [];
var friendsInStep = "";
var friendsNames = "";
document.getElementById("bs1").focus();

function changeStepInfo(bs) {
    document.getElementById("indStepImage").src = stepData[bs].imageUrl;
    document.getElementById("stepName").innerHTML = stepData[bs].name;
    document.getElementById("stepheader").innerHTML = stepData[bs].header;
    var copy = document.querySelector('#stepCopy');
    copy.style.opacity = 0;
    activeStepIdx = bs;
    window.setTimeout(fadein, 450);
}
var fadein = function () {
    document.getElementById("stepCopy").innerHTML = stepData[activeStepIdx].copy;
    var copy = document.querySelector('#stepCopy');
    copy.style.opacity = 1;
    checkFriendsForStep();
}

var checkFriendsForStep = function () {
    activeStep = activeStepIdx + 1;
    stepFriends = [];
    friends.friends.find(function (arg) {
        //console.log(arg);
        if (arg.babyStep === activeStep) {
            console.log(arg);
            stepFriends.push(arg);
        }
    });
    if (stepFriends.length === 0) {
        console.log('No friends in this step!');
    } else if (stepFriends.length === 1) {
        friendsNames = stepFriends[0].firstName + ' ' + stepFriends[0].lastName;
        friendsInStep = ' is also in this step.';
    } else if (stepFriends.length === 2) {
        friendsNames = stepFriends[0].firstName + ' ' + stepFriends[0].lastName + '<span style="color:#65686f;"> and </span>' +stepFriends[1].firstName + ' ' + stepFriends[1].lastName;
        friendsInStep = ' are also in this step.';
    } else if (stepFriends.length >= 3){
        var more = stepFriends.length - 2;
        friendsNames = stepFriends[0].firstName + ' ' + stepFriends[0].lastName + ', ' +stepFriends[1].firstName + ' ' + stepFriends[1].lastName;
        friendsInStep = ' and ' + more + ' Friends are in this step';
        console.log('greater!');
    }
    document.getElementById("friendsNames").innerHTML = friendsNames;
    document.getElementById("friendsInStep").innerHTML = friendsInStep;
}
