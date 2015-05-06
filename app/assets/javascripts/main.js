$(document).ready(function(){
	
	$('.baby-step').click(function(){
		var stepID = $(this).attr('data-step'),
			IDLength = stepID.length;
			lastChar = stepID.charAt(IDLength - 1);

		// unflips any selected tabs, flips the selected one
		$('.flipper').removeClass('activate-flipper');
		$(this).children('.flipper').addClass('activate-flipper');

		// moves different steps into view
		$('.step-content-holder').animate({
			   "margin-left": "-" + (lastChar-1)*100 + "%"
			}, 300);
		});

	// $.getJSON( "http://localhost:9001/app/assets/javascripts/baby-steps.json", function( data ) {
	// 	  
	// 	});
})
