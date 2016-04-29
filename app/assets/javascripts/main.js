// Main Javascript File

// Wait for the DOM to lead before firing off our Javascript.
// This doesn't have a huge impact since this script is nearly
// the last thing loaded...but, ya know, habbit.

$(document).ready(function() {
	console.log("Document is ready!");
	ramsey.init();
});

var ramsey = {

	// Initalize allllll dem functions
	init: function() {
		console.log("Initialize");
		this.listeners();
	},

	// This is where we set up our scene listeners
	listeners: function() {
		console.log("Listeners");
		$('.main-navigation a').on('click', this.navToggle);
	},

	// Toggle navigation items, obtain content target
	navToggle: function(e) {
		console.log("navToggle");
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
		console.log("Target " + element.attr("id"));
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
	}
}