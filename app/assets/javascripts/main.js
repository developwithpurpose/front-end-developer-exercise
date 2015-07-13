// actions when user clicks navigation buttons
$('.navLink').on('click', function (e) {
    // switch selected navigation element
    $('.navLink.selected').removeClass('selected');
    $(this).addClass('selected');
    // slide out old step and once the animation finishes
    $('.babyStep.selected').removeClass('fadeInRight');
    $('.babyStep.selected').addClass('fadeOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('selected fadeOutLeft');
        }
    );
    // slide in new step based on navigation item clicked
    if ($(this).hasClass('step1')) {
        $('.babyStep.step1').addClass('selected fadeInRight');
    }
    else if ($(this).hasClass('step2')) {
        $('.babyStep.step2').addClass('selected fadeInRight');
    }
    else if ($(this).hasClass('step3')) {
        $('.babyStep.step3').addClass('selected fadeInRight');
    }
    else if ($(this).hasClass('step4')) {
        $('.babyStep.step4').addClass('selected fadeInRight');
    }
    else if ($(this).hasClass('step5')) {
        $('.babyStep.step5').addClass('selected fadeInRight');
    }
    else if ($(this).hasClass('step6')) {
        $('.babyStep.step6').addClass('selected fadeInRight');
    }
    else if ($(this).hasClass('step7')) {
        $('.babyStep.step7').addClass('selected fadeInRight');
    }
    e.preventDefault();
});

// collect JSON data and store in array of objects
$.getJSON('/app/assets/javascripts/baby-steps.json', function (data) {

    // reorder full list to be alphabetical by last name
    data.friends.sort(function (a, b) {
        return compareStrings(a.lastName, b.lastName);
    })

    // loop through and generate output for each step
    for (var step = 1; step <= 7; step++) {

        // create and populate new array to hold only friends in this step
        friendsInStep = new Array();
        for (var i in data.friends) {
            if (data.friends[i].babyStep.toString() == step.toString()) {
                friendsInStep.push(data.friends[i]);
            }
        }

        // variable to start building output
        var output = "";
        // varable to determine maximum names to attempt to pull
        var maxNames;
        if (friendsInStep.length > 1) {
            // only show first 2 names in the list
            maxNames = 2;
        }
        else {
            // or if 2 or less friends, show all
            maxNames = friendsInStep.length;
        }
        // show names of friends
        for (var i = 0; i < maxNames; i++) {
            output += "<a href='#'>" + friendsInStep[i].firstName + " " + friendsInStep[i].lastName + "</a>";
            // formatting for appropriate grammar
            if (friendsInStep.length == 2 && i == 0) {
                output += " and ";
            }
            else if (friendsInStep.length > 2) {
                output += ", ";
            }
        }
        // add appropriate suffix to friends names
        if (friendsInStep.length == 1) {
            output += " is also in Baby Step " + step
        }
        else if (friendsInStep.length == 2) {
            output += " are also in Baby Step " + step
        }
        else if (friendsInStep.length == 3) {
            output += " and " + (friendsInStep.length - 2) + " other friend are also in Baby Step " + step
        }
        else if (friendsInStep.length > 3) {
            output += " and " + (friendsInStep.length - 2) + " other friends are also in Baby Step " + step
        }
        // find placeholder by name
        var placeholderID = "step" + step + "Friends";
        // output the results to the appropriate placeholder
        document.getElementById(placeholderID).innerHTML = output;
    }
});

// function to use to sort alphabetically (case-insensitive)
function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}