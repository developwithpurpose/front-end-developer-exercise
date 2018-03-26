$(document).ready(function() {
	
	updateFriends(1);
	
	var activeStep = 1;
	$('.tab').click(function(event){
		$('.tab').removeClass('active');
		$(this).addClass('active');
		var step = $(this).data('step');
		if (step == activeStep)
			return;
		activeStep = step;
		var newEl = $('.tab-content').eq(step-1);
		updateFriends(step);
		$('.tab-content.active').fadeOut({
			always: function(){
				$(this).removeClass('active');
				newEl.fadeIn({
					always: function(){
						newEl.addClass('active');
					}
				});
			}
		});
	});
	
});

function updateFriends(step) {
	$.get('baby-steps.json', {}, function(data){
		var names = [];
		for (var i=0; i<data.friends.length; i++) {
			var friend = data.friends[i];
			if (friend.babyStep != step)
				continue;
			names.push(friend.firstName + ' ' + friend.lastName);
		}
		if (names.length < 1) {
			msg = '';
		} else {
			if (names.length == 1) {
				var msg = '<a href="#">' + names[0] + '</a> is';
			} else if (names.length == 2) {
				var msg = '<a href="#">' + names[0] + '</a> and ';
				msg += '<a href="#">' + names[1] + '</a> are';
			} else {
				var msg = '<a href="#">' + names[0] + '</a>, ';
				msg += '<a href="#">' + names[1] + '</a>, ';
				msg += 'and ' + (names.length-2);
				msg += (names.length-2 > 1)
					? ' other friends are' : ' other friend are';
			}
			msg += ' also in Baby Step ' + step;
		}
		$('.tab-content').eq(step-1).find('.social').html(msg);
	});
}
