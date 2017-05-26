(function($) {

	$(document).ready(function() {
		$('#contentSlider').magicSlider({
			autoHeight: false,
			dynamicArrows: false,
			dynamicTabs: false,
			externalTriggerSelector: "a.content__list-item",
			highlightExternalTrigger: true,
			panelTitleSelector: "",
			slideEaseDuration: 500,
			slideDirection: "vertical",
			carousel: false,
		});

		getJSON(1);
	});

	$('.content__list-item').on('click', function() {
		var step = $(this).attr('href').replace('#', '');
		getJSON(step);
	});



	function getJSON(step) {
		var request = $.ajax('./baby-steps.json').done(function(data) {
			parseJSON(data, step);
		}).fail(function(error) {
			alert(error);
		});
	}

	function parseJSON(data, step) {
		var id = "bs-" + step;
		var myFriendsOnStep = [];
		var myFriendsOnStep = $.grep(data.friends, function(friend) {
			return friend.babyStep == step;
		});
		console.log(myFriendsOnStep);
		switch ( true ) {

			case myFriendsOnStep.length >= 4:
				var myFriendsOnStep = _.sortBy(myFriendsOnStep, 'lastName');
				var otherFriends = myFriendsOnStep.length - 2;
				$('#' + id).html(`<a>${myFriendsOnStep[0].firstName} ${myFriendsOnStep[0].lastName}</a>, <a>${myFriendsOnStep[1].firstName} ${myFriendsOnStep[1].lastName}</a> and ${otherFriends} other friends are also in Baby Step ${step}`);
				break;

			case myFriendsOnStep.length === 3:
				var myFriendsOnStep = _.sortBy(myFriendsOnStep, 'lastName');
				var otherFriends = myFriendsOnStep.length - 2;
				$('#' + id).html(`<a>${myFriendsOnStep[0].firstName} ${myFriendsOnStep[0].lastName}</a>, <a>${myFriendsOnStep[1].firstName} ${myFriendsOnStep[1].lastName}</a> and 1 other friend are also in Baby Step ${step}`);
				break;

			case myFriendsOnStep.length === 2:
				var myFriendsOnStep = _.sortBy(myFriendsOnStep, 'lastName');
				$('#' + id).html(`<a>${myFriendsOnStep[0].firstName} ${myFriendsOnStep[0].lastName}</a> and <a>${myFriendsOnStep[1].firstName} ${myFriendsOnStep[1].lastName}</a> are also in Baby Step ${step}`);
				break;

			case myFriendsOnStep.length === 1:
				var myFriendsOnStep = _.sortBy(myFriendsOnStep, 'lastName');
				$('#' + id).html(`<a> ${myFriendsOnStep.firstName} ${myFriendsOnStep.lastName}</a> is also on Baby Step ${step}`);
				break;

		}

	}

})( jQuery );
