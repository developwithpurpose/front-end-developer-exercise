/*

Author: Stephen Bussard

Style explanation

- perform jQuery selector queries in advance when possible to avoid redundant computations
- declare variables at beginning of each scope for readability
- name non-trivial functions to avoid spaghetti code
- ...then make it pass jshint spec to make everyone else happy

*/

function ready() {
	var articleHeight = 620,
		$navLink = $("nav > a"),
		$main = $("main"),
		$article = $("article"),
		$navSelection = $("#navSelection"),
		lastIndex = 99, // used to prevent crazy transition glitches
		$selectedLink = $navLink.eq(lastIndex),
		$selectedArticle = $article.eq(lastIndex),
		scrollSnapTimeout, // used to snap to a baby step <article> when user stops scrolling
		disableScrollEvent = false; // to prevent multiple transition triggers

	// must not trigger other events!
	function selectStep(index) {
		var linkOffset,
			articleOffset,
			time = 100;

		$selectedLink = $navLink.eq(index);
		$selectedArticle = $article.eq(index);

		linkOffset = $selectedLink.position().top + "px";
		articleOffset = $selectedArticle.position().top + "px";

		$navLink.removeClass("selected");
		$article.removeClass("selected");
		$navSelection.animate({ width: 0 }, time, function() {
			$navSelection.css({ top: linkOffset });
			$navSelection.animate({ width: "300px"}, time, function() {
				$selectedLink.addClass("selected");
				$selectedArticle.addClass("selected");
			});
		});
	}

	function scrollToSelectedArticle(index) {
		var articlePos = articleHeight * index;

		disableScrollEvent = true;
		$main.animate({ scrollTop: articlePos }, 100, function() {
			disableScrollEvent = false;
		});
	}

	function navClick() {
		var index;

		if($selectedLink[0] !== $(this)[0]) {
			$selectedLink = $(this);
			index = $selectedLink.index();
			scrollToSelectedArticle(index);
			selectStep(index);
		}
	}

	function mainScroll() {
		var pos = $main.scrollTop(),
			rem = pos % articleHeight,
			index = (pos - rem) / articleHeight,
			scrollSnap;

		index = (rem < articleHeight * 0.5) ? index : index + 1;

		scrollSnap = function() {
			scrollToSelectedArticle(index);
		};

		if(index !== lastIndex && !disableScrollEvent) {
			selectStep(index);
		}

		lastIndex = index;

		window.clearTimeout(scrollSnapTimeout);
		scrollSnapTimeout = window.setTimeout(scrollSnap, 75);
	}

	function loadFriendData() {
		var url = "assets/javascripts/baby-steps.json",
			babySteps = [[],[],[],[],[],[],[]], // index + 1 corresponds to baby step, value is list of friends
			templates = [ // index corresponds to number of friends
				" ", // blank space is truthy
				"<a href=\"\">{name1}</a> is also in Baby Step {babyStep}",
				"<a href=\"\">{name1}</a> and <a href=\"\">{name2}</a> are also in Baby Step {babyStep}",
				"<a href=\"\">{name1}</a>, <a href=\"\">{name2}</a>, and 1 other friend are also in Baby Step {babyStep}",
				"<a href=\"\">{name1}</a>, <a href=\"\">{name2}</a>, and {m} other friends are also in Baby Step {babyStep}"
			],
			friend,
			step;

		// inserts values into template
		function compileTemplate(variables) {
			var template = templates[variables.n] || templates[4],
				v;

			for(v in variables) {
				template = template.replace("{" + v + "}", variables[v]);
			}

			return template;
		}

		$.get(url, function(data) {
			for(n = 0; n < data.friends.length; n++) {
				friend = data.friends[n];
				babySteps[friend.babyStep - 1].push(friend);
			}

			for(step = 1; step < babySteps.length + 1; step++) {
				var babyStep = step,
					friends = babySteps[step - 1],
					n = friends.length,
					variables = {
						babyStep: babyStep,
						name1: "",
						name2: "",
						n: n,
						m: 0
					};

				// switch case didn"t seem dry enough
				if(n > 0) { variables.name1 = friends[0].firstName + " " + friends[0].lastName; } // n == 1
				if(n > 1) { variables.name2 = friends[1].firstName + " " + friends[1].lastName; } // n == 2
				if(n >= 4) { variables.m = n - 2; } // n == 4+

				$(".step" + step + ".friends").html(compileTemplate(variables));
			}
		});
	}

	function parseRoute() {
		var step = window.location.href.split("step")[1] - 1 || 0;
		$navLink.eq(step).click();
	}

	$navLink.click(navClick);
	$main.scroll(mainScroll);

	loadFriendData();
	parseRoute();
}

$(ready);