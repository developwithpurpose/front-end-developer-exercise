// Main Javascript File

// Load the DOM first, then initialize our scripts
$(document).ready(function() {
	// console.log("Document is ready!");
	ramsey.init();
});

var ramsey = {

	// Initalize allllll dem functions
	init: function() {
		// console.log("Initialize");
		console.log("Hey there, Ramsey Solutions!");
		this.javascriptEnabled();
		this.listeners();
		this.getFriendsBabySteps();
	},


	// This will run if the browser has javascript enabled. Obviously.
	javascriptEnabled: function() {
		$('body').addClass('javascript-enabled');
	},


	// This is where we set up our scene listeners
	listeners: function() {
		// console.log("Listeners");
		$('.main-navigation a').on('click', this.navToggle);
	},


	// Toggle navigation items, obtain content target
	navToggle: function(e) {
		// console.log("Nav toggle");
		e.preventDefault();
		var $currentNav = $(e.target),
			$lastNav,
			$targetContent = $($currentNav.attr('href'));

		if ($lastNav == null) {
			$lastNav = $('.main-navigation li.active');
		}

		$lastNav.removeClass('active');
		$currentNav.parent().addClass('active');
		$lastNav = $currentNav.parent();
		ramsey.contentToggle.toggleNow($targetContent);
	},


	// Swap out the content based on the navigation item selected
	contentToggle: {
		$currentContent: null,
		$lastContent: null,

		toggleNow: function(element) {
			$currentContent = $(element);

			if ($currentContent.hasClass('active')) {
				return;
			}

			if (!this.$lastContent) {
				this.$lastContent = $('.content-component.active');
			}

			this.$lastContent.removeClass('active');
			$(element).addClass('active');

			$currentContent.find('.step-fade').each(function(index, element) {
				ramsey.stepFader(index, element, true);
			});

			this.$lastContent.find('.step-fade').each(function(index, element) {
				ramsey.stepFader(index, element, false);
			});

			this.$lastContent = $currentContent;
		}
	},


	// Sequential fader for a nice transition effect!
	stepFader: function(index, element, fadeIn) {
		setTimeout(function() {
			fadeIn ? $(element).addClass('active') : $(element).removeClass('active');
		}, 100 * index);
	},


	// Jquery - AJAX method for getting our friend's baby steps,
	// which sounds pretty odd when you say it out loud to yourself.
	getFriendsBabySteps: function() {
		// console.log("Baby steps!");

		$.ajax({
			url: './baby-steps.json',
			// url: './baby-steps-unsorted.json',
			success: function(response) {
				console.log("Success!");
				ramsey.reorderFriendsBabySteps(response["friends"]);
			},
			error: function(response) {
				console.log(response.status + " " + response.statusText);
			}
		});
	},


	// Let's first ensure that our friends are
	// listed by their baby step in ascending order
	reorderFriendsBabySteps: function(friends) {
		console.log("Reorder baby steps");
		friends.sort(function(a, b) {
			var stepA = a.babyStep;
			var stepB = b.babyStep;
			return stepA - stepB;
		});

		this.groupFriendsBabySteps(friends);
	},


	// Now we sort through our "friends" object
	// and group them together by their step
	groupFriendsBabySteps: function(friends) {
		// console.log("group baby steps");
		var friendList = [];
		var currentStep = friends[0]["babyStep"];

		for (var i = 0; i < friends.length; i++) {

			if (friends[i]["babyStep"] == currentStep) {
				friendList.push(friends[i]);
			} else {

				// sort by last name ascending
				this.alphabetizeFriends(friendList);
				friendList = [];
				friendList.push(friends[i]);
				currentStep ++;
			}
		}

		this.alphabetizeFriends(friendList);
	},


	// Sort the list alphabetically by their last names
	alphabetizeFriends: function(friends) {
		// console.log("Alphabetize friends");
		friends.sort(function(a, b) {
			var textA = a.lastName.toUpperCase();
	    	var textB = b.lastName.toUpperCase();
	    	var textAFirst = a.firstName.toUpperCase();
	    	var textBFirst = b.firstName.toUpperCase();

	    	// Sort by last name
	    	if (textA < textB) {
	    		return -1;
	    	} else if (textA > textB) {
	    		return 1;
	    	}

	    	// Then if necessary, sort by first name
	    	if (textAFirst < textBFirst) {
	    		return -1;
	    	} else if (textAFirst > textBFirst) {
	    		return 1;
	    	} else {
	    		return 0;
	    	}
		});

		this.displayFriendsBabySteps(friends);
	},


	// Displaying our friend's baby steps
	displayFriendsBabySteps: function(friends) {
		// console.log("Display baby steps");
		var currentStep = friends[0]["babyStep"];
		var $babyStepDiv = $('.content-component[data-baby-step="' + currentStep + '"] .other-users');
		var usersText = '';

		usersText = '<p><a href="#">' + friends[0]["firstName"] + ' ' + friends[0]["lastName"] + '</a>';

		if (friends.length < 2) {
			usersText += ' is also ';
		}

		else if (friends.length < 3) {
			usersText += ' and <a href=#$">'
			+ friends[1]["firstName"] + ' ' + friends[1]["lastName"]+ '</a>'
			+ ' are also in ';
		}
		else if (friends.length >= 3) {
			usersText += ', <a href="#">'
			+ friends[1]["firstName"] + ' ' + friends[1]["lastName"]+ '</a>'
			+ ' and ' + (friends.length - 2) + ' other';
			friends.length == 3 ? usersText += ' friend ' : usersText += ' friends';
			usersText += ' are also';
		}

		usersText += ' in Baby Step ' + currentStep + '</p>';
		$babyStepDiv.html(usersText);
	}
}
