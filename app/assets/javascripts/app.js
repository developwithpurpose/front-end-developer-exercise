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
			
			// Let's check that the item clicked isn't the current item - if so return false to prevent a double click
			if($(this).parent().hasClass('active')){
				return false;
		   	}
			
			// Let's check modernizr to see if the browser supports css transitions. 
			// If not, let's animate with JS, if it does we'll animate using CSS3
			if(!Modernizr.csstransitions) { 
				$(".content--main section.active").animate({top: '-500px', opacity: 0}, {duration: 700, easing: 'easeInQuart'}).removeClass("active");
				$(".content--main section#step"+$(this).data('step')).delay(700).animate({top: '0' , opacity: 1}, {duration: 700, easing: 'easeOutQuart'}).addClass("active");
			} else {
				$(".content--main section.active").addClass("fade-out-up").removeClass("active"); // Remove from section
				$(".content--main section#step"+$(this).data('step')).removeClass('hidden').addClass("active");
			}			
			
			var $currentItem = $('nav li.active'); // Sets Current Nav Item
			$allStepItems.removeClass('active'); // Remove 
			
			// Add active class to the newly selected item
			$(this).parent().addClass("active active--step" + $(this).data('step'));
			
			
		});
		
		$slideOutAnimationFallback = function() {
			if(!Modernizr.csstransitions) { // Test if CSS transitions are supported
	            $(function() {
	                $('#js').hover(function(){
	                    $(this).animate({width:'50px',height:'50px'},{queue:false,duration:500});
	                }, function(){
	                    $(this).animate({width:'100px',height:'100px'},{queue:false,duration:500});
	                });
	            });
	        }
		}

    };

    /**
		************************************** 
			Initialize the App
		**************************************
	**/
    app.init();
});