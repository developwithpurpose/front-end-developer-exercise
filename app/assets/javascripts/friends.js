/**
 * Constructs baby step friends message
 *
 * @param {Array} friends
 * @param {Integer} babyStep
 */
function parseFriends(friends, babyStep) {
	var friendsNames = [];
	var text = '';
	var numFriends = 0;

	for (var i=0; i<friends.length; i++) {
		if (friends[i].babyStep === babyStep) {
			if (numFriends < 2) {
				friendsNames.push('<a href="#">' + friends[i].firstName + ' ' +
					friends[i].lastName + '</a>');	
			}
			numFriends++;
		}
	}

	if (numFriends === 1) {
		text =  ' is also on Baby Step ' + babyStep;
	} else if (numFriends === 2) {
		text = ' are also in Baby Step ' + babyStep;
	} else if (numFriends === 3) {
		text = ' and 1 other friend are also on Baby Step ' + babyStep;
	} else if (numFriends > 3) {
		text = ' and ' + (numFriends - 2 ) +
			' other friends are also on Baby Step ' + babyStep;
	}

	return {
		friends: friendsNames,
		text: text,
		numFriends: numFriends
	};
}

/**
 * Gets list of friends and the baby step they are on
 */
function getFriends() {
	$.ajax({
		url: "baby-steps.json",
		success: function(resp) {
			var msg = parseFriends(resp.friends, babyStep);
			var friendsText = '';
	
			if (msg.numFriends > 0) {
				if (msg.numFriends === 2) {
					friendsText = msg.friends.join(' and ');
				} else {
					friendsText = msg.friends.join(', ');
				}
				$('#friends').html(friendsText); 
				$('#babyStepText').html(msg.text);
			}
		}
	});
}

getFriends();
