define(['jquery'], function ($) {

	var $aside = $('.aside'),
		$window = $('.window'),
		$infoSteps = $aside.find('.step'),
		$windowSteps = $window.find('.step'),
		$activeTrail = $aside.find('.active-trail'),
		asideHeight = $($infoSteps[0]).outerHeight(),
		windowHeight = $($windowSteps[0]).outerHeight(),
		$activeStep = null,
		position = null
	;

	function init () {
		$infoSteps.on('click', function () {
			$activeStep = $(this);
			$window.find('.intro').removeClass('active');
			position = $infoSteps.index($activeStep);
			moveToStep();
			revealMainStep();
		});
	}

	function moveToStep () {
		if ($activeTrail.css('display') === 'none') {
			$activeTrail.css('display', 'block');
		}
		$infoSteps.removeClass('active');
		$activeStep.addClass('active');
		var asidePos = asideHeight * position;
		$activeTrail.css('top', asidePos);
	}

	function revealMainStep () {
		var windowPos = -( windowHeight * (position + 1));
		$window.css('top', windowPos);
	}

	init();

});