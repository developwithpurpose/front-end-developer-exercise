//require('./lib/flux/flux.jquery.min');

$(document).ready(function() {
	// Navigation Click Handling
	$('.nav-main .nav-item a').click(function(event) {
		// Change Active State
		$(this).parent().siblings().find('.active').removeClass('active');
		$(this).addClass('active');

		// Load/Update Dynamic Content
		var step = $(this).data('step');
		var jqxhr = $.getJSON('/baby-steps.json')
			.done(function(data, textStatus, jqXHR) {
				// Get friends on step
				var friendsOnStep = _.filter(data.friends, function(friend) { 
					return friend.babyStep == step; 
				});

				// Sort By Last Name Asc
				friendsOnStep = _.sortBy(friendsOnStep, ['lastName', 'firstName']);

				// Create Message
				var message = '';
				var totalFriends = friendsOnStep.length;

				// 1st friend
				if(totalFriends >= 1) {
					let friend = friendsOnStep.shift();
					let name = friend.firstName + ' ' + friend.lastName;
					message += '<a href="Javascript:void(0);">' + name + '</a>';
				}

				// 2nd friend
				if(totalFriends >= 2) {
					let friend = friendsOnStep.shift();
					let name = friend.firstName + ' ' + friend.lastName;
					message += totalFriends == 2 ? ' and ' : ', '; 
					message += '<a href="Javascript:void(0);">' + name + '</a>';
				}

				// more friends
				if(totalFriends >= 3) {
					if(totalFriends == 3) {
						message += ', and 1 other friend';
					} else {
						let otherFriends = friendsOnStep.length;
						message += ', and ' + otherFriends + ' other friends';
					}
				}

				// conclusion
				if(totalFriends >= 1) {
					message += totalFriends == 1 ? ' is' : ' are';
					message += ' also on step ' + step;
					message = '<p>' + message + '</p>';
				}

				// update content
				$('#baby-step-carousel .item[data-step=' + step + '] .friends-on-step').html(message);
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// Handle Failure
				console.log(textStatus);
				console.log(errorThrown);
			});
	});

	// load dynamic content for step one
	$('.nav-item a[data-step=1]').click();
});