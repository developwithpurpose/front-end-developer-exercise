/*

Author: Stephen Bussard

Style explanation

- perform jQuery selector queries in advance to avoid redundant computations
- declare variables at beginning of each scope for readability 
- name non-trivial functions to avoid spaghetti code

*/

function ready() {
	var articleHeight = 620;
	var $navLink = $('nav > a');
	var $main = $('main');
	var $article = $('article');
	var $navSelection = $('#navSelection');
	var $selectedLink = $navLink.eq(-1);
	var $selectedArticle = $article.eq(-1);
	var lastIndex = -1; // used to prevent crazy transition glitches
	var scrollSnapTimeout; // used to snap to a baby step <article> when user stops scrolling
	var disableScrollEvent = false; // to prevent multiple transition triggers

	// must not trigger other events!
	var selectStep = function(index) {
		var linkOffset;
		var articleOffset;
		var time = 100;

		$selectedLink = $navLink.eq(index);
		$selectedArticle = $article.eq(index);

		linkOffset = $selectedLink.position().top + 'px';
		articleOffset = $selectedArticle.position().top + 'px';

		$navLink.removeClass('selected');
		$article.removeClass('selected');
		$navSelection.animate({ width: 0 }, time, function() {
			$navSelection.css({ top: linkOffset });
			$navSelection.animate({ width: '300px'}, time, function() {
				$selectedLink.addClass('selected');
				$selectedArticle.addClass('selected');
			});
		});
	};

	var scrollToSelectedArticle = function(index) {
		var articlePos = articleHeight * index;
		disableScrollEvent = true;
		$main.animate({ scrollTop: articlePos }, 100, function() {
			disableScrollEvent = false;
		});
	};

	var navClick = function(event) {
		var index;

		if($selectedLink[0] != $(this)[0]) {
			$selectedLink = $(this);
			index = $selectedLink.index();
			scrollToSelectedArticle(index);
			selectStep(index);
		}
	};

	var mainScroll = function(event) {
		var pos = $main.scrollTop();
		var rem = pos % articleHeight;
		var index = (pos - rem) / articleHeight;
		index = (rem < articleHeight * 0.5) ? index : index + 1;

		var scrollSnap = function() {
			scrollToSelectedArticle(index);
		};

		if(index != lastIndex && !disableScrollEvent) {
			selectStep(index);
		}

		lastIndex = index;

		clearTimeout(scrollSnapTimeout);
		scrollSnapTimeout = setTimeout(scrollSnap, 75);
	};

	// probably not seo friendly :-(
	// would probably use another third party library to handle this in production
	// TODO: fix odd error loading #/step7 - for time's sake, #wontfix
	var parseRoute = function() {
		var step = location.href.split('step')[1] - 1 || 0;
		$navLink.eq(step).click();
	};

	$navLink.click(navClick);
	$main.scroll(mainScroll);

	parseRoute();
};

$(ready);



