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
		this.listeners();
		this.getFriendsBabySteps();
	},

	// This is where we set up our scene listeners
	listeners: function() {
		// console.log("Listeners");
		$('.main-navigation a').on('click', this.navToggle);
	},

	// Toggle navigation items, obtain content target
	navToggle: function(e) {
		// console.log("navToggle");
		e.preventDefault();
		var $currentNav = $(e.target),
			$lastNav,
			$targetContent = $($currentNav.attr('href'));

		if ($lastNav == null) {
			$lastNav = $('.main-navigation a.active');
		}

		$lastNav.removeClass('active');
		$currentNav.addClass('active');
		$lastNav = $currentNav;
		ramsey.contentToggle($targetContent);

	},

	// Swap out the content based on the navigation item selected
	contentToggle: function(element) {
		// console.log("Target " + element.attr("id"));
		var $currentContent = $(element),
			$lastContent;
		
		if ($lastContent == null) {
			$lastContent = $('.content-component.active');
		}
		
		$lastContent.removeClass('active');
		$lastContent = $currentContent;
		// setTimeout(function() {
			$currentContent.addClass('active');
		// }, 200);
	},

	// Jquery - AJAX method for getting our friend's baby steps
	getFriendsBabySteps: function() {
		console.log("Baby steps!");

		$.ajax({
			url: './baby-steps.json',
			success: function(response) {
				// console.log("Success!");
				ramsey.organizeFriendsBabySteps(response["friends"]);
			},
			error: function(response) {
				console.log(response.status + " " + response.statusText);
			}
		});
	},

	// Now we sort through our "friends" object and organize them by step
	organizeFriendsBabySteps: function(friends) {
		// Iterate through our friend list
		// If this baby step = next baby step,
		// Create a "users" object & add them
		// Otherwise, send off to our display function!
		var friendList = [];
		var currentStep = friends[0]["babyStep"];

		for (var i = 0; i < friends.length; i++) {

			if (friends[i]["babyStep"] == currentStep) {
				friendList.push(friends[i]);
			} else {
				
				// sort by last name ascending
				this.sortFriendsBabySteps(friendList);
				this.displayFriendsBabySteps(friendList);
				friendList = [];
				friendList.push(friends[i]);
				currentStep ++;
			}
		}

		// sort by last name ascending
		this.sortFriendsBabySteps(friendList);
		this.displayFriendsBabySteps(friendList);
		
	},

	// Sort the list alphabetically by their last names
	sortFriendsBabySteps: function(friends) {
		friends.sort(function(a, b) {
			var textA = a.lastName.toUpperCase();
	    	var textB = b.lastName.toUpperCase();
	    	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
	},

	// Displaying our friend's baby steps
	displayFriendsBabySteps: function(friends) {
		console.log(friends);
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
