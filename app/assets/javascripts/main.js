$(document).ready(function() {
	$('nav ul li').hover(function() {
		$(this).toggleClass('active');
	});
	$('.hideJS').css('display', 'none');
	var update = function() {
		var index = $(this).index();
		var step = $(this).data('step')
		$('#feed').html(' ');
		$('nav ul li').removeClass('active');
		$('.step').eq(index).slideDown(200);
		$('.step').not($('.step').eq(index)).css('display', 'none');
		$.getJSON("baby-steps.json", function(data) {
			var friends = [];
			var sortedFriends = [];
			$.each(data.friends, function(key, val) {
				if (val.babyStep == step) {
					friends.push({
						'firstName': val.firstName,
						'lastName': val.lastName
					});
					friends.sort(function(a, b) {
						return a.lastName.localeCompare(b.lastName);
					});
				}
			});
			$.each(friends, function(key, val) {
				sortedFriends.push(val.firstName + ' ' + val.lastName);
				var difference = sortedFriends.length - 2;
				if (sortedFriends.length > 3) {
					$('#feed').html('<span class="friends">' + sortedFriends.slice(0, 2).join(', ') + '</span>' + ' and ' + difference + ' other friends are on step ' + step);
				} else if (sortedFriends.length == 3) {
					$('#feed').html('<span class="friends">' + sortedFriends.slice(0, 2).join(', ') + '</span>' + ' and ' + difference + ' other friend is on step ' + step);
				} else if (sortedFriends.length == 2) {
					$('#feed').html('<span class="friends">' + sortedFriends.slice(0, 2).join(', ') + '</span>' + ' are also on step ' + step);
				} else if (sortedFriends.length == 1) {
					$('#feed').html('<span class="friends">' + sortedFriends.slice(0, 2).join(', ') + '</span>' + ' is also on step ' + step);
				}
			});
		});
	};
	$('nav ul li').on('click keypress', update);
});
