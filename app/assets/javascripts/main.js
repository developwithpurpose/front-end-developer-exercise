
var app = (function() {

	'use strict';

	var friendList = [];

	return {
		init: init
	};

	function init() {

		loadFriends();
		updateFriendCount(1);

		// Events
		$('.js-nav-item').click(navItemHandler);
	}

	function loadFriends() {

		$.getJSON('/baby-steps.json', function(data) {
			friendList = data.friends;
		});
	}

	function updateFriendCount(step) {

		var $friendDetails = $('.js-friend-details');
		var friendsInStep = friendList.filter(isInStep);
		var friendCount;
		var friendMessage;

		friendsInStep.sort(compareByLastName);
		friendCount = friendsInStep.length;

		// Hide the message. It will be faded in later, if needed
		$friendDetails.hide();

		if (friendCount === 0) {
			return;
		}

		// friends list is now filtered and sorted, so get the new message
		// and update the DOM
		friendMessage = getFriendMessage(friendsInStep, friendCount);
		$friendDetails.html(friendMessage).fadeIn(200);


		function getFriendMessage(friends, count) {

			if (count === 1) {
				return getFullNameInLink(friends[0]) + ' is also in Baby Step ' + step;
			}

			if (count === 2) {
				return getFullNameInLink(friends[0]) + ' and ' + getFullNameInLink(friends[1]) + ' are also in Baby Step ' + step;
			}

			if (count >= 3) {
				return getFullNameInLink(friends[0]) + ' and ' + getFullNameInLink(friends[1]) + ' and ' + (count - 2) + ' other friends are also in Baby Step ' + step;
			}
		}

		function getFullNameInLink(val) {
			return '<a href="#">' + val.firstName + ' ' + val.lastName + '</a>';
		}

		function isInStep(value) {
			return value.babyStep === step;
		}

		function compareByLastName(a, b) {
			var nameA = a.lastName.toUpperCase();
			var nameB = b.lastName.toUpperCase();

			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		}
	}

	// Event handlers
	function navItemHandler(e) {

		var step;
		var $this = $(this);
		var targetHref = $this.attr('href');
		var $targetContent = $(targetHref);
		var $prevContent = $('.js-step.active');
		var $prevMenuItem = $('.js-nav-item.active');
		var $sidebarActiveBackground = $('.js-sidebar-active-background');

		e.preventDefault();

		// toggle active menu item
		$this.addClass('active');
		$prevMenuItem.removeClass('active');

		// position the menu active background
		$sidebarActiveBackground.css('top', $this.position().top);

		// toggle active content item
		$prevContent.removeClass('active').hide();

		$targetContent.fadeIn(200, function() {
			$targetContent.addClass('active');
		});

		// prase the current step from the href
		step = targetHref.replace('#bs', '');
		step = parseInt(step, 10);

		updateFriendCount(step);
	}

}());
