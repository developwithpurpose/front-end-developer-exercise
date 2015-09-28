/**
 * Navigation module
 * 
 * Setup events & functions for navigating between baby steps
 */
window.daveCodeTest = (function($, module)
{
	module.nav = {};

	// ---------- PRIVATE PROPERTIES

	/**
	 * Holds the index of the currently active baby step item
	 * @var number _activeStep
	 */
	var _activeStep = 1;

	/**
	 * Defines how long an animation between two items should be 
	 * when the difference is 1, e.g. navigating between item #2 
	 * and item #3. The total animation time will be calculated 
	 * as (_animateBaseMS * [diff in indices])
	 * @var number _animateBaseMS
	 */
	var _animateBaseMS = 500;

	// ---------- PRIVATE METHODS

	/**
	 * Setup the events to navigate between baby steps
	 * @param void
	 * @return void
	 */
	var _bindEvents = function()
	{
		// --- change the active state on nav click
		module.elements.nav.items.unbind('click.navClick').on('click.navClick', function(e)
		{
			e.preventDefault();

			_goToStepEvent.call(this);
		});
	};

	// ---

	/**
	 * Will adjust the height of the viewport wrapper so that it is the same height
	 * as the current item, as to hide the overflow of the other steps.
	 * 
	 * @param void
	 * @return void
	 */
	var _setViewportHeight = function()
	{
		/* 	
			adjust the height of the "viewport" container, so that only our 
			target item is visible; note that the animation time is reduced 
			by 25% to make the height transition complete before the scroll
			animation.
		*/
		module.elements.babySteps.viewport
			.animate({
				'queue': false, 
				'height': module.elements.getStep(_activeStep).outerHeight()
			}, _animateBaseMS, 'easeInQuad');

		// --- ensure all our items are visible
		module.elements.babySteps.items.show();
	};

	// ---

	/**
	 * Set a baby step item as active. Will affect both the content and the nav.
	 * 
	 * @param void
	 * @return void
	 */
	var _goToStepEvent = function()
	{
		var $parent = $(this).parents('li'),
			_toStep = $parent.index() + 1,
			$content = module.elements.getStep(_toStep);

		// --- get the difference between the current and new indices
		var _indexDiff = Math.abs(_activeStep - _toStep);

		// --- store our new, current index
		_activeStep = _toStep;

		// --- calculate how long our animation should take
		var _animTime = _animateBaseMS + (_animateBaseMS * _indexDiff/3);

		// --- set the nav item as active
		$parent.addClass('active')
		.siblings('li').removeClass('active');

		// --- animate the nav highlighting element to be positioned behind the active item
		module.elements.nav.activeBG
			.stop()
			.animate({top: $parent.position().top}, _animTime, 'easeInOutCubic');

		// --- abort any currently running animations
		module.elements.babySteps.wrap.stop(true);

		// --- scroll the steps wrapper to the selected item
		module.elements.babySteps.wrap
			.scrollTo(
				$content, 
				_animTime, 
				{
					'queue': false, 
					'easing': 'easeInOutCubic'
				}
			);

		_setViewportHeight();
	};

	// ---------- PUBLIC METHODS

	module.nav.init = function()
	{
		// --- adjust the height of the viewport wrapper to be the same height as the current item
		_setViewportHeight();

		// --- setup the events to navigate between baby steps
		_bindEvents();

		// --- go ahead and set the first item as active
		_goToStepEvent.call(module.elements.nav.items.get(0));
	};

	// ---

	return module;

})(jQuery, window.daveCodeTest || {});