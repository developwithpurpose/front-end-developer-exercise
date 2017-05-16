$(document).ready(function() {
	$('.nav-main .nav-item a').click(function(event) {
		// TODO: Change Step
		var step = $(this).data('step');
		console.log('nav item clicked: Step ' + step);
	});

	var jqxhr = $.getJSON('/baby-steps.json')
		.done(function(data, textStatus, jqXHR) {
			// TODO: Load Dynamic Content
			console.log(textStatus);
			console.log(data);
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			// TODO: Handle Failure
			console.log(textStatus);
			console.log(errorThrown);
		});
});