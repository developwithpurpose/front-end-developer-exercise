$(function() {

    // hide all of the articles (baby steps) initally
    $('article').hide();

    // Disable the anchor tags since we will use JavaScript
    $('nav ul li a').on('click', function (e) {
        e.preventDefault();
    });

    // Set the click event for navigation
    $('nav ul li').click(navigateBS);

    //Pull the friend in via ajax, filter, and load them into the UI
    $.get("baby-steps.json", getFriends);

    //select the first article when the page loads
    $('#bs1-link').trigger('click');

});

// Handles the babystep navigation
function navigateBS (e) {

    // Hide the icon so that it doesn't 'jitter'
    $('.bs-icon-primary').animate({ opacity: 0 }, 50);

    // Change classes and hide icons when the nav changes
    $('nav ul li').removeClass("selected");
    $(e.currentTarget).toggleClass("selected");
    $('.bs-icon-secondary-sm').show();
    $('.bs-icon-primary-sm').hide();
    $(this).find('.bs-icon-secondary-sm').hide();
    $(this).find('.bs-icon-primary-sm').show();

    // Change the babystep article displayed
    var linkID = '#' + $(e.currentTarget).attr('id');
    var articleID = $(e.currentTarget).attr('id').replace("link", "article");
    $('article').slideUp(1000);
    $('#'+articleID).slideDown(1000);

    // Move the active nav background
    $('#background').animate({
        top: $(linkID).offset().top - 336
    }, 1000, function() {
        $('.bs-icon-primary').animate({ opacity: 1 });
    });
}

// Makes the AJAX call to get the friend data and loads them into the UI
function getFriends(data) {

    // Loop through each baby step and filter
    for (i = 1; i <= 7; i++) {

        var filteredFriends = $.grep(data.friends, function(n) {
            return n.babyStep == i;
        });

        $('#bs' + i + '-article p.friends').html(getFriendMarkup(i, filteredFriends));
    }
}

// Builds the string used to display the friend tag
function getFriendMarkup(step, friendsInStep) {

    var names = ""
    var numFriends = friendsInStep.length;

    for (c = 0; c< numFriends; c++) {
        if(c < 2) {
            names = names + "<span class='name'>" + friendsInStep[c].firstName + " " + friendsInStep[c].lastName + "</span>";
        }

        if (c == 0 || c == 1) {
            //names += " ";
            if (numFriends == 2 && c== 0) {
                names += " and ";
            }
        }
        if (numFriends > 2 && c== 0) {
            names += ", ";
        }
    }

    // Set the correct verbiage
    if (numFriends > 0) {
        var isAre = " are";
        var addlFriends = "";
        var pluralFriends = "s";

        if(numFriends == 3) {
            pluralFriends = ""
        }

        if (numFriends == 1) {
            isAre = " is";
            pluralFriends = ""
        }
        else if (numFriends > 2) {
            addlFriends = " and " + (numFriends - 2) + " other friend" + pluralFriends + "  ";
        }

        names += addlFriends + isAre + " also in Baby Step " + step;
        return names;
    }
}
