(function () {
	const numRegex = /\d+/;
	const $firstNav = $('.baby_steps_tabs_list > li:first-child');


	const makePostCall = function (stepNum) { 

		$.ajax({
			 type: "GET",
			 url: './baby-steps.json',
			 dataType: "json",
			 contentType: "application/json;charset=utf-8",
			 success: function(data) {
				const friendsArray = data.friends.filter((friend) => {
					return friend.babyStep === parseInt(stepNum)
				});

				setDynamicData(friendsArray);
			  },
			  error: function(e) {
				alert(e);
			  }
		 });
	 }

	// on initial load show only the first baby step
	$('.active_img').hide();
	$('.active_text').show();
	$(".baby_steps_text:not(.active_text)").hide();
	$firstNav.addClass('active');
	$firstNav.find('.inactive_img').hide();
	$firstNav.find('.active_img').show();

	// on click for navigation
	$('.baby_steps_nav').on('click', function(event) {
		const $current = $(this);
		const $babyStepsText = $('.baby_steps_text');
		const stepNum = $current[0].textContent.match(numRegex);

		if($current.hasClass('active')) {
			return;
		}
		else {
			// Hide previous nav and content
			$current.siblings().removeClass('active', 500);
			$current.siblings().find('.active_img').hide();
			$babyStepsText.removeClass('active_text', 500);
			$babyStepsText.hide();
			$current.siblings().find('.inactive_img').show();

			//show current nav and content
			$current.toggleClass('active', 500);
			$current.find('img').toggle();
			$('#' + stepNum[0]).show().addClass('active_text');

			makePostCall(stepNum);
		}
		event.preventDefault();
	});

	function setDynamicData(friendsData) {
		const $friendsHtml = $('.baby_steps_friends_list');
		$friendsHtml.empty();
		let friendsString = '';

		for (var index = 0; index < friendsData.length; index++) {
			if(friendsData.length > 1) {
				if(index >= 2 && friendsData.length === 3) {
					friendsString += 'and ' + (friendsData.length - index) + ' Other Friend are also in Baby Step ' + friendsData[index].babyStep + '.';
					break;
				} 
				else if(index >= 2 && friendsData.length > 3) {
					friendsString += 'and ' + (friendsData.length - index) + ' Other Friends are also in Baby Step ' + friendsData[index].babyStep + '.';
					break;
				} 
				else if(index  + 1 === friendsData.length) {
					friendsString +=  ('and ' + '<a href="#">' + friendsData[index].firstName + ' ' + friendsData[index].lastName + '</a>' + ' are also in Baby Step ' + friendsData[index].babyStep + '.');
				}
				 else {
					friendsString +=  '<a href="#">' + friendsData[index].firstName + ' ' + friendsData[index].lastName + '</a>' + ', ';
				}
			} else {
				friendsString += ('<a href="#">' + friendsData[index].firstName + ' ' + friendsData[index].lastName + '</a>' + ' is also in Baby Step ' +  friendsData[index].babyStep + '.');
			}
		}

		 $friendsHtml.html('<p class="baby_steps_friends">' + friendsString + '</p>');
	}
})();