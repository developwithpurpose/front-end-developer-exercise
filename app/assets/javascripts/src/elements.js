/**
 * Elements module
 * 
 * Cache jQuery selectors for DOM elements we'll need
 */
window.daveCodeTest = (function($, module)
{
	module.elements = {
		nav: {
			wrap: 		$('aside nav'),
			items: 		$('aside nav a'),
			activeBG: 	$('aside .active-bg')
		},
		babySteps: {
			viewport: 	$('article.content'),
			wrap: 		$('.baby-step-items'),
			items: 		$('section[class^="baby-step-"]')
		}
	};

	// ---

	/**
	 * A shorthand way to get the content element of a particular step
	 * 
	 * @param number stepNum
	 * @return object The jQuery object of the step container
	 */
	module.elements.getStep = function(stepNum)
	{
		return module.elements.babySteps.items.filter('.baby-step-' + stepNum);
	};

	// ---

	return module;

})(jQuery, window.daveCodeTest || {});