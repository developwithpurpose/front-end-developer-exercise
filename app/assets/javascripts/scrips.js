$(function() {
	const showContent = $('.js-show-content');

	$(showContent).on('click', function(event) {
		event.preventDefault();

		const content = $('article.content');
		const contentID = $(this).data('content');

		showContent.parent('li').removeClass('active');
		$(this).parent('li').addClass('active');

		content.removeClass('active');
		$('#' + contentID).addClass('active');

		function sortFriends(a, b){
			return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1;
		};

		$.ajax({
			type: "GET",
			contentType: "application/json",
			dataType: "json",
			url: 'baby-steps.json'
		})
		.done(function (data) {
			let friends = data.friends.sort(sortFriends);

			function getFriendsCount(step) {
				let count = 0;
				for (let i = 0; i < friends.length; i++) {
					if (friends[i].step === step) {
						count++;
					}
				}
				return count;
			}

			$.each(friends, function(index, element) {
				let getStep = parseInt(contentID.slice(-1));
				let countFriends = 0;
				const messageBox = $('.baby-steps');

				if (element.babyStep === getStep) {
					console.log(element.firstName + ' ' + element.lastName);

					if (countFriends === 0) {
						return;
					} else if (countFriends === 1) {
						console.log('number of friends in step 1', countFriends);
						$(messageBox).html('<p><span>' + element.firstName + ' ' + element.lastName + '</span> is also in Baby Step ' + element.babyStep + '</p>');
					} else if (countFriends === 2) {
						console.log('number of friends in step 2', countFriends);
						$(messageBox).html(' <p><span>' + element.firstName + ' ' + element.lastName + '</span> are also in Baby Step ' + element.babyStep + '</p>');
					} else if (countFriends === 3) {
						console.log('number of friends in step 3', countFriends);
						$(messageBox).html('<p><span>' + element.firstName + ' ' + element.lastName + '</span> and 1 other friend are also in Baby Step ' + element.babyStep + '</p>');
					} else if (countFriends === 4) {
						console.log('number of friends in step 4', countFriends);
						$(messageBox).html('<p><span>' + element.firstName + ' ' + element.lastName + '</span> and ' + (countFriends - 2) + ' are also in Baby Step ' + element.babyStep + '</p>');
					}
				}

			});
		});
	});
});