jQuery(function($) {
	getFriends();

	$('.baby-steps>nav>a').click(function(e) {
		var $content = $(e.target.hash);

		// Set nav class
		$('.baby-steps>nav>a').removeClass('active');
		$(this).addClass('active');

		// Set content class
		$('.baby-step').removeClass('active');

		$('.baby-steps>.content').css('height', $content.outerHeight() + 24);
		$('.baby-step-content').css( 'top', 24 - $content.data('top') );

		$content.addClass('active');

		e.preventDefault();
	});

});

function byLastName(a,b) {
	if (a.lastName < b.lastName)
		return -1;
	if (a.lastName > b.lastName)
		return 1;
	return 0;
}

function addFriendsToBabyStep( babyStep, friends ) {
	var id = '#baby-step-' + babyStep;

	$(id).find('.friends').remove();

	var total = extras = 0;

	var message = '';

	friends.forEach( function( friend ) {
		if ( friend.babyStep === babyStep ) {
			if ( total < 2 ) {
				message += `<a href="#">${friend.firstName} ${friend.lastName}</a>`;
			}

			if ( total < 1 ) {
				message += ', ';
			}

			if ( total >= 2 ) {
				extras++;
			}

			total++;
		}
	});

	if ( extras ) {
		let friends = 'Friends';

		if ( extras === 1 ) {
			friends = 'Friend';
		}

		message += ` and ${extras} Other ${friends} `;
	}

	if ( total === 1 ) {
		message = message.substr( 0, message.length-2 );
		message += ' is on this baby step';
	} else {
		message += ' are on this baby step';
	}

	if ( total ) {
		$(id).append(`<p class="friends"> ${message} </p>`);
	}
}

function getFriends() {
	jQuery.get('baby-steps.json', {}, function( data ) {
		data.friends.sort(byLastName);

		for( var i = 1; i <= 7; i++ ) {
			addFriendsToBabyStep(i, data.friends );
		}

		$('.baby-step').each(function(index, step) {
			$(step).data('top', Math.floor($(step).position().top));
		});

		$('.baby-steps>nav>a').first().click();
		if ( window.location.hash ) {

			setTimeout( function() {
				$('.baby-steps>nav>a[href="' + window.location.hash + '"]').first().click();
			}, 200);
		}
	});
}

