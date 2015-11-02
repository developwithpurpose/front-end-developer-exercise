define(['jquery'], function ($) {

	var $aside = $('.aside'),
		$window = $('.window'),
		$asideSteps = $aside.find('.step'),
		$windowSteps = $window.find('.step'),
		$activeTrail = $aside.find('.active-trail'),
		asideHeight = null,
		windowHeight = null,
		$activeStep = null,
		position = null
	;

	function init () {
		editClasses();
		grabHeights();
		$asideSteps.on('click', function (e) {
			e.preventDefault();
			$activeStep = $(this);
			position = $asideSteps.index($activeStep);
			moveToStep();
			revealMainStep();
		});
	}

	function editClasses () {
		$('body').removeClass('no-js');
		$($asideSteps[0]).addClass('active');
	}

	function grabHeights () {
		asideHeight = $($asideSteps[0]).outerHeight();
		windowHeight = $($windowSteps[0]).outerHeight();
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