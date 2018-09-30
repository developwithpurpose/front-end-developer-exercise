$(document).ready(function () {
	$('body').removeClass('no-js').addClass('js-active');

	$('li a').click(function (e) {
		e.preventDefault();

		var activeLink = $('nav li .is-active').attr('data-id');
		var activeDiv = e.currentTarget.getAttribute('data-id');

		$('nav li a[data-id="' + activeLink + '"]').removeClass('is-active');
		$('nav li a[data-id="' + activeDiv + '"]').addClass('is-active');

		$('div[data-id="' + activeLink + '"]').removeClass('is-active');
		$('div[data-id="' + activeDiv + '"]').addClass('is-active');
	})

	$.getJSON('../../baby-steps.json', function (data) {

		for (var i = 1; i <= 7; i++) {
			var myFriends = [];

			$.each(data.friends, function (key) {
				var friend = data.friends[key];
				if (friend.babyStep === i) {
					myFriends.push(friend);
				}
			});

			if (myFriends.length > 3) {
				var friend1 = myFriends[0];
				var friend2 = myFriends[1];
				var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a>, <a href="#">' + friend2.firstName + ' ' + friend2.lastName + '</a> and ' + (myFriends.length - 2) + ' Other Friends are on this step';
				$("div[data-id='baby-step-" + i + "'] .my-friends").append(stringBuild);
			} else if (myFriends.length === 3) {
				var friend1 = myFriends[0];
				var friend2 = myFriends[1];
				var stringBuild = '<a href="#">' + friend1.firstName + '\ ' + friend1.lastName + '</a>, <a href="#">' + friend2.firstName + ' ' + friend2.lastName + '</a> and ' + (myFriends.length - 2) + ' Other Friend are on this step';
				$("div[data-id='baby-step-" + i + "'] .my-friends").append(stringBuild);
			} else if (myFriends.length === 2) {
				var friend1 = myFriends[0];
				var friend2 = myFriends[1];
				var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a> and <a href="#">' + friend2.firstName + ' ' + friend2.lastName + '</a> are on this step';
				$("div[data-id='baby-step-" + i + "'] .my-friends").append(stringBuild);
			} else if (myFriends.length === 1) {
				var friend1 = myFriends[0];
				var stringBuild = '<a href="#">' + friend1.firstName + ' ' + friend1.lastName + '</a> is on this step';
				$("div[data-id='baby-step-" + i + "'] .my-friends").append(stringBuild);
			}

		}

	});
});