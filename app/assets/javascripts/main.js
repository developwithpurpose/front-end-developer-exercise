/**
 * 
 */
var FriendModel = Backbone.Model.extend({
	/**
	 * 
	 */
	anchor: function()
	{
		return '<a href="">' + this.name() + '</a>';
	},

	/**
	 * 
	 */
	name: function()
	{
		return this.attributes.firstName + ' ' + this.attributes.lastName;
	}

});


/**
 * 
 */
var FriendCollection = Backbone.Collection.extend({

	/**
	 * 
	 */
	model: FriendModel,

	/**
	 * 
	 */
	comparator: 'lastName',

	/**
	 * 
	 */
	url: 'assets/javascripts/baby-steps.json',

	/**
	 * 
	 */
	parse: function(response)
	{
		return response.friends;
	}

});





$(document).ready(function() {

	// 
	var collection = new FriendCollection();

	// 
	collection.fetch({
		success: function(collection, response, options) {
			
			// console.log('collection', collection);

			$('.article-container article').each(function(index, element) {
				
				var step    = $(this).data('step'),
					friends = collection.where({babyStep: step}),
					display = $(this).find('div.friends');
				
				switch (friends.length)
				{
					case 0:
						display.html('').hide();
						break;

					case 1:
						display.append(friends[0].anchor())
						display.append(' is ');
						break;

					case 2:
						display.append(friends[0].anchor());
						display.append(' and ');
						display.append(friends[1].anchor());
						display.append(' are ')

						break;

					case 3:
						display.append(friends[0].anchor());
						display.append(', ');
						display.append(friends[1].anchor());
						display.append(' and 1 other friend are ')

						break;

					default:
						display.append(friends[0].anchor());
						display.append(', ');
						display.append(friends[1].anchor());
						display.append(' and ' + (friends.length - 2) + ' other friends are ')

						break;
				}

				display.append('also in Baby Step ' + step);

			});

		}
	});


	/**
	 * Navigation Controller
	 */
	$('a[data-step]').click(function(e) {

		e.preventDefault();

		// animate page
		$('.inner').animate({top: (- (620 * ($(this).data('step') - 1))) + 'px'});

		// animate anchor
		var position = (($(this).data('step') - 1) * 61);

		// remove previous text highlight
		$('aside a').removeClass('current');

		// new highlight position
		$('.highlight').animate({top: position});
				
		// add class to highlight text
		$(this).addClass('current');

	});

});