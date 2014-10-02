(function(){

	"use strict";

	var babySteps = {

		onNavClick: function() {
			
			$(".nav-link").on("click", function(){

				var $linkURL = $(this).attr("href"),
					$babyStep = $(".baby-step"),
					$navLink = $("nav a"),
					activeClass = "active";

				/* jQuery Animate if CSS animations are unsupported per Modernizr */
				if(!Modernizr.cssanimations) {

					$babyStep.css("display", "none");

					$($linkURL).css({
						"display": "block",
						"opacity": "0",
						"padding-top": "18px"
					});
					
					$($linkURL).animate({
						opacity: 1,
						"padding-top": 0
					}, {
						duration: 250,
						done: function() {
							$(this).addClass(activeClass);
						}
					});

				} else {

					/* Use CSS3 Animation technique if supported per Modernizr */

					$babyStep.removeClass(activeClass);
					$($linkURL).addClass(activeClass);

				}

				$navLink.removeClass(activeClass);
				$(this).addClass(activeClass);

				return false;

			});

		},
		displayJSON: function() {

			var friendsList = $(".friends-list"),
				JSONUrl = "assets/javascripts/baby-steps.json",
				friends = [];

			/* Grab the JSON object via jQuery getJSON method */
			$.getJSON(JSONUrl, function(data) {

				var dataFriends = data.friends,
					i;

				/* Dump Friends objects into an array to only have to reference the JSOn file once */
				for(i = 0; i < dataFriends.length; i++) {
					friends.push(dataFriends[i]);
				}

				/* 
					For each .friends-list instance loop through the friends array. 
					Find friends whose baby step matches the .friends-list index. 
					When those are found, populate the .friends-list paragraph 
				*/
				$(friendsList).each(function(index){

					var $this = $(this),
						friendsOnBabyStep = [],
						multipleFriendDisplay = [],
						j;

					for(j = 0; j < friends.length; j++) {

						if(friends[j].babyStep === (index + 1)) {
							friendsOnBabyStep.push(friends[j]);
						}

					}

					if(friendsOnBabyStep.length === 1) {
						$this.append("<a href=\'#\'>" + friendsOnBabyStep[0].firstName + " " + friendsOnBabyStep[0].lastName + "<\/a>" + " is also on Baby Step " + (index + 1));
					} else if(friendsOnBabyStep.length === 2) {
						$this.append("<a href=\'#\'>" + friendsOnBabyStep[0].firstName + " " + friendsOnBabyStep[0].lastName + "<\/a>" + " and " + "<a href=\'#\'>" + friendsOnBabyStep[1].firstName + " " + friendsOnBabyStep[1].lastName + "<\/a>" + " are also on Baby Step " + (index + 1));
					} else if(friendsOnBabyStep.length >= 3) {
						multipleFriendDisplay = friendsOnBabyStep.slice(2);
						$this.append("<a href=\'#\'>" + friendsOnBabyStep[0].firstName + " " + friendsOnBabyStep[0].lastName + "<\/a>, <a href=\'#\'>" + friendsOnBabyStep[1].firstName + " " + friendsOnBabyStep[1].lastName + "<\/a> and " + multipleFriendDisplay.length + " more are also on Baby Step " + (index + 1));
					}

				});

			});
		}

	};

	/* Initialize babySteps functions when document is ready */
	$(document).ready(function() {
		babySteps.onNavClick();
		babySteps.displayJSON();
	});

})();