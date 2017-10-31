(function($) {
	var $navItem = $('.js-step-nav');

	$navItem.on('click', function() {
		var $this = $(this);

		$this.addClass('-is-selected')
			.siblings()
			.removeClass('-is-selected');

		$('.js-step').eq($this.index())
			.addClass('-is-active')
			.siblings()
			.removeClass('-is-active');
	});

	$.ajax({
		url: '/baby-steps.json',
		success: function(response) {
			var friends = response.friends,
				steps = {};

			for (var i in friends) {
				var babyStep = friends[i].babyStep;

				if (steps[babyStep] === undefined) {
					steps[babyStep] = [];
				}

				steps[babyStep].push('<a href="#">' + [friends[i].firstName + ' ' + friends[i].lastName] + '</a>');
			}

			for (var i in steps) {
				var people = '';
					names = steps[i],
					count = names.length;

				if (count === 1) {
					people += names;
				} else if (count === 2) {
					people += names.join(' and ');
				} else if (count > 2) {
					people += names.slice(0, 2).join(', ') + ', and ' + names.slice(2).length + ' other friend' + (names.slice(2).length > 1 ? 's' : '');
				}

				if (count === 1) {
					people += ' is ';
				} else {
					people += ' are ';
				}

				if (count > 0) {
					$('.js-step').eq(i - 1)
						.append(people + 'also in Baby Step ' + i);
				}
			}
		}
	});
})(jQuery);