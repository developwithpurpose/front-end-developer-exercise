;(function() {

	var friends = null;
	var currentStep = 7;

	var getFriends = function (url, callback) {
		$.ajax( url ).done(function(response) {
			friends = response.friends;
			callback();
		});
	}

	var sortFriends = function () {
		var sortByLastName = function (a, b) {
			var a_lastName = a.lastName.toLowerCase();
			var b_lastName = b.lastName.toLowerCase();
			return ((a_lastName < b_lastName) ? -1 : ((a_lastName > b_lastName) ? 1 : 0));
		}
		return friends.sort(sortByLastName);
	}


	var getFriendsOnStep = function (step) {
		var group = [];
		for (var i = 0; i < friends.length; i++) {
			if (friends[i]['babyStep'] == step) {
				group.push(friends[i]);
			}
		}
		return group;
	}

	var name = function (f) {
		return '<a href="">' + f.firstName + ' ' + f.lastName + '</a>';
	}

	var takeStep = function (nextStep) {
		var stepHeight = 230;

		var currentStepAnchor = $('.step-navigation a.active');
		var currentStep = $(currentStepAnchor).data('step');

		$('.step-navigation a.step-' + currentStep).removeClass('active');
		$('.step-navigation a.step-' + nextStep).addClass('active');

		$('.steps').css('top', '-'+stepHeight*(nextStep-1)+'px');

		displayFriends(nextStep);

	}

	var displayFriends = function (step) {

		var friendsOnStep = getFriendsOnStep(step);
		var output = '';

		if (friendsOnStep.length == 1) {
			output = name(friendsOnStep[0]) + ' is also in Baby Step ' + step;
		}
		if (friendsOnStep.length == 2) {
			output = name(friendsOnStep[0]) + ' and ' + name(friendsOnStep[1]) + ' are also in Baby Step ' + step;
		}
		if (friendsOnStep.length == 3) {
			output = name(friendsOnStep[0]) + ', ' + name(friendsOnStep[1]) + ', and 1 other friend are also in Baby Step ' + step;
		}
		if (friendsOnStep.length >= 4) {
			output = name(friendsOnStep[0]) + ', ' + name(friendsOnStep[1]) + ', and ' + (friendsOnStep.length-2) + ' other friends are also in Baby Step ' + step;
		}

		$('.friends').html(output);
	}

	var init = function () {

		$('.step-navigation a').on('click', function (e) {
			e.stopPropagation();
			e.preventDefault();
			var nextStep = $(this).data('step');
			takeStep(nextStep);
		});


		$('.step-navigation li:first-child a').addClass('active');


		getFriends('/assets/data/baby-steps.json', function () {
			friends = sortFriends();
		});
	}

	$(document).ready(function () {
		init();
	});
	
})();