var babySteps = {

	onNavClick: function() {
		$(".nav-link").click(function(){

			var linkURL = $(this).attr("href");

			$(".baby-step").removeClass("active");

			$(linkURL).addClass("active");

			$("nav a").removeClass("active");

			$(this).addClass("active");

		});
	}

};


$(document).ready(babySteps.onNavClick);