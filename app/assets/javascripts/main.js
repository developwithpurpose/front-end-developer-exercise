/*
This was interesting because when I first started I was planning to use Angular and to get overly complex. Then it struck me... this isn't a complex application and to do so to me seemed to be out of line with the exercise.

I know that using Angular and going all-in would showcase my ability but when I look at things, I like to utilize the simplest approach and achieve the end goal in a minimalist kind of way.

Since our line of work ultimately is getting a bug free, well performing UI to the client, I made this my approach on this exercise.

Also, I added in unit test coverage for majority of the work. I'm a big advocate for testing as I think it's necessary especially if working with a large code base.

I look forward to speaking with you and sharing my experience with various frameworks, libraries, JavaScript in general, and constructing web applications/sites using these technologies.
*/

var BabySteps = {};
BabySteps.currentStep = null;
BabySteps.friendContainer = null;
BabySteps.fetching = null;
BabySteps.myFriendsObj = null;
BabySteps.currentFriends = null;
BabySteps.friendsText = null;


BabySteps.init = function () {
	BabySteps.util.attachClickJQ(".navigation a", BabySteps.navHandler);

	this.currentStep = 1; // on load
	this.friendContainer = $(".step-1-content .dynamic-content");
	
	BabySteps.util.fetchFriends()
		.done(BabySteps.successHandler)
		.fail(function (request, status, error) {
			// error handling here
		});
};

BabySteps.navHandler = function (e) {
	var thisTop = $(e.currentTarget).position().top,
		highlighter = $(".highlighter"),
		panelToShow = $(e.currentTarget).attr("href").replace("#", "."),
		contentSlidePosition = $(panelToShow).position().top,
		slideWrapper = $(".slide-wrapper");

	if (document.all && !window.atob)	{
		highlighter.animate({
			top: thisTop+"px"
		}, 800);

		slideWrapper.animate({
    		top: -contentSlidePosition+"px"
    	}, 800);
	}
	else {
		highlighter.css({
			top: thisTop+"px"
    	});

    	slideWrapper.css({
    		top: -contentSlidePosition+"px"
    	});
	}
	

  	$(".navigation li.active").toggleClass("active");
  	
  	$(e.currentTarget).parent().addClass("active");

  	BabySteps.currentStep = parseInt(panelToShow.match(/[0-9]/)[0]); // Step that just got clicked needs friend data loaded.
  	BabySteps.friendContainer = $(panelToShow + " .dynamic-content");

  	BabySteps.util.fetchFriends()
		.done(BabySteps.successHandler)
		.fail(function (request, status, error) {
			// error handling here
		});
};

BabySteps.friendHandler	= function (e) {
	e.preventDefault();
};

BabySteps.successHandler = function (data) {
	BabySteps.myFriendsObj = data.friends;
    BabySteps.myFriendsObj.sort(function (a,b) {
    	return a.babyStep - b.babyStep;
    });

    BabySteps.currentFriends = BabySteps.util.filterFriends(BabySteps.myFriendsObj, BabySteps.currentStep);

    BabySteps.friendsText = BabySteps.util.compileFriends(BabySteps.currentFriends);
    BabySteps.friendContainer.html(BabySteps.friendsText);

    BabySteps.util.attachClickJQ('.dynamic-content a', BabySteps.friendHandler);

    BabySteps.fetching = null;
};

/* Start utility*/
BabySteps.util = {};

BabySteps.util.filterFriends = function (friends, stepNum) { 
	var filtered = [], friend;

	for (var i = 0, len = friends.length; i < len; i++) {
		friend = friends[i];

		if (friend.babyStep === stepNum) {
			filtered.push(friend);
		}
		else {
			if (friend.babyStep > stepNum) {
				break;
			}
			// This assumes the list is sorted by babyStep so we will push the objects to an array 
			// that match (since they'll be first) and then break out of the loop if the babyStep
			// is larger than current step we are viewing to save unneccessary CPU cycles.
		}
	}

	return filtered;
};

BabySteps.util.fetchFriends = function () {
	var rootUrl = window.location.href.split('#')[0],
		endPoint = rootUrl + "assets/javascripts/baby-steps.json";

	if (!BabySteps.fetching) {
		// My assumption here was that this would be fetched as to keep the data "up-to-date" each time.
		// However, I wanted to limit the network calls in case someone gets all click crazy.
		return $.ajax({ url: endPoint, type: "GET", dataType: "json" });
	}
};

BabySteps.util.commaSeparated = function (string, splitBy, joinBy) {
	var result;
	
	result = string.split(splitBy).join(joinBy);

	return result;
};

BabySteps.util.compileFriends = function (friends) {
	var html = "",
		goodEnglish = (friends.length === 1) ? "is" : "are",
		friend, iCanHazManyFriends, remainingFriends;

	// We know that "friends" will never be less than 1, since we check for at least 1 in length.
	if (friends.length) {
		for (var i = 0, len = friends.length; i < len; i++) {
			friend = friends[i];
			if (i < 2 && i !== 0) { // If this is the 2nd name, add "and", otherwise
				html += " and ";
			}
			else { 
				if (i > 1) { // we're higher than 2 names, thus we break out of the loop.
					break;
				}
			}

			html += "<a href=''>" + friend.firstName + " " + friend.lastName + "</a>"; // Add that buddy.
		}
		
		if (friends.length > 2) { // Showing the max 2 friends, comma sep and truncate to count for remaining.
			iCanHazManyFriends = (friends.length > 3) ? "Friends" : "Friend";
			remainingFriends = friends.length - 2; // We show 2, count the rest.

			html = this.commaSeparated(html, " and ", ", ");
			html += ", and " + remainingFriends + " Other " + iCanHazManyFriends;
		}

		html += " " + goodEnglish + " also in Baby Step " + BabySteps.currentStep;
	}

	return html;
};

BabySteps.util.attachClickJQ = function (selector, callback) {
	$(selector).on("click", function (event) {
    	event.preventDefault();

    	callback(event);
  	});
};
/* End utility */

// Doc ready
$(function(){ 
	BabySteps.init();

	if ($('html').is('.ie8')) {
        // IE8: ui does not repaint when css class changes
        $('.page-wrapper').addClass('z').removeClass('z');
    }
});