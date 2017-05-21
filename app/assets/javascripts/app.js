$(document).ready(function() {
    var app = {};

    app.init = function() {

		/* Set Up Variables */
		var $allStepItems = $("nav li");
		var $mainNavigation = $("nav li a");
		var $stepCount = $("nav li a").data("step");
		var $stepContent = $(".content--main section");
		var $stepSection = $(".content--main section").data("section");
		var data = "../baby-steps.json";
		

		$mainNavigation.click(function(event) {
		
			// Prevent page jump
			event.preventDefault();
			
			// Remove Classes from everything before we reapply
			$(".content--main section.active").addClass("fade-out-up").removeClass("active"); // Remove from section
			//$allStepItems.removeClass("active"); // Remove from nav item
			
			var $currentItem = $('nav li.active');
			$currentItem.addClass("fade-out-up").removeClass('active');
			
			// Add active class to the newly selected item
			$(this).parent().addClass("active active--step" + $(this).data('step'));
			$(".content--main section#step"+$(this).data('step')).removeClass('hidden').addClass("active");
		});

    };

    /**
		************************************** 
			Initialize the App
		**************************************
	**/
    app.init();
});