(function() {

	"use strict";

	var babySteps = {

		onNavClick: function() {

			var $linkURL = $(this).attr("href"),
				activeClass = "active";
			
			$(".nav-link").on("click", function(){

				$(".baby-step").removeClass(activeClass);

				$($linkURL).addClass(activeClass);

				$("nav a").removeClass(activeClass);

				$(this).addClass(activeClass);

				return false;

			});

		},
		displayJSON: function() {
			
			$.getJSON("/app/assets/javascripts/baby-steps.json", function(data) {
				
				var friends = data.friends;



			});
			
		}

	};


	$(document).ready(function() {
		babySteps.onNavClick();
		babySteps.displayJSON();
	});

})();