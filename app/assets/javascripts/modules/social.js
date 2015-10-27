define(['jquery'], function ($) {

	var url = '/baby-steps.json',
		$steps = $('.window .step'),
		friends = null
	;

	function init () {
		AJAXcall();
	}

	function AJAXcall () {
		$.ajax({
			url: url,
			method: 'GET',
			dataType: 'json',
			timeout: 2000,
			error: function (XHR, status, error) {
				console.log('failure: ' + error);
				return;
			},
			success: function  (data, status) {
				friends = data.friends;
				setAllFriends();
			}
		});
	}

	function setAllFriends () {
		for (var i = 0; i < 7; i++) {
			var $currentStep = $($steps[i]),
				$currentSocial = $currentStep.find('.social'),
				currentFriends = grabCurrentFriends(i + 1),
				phrase = buildPhrase(currentFriends)
			;
			console.log(phrase);
			$currentSocial.html(phrase);
		}
	}

	function grabCurrentFriends (currentStep) {
		var results = $.grep(friends, function (friend) {
			return friend.babyStep == currentStep;
		});
		return results;
	}

	function buildPhrase (friends) {
		if (friends.length === 0) { return ''; }

		$.map(friends, function (friend, i) {
			friend.fullName = friend.firstName + ' ' + friend.lastName;
			friend.link = '<a href="#">' + friend.fullName + '</a>';
		});

		var links = friends[0].link,
			step = friends[0].babyStep,
			phrase = links + ' is also'
		;

		if (friends.length === 2) {
			links += ' and ' + friends[1].link;
			phrase = links + ' are also';
		}

		if (friends.length === 3) {
			links += ', ' + friends[1].link;
			phrase = links + ' and 1 other friend are also';
		}

		if (friends.length > 3) {
			links += ', ' + friends[1].link;
			moreFriends = friends.length - 2;
			phrase = links + ' and ' + moreFriends + ' other friends are also';
		}

		return '<p>' + phrase + ' in Baby Step ' + step + '</p>';
	}

	init();

});