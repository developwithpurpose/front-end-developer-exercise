window.daveCodeTest = (function($)
{
	var module = {};

	var $el = {
		navItems: $('aside nav a')
	};

	module.onReady = function()
	{
		console.log($el.navItems);
	};

	return module;

})(jQuery);

$(document).ready(window.daveCodeTest.onReady);