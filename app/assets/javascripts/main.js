/*

Style explanation

- perform jQuery selector queries in advance to avoid redundant computations
- declare variables at beginning of each scope for readability 
- name non-trivial functions to avoid spaghetti code

*/

function ready() {
	var $navElem = $('nav > a');
	var $navSelection = $('#navSelection');

	var navTransition = function(event) {
		var $selectedElem = $(this);
		var topOffset = $selectedElem.position().top + 'px';
		var goAwayAndComeBack = function() {
			$navElem.removeClass('selected');
			$navSelection.css({ top: topOffset });
			$navSelection.animate({ width: '300px' }, 100, function() {
				$selectedElem.addClass('selected');
			});
		};

		event.preventDefault();

		if(!$selectedElem.hasClass('selected')) {
			$navSelection.animate({ width: '0' }, 100, goAwayAndComeBack);
		}
	};

	$navElem.click(navTransition);
}

$(ready);



