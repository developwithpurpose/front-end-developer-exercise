(function($) {
	var page = {
		scrollArea: $('.scroll-area'),
		jsonData: null,

		initJSONData: function() {
			$.getJSON('./baby-steps.json', function(data){
		        page.jsonData = data;
		    });
		},

		initEventListeners: function() {
			$('.step-link').on('click', function(e) {
				e.preventDefault();

				var self = $(this),
					step = self.attr('id').match(/\d+/),
					content = $('#step-' + step + '-content'),
					contentTop = step * -332,
					friends = [],
					message = '';

				for (var i = 0; i < page.jsonData.friends.length; i++) {
					if (page.jsonData.friends[i].babyStep === parseInt(step)) {
						var name = page.jsonData.friends[i].firstName + ' ' + page.jsonData.friends[i].lastName;
						friends.push(name);
					}
				}

				if (friends.length > 2) {
					message = '<a href="#">' + friends[0] + '</a>, <a href="#">' + friends[1] + '</a>, and ' + (friends.length - 2) + ' other friend' + (friends.length - 2 > 1 ? 's' : '') + ' are also in Baby Step ' + step;
				} else if (friends.length === 2) {
					message = '<a href="#">' + friends[0] + '</a> and <a href="#">' + friends[1] + '</a> are also in Baby Step ' + step;
				} else if (friends.length === 1) {
					message = '<a href="#">' + friends[0] + '</a> is also in Baby Step ' + step;
				}

				content.find('.step-friends').html(message);
				self.closest('ul').find('.active').removeClass('active');
				self.addClass('active');
				page.scrollArea.css('top', contentTop + 'px');
			})
		},

		init: function() {
			$('body').addClass('has-js');

			page.initJSONData();
			page.initEventListeners();
		}
	};

	page.init();
})(jQuery);