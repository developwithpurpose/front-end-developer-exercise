define(['jquery'], function ($) {

	var $aside = $('.aside'),
		$window = $('.window'),
		$asideSteps = $aside.find('.step'),
		$windowSteps = $window.find('.step'),
		$activeTrail = $aside.find('.active-trail'),
		asideHeight = $($asideSteps[0]).outerHeight(),
		windowHeight = $($windowSteps[0]).outerHeight(),
		$activeStep = null,
		position = null
	;

	function init () {
		$asideSteps.on('click', function () {
			$activeStep = $(this);
			position = $asideSteps.index($activeStep);
			moveToStep();
			revealMainStep();
		});
	}

	function moveToStep () {
		$asideSteps.removeClass('active');
		$activeStep.addClass('active');
		var asidePos = asideHeight * position;
		$activeTrail.css('top', asidePos);
	}

	function revealMainStep () {
		var windowPos = -( windowHeight * position);
		$window.css('top', windowPos);
	}

	init();

});