$(document).ready(function(){
	
	// when baby step is clicked, execute animation and move appropriate content into view
	$('.baby-step').click(function(){
		var stepID = $(this).attr('data-step'),
			IDLength = stepID.length;
			lastChar = stepID.charAt(IDLength - 1);

		// unflips any selected tabs, flips the selected one
		$('.flipper').removeClass('activate-flipper');
		$(this).children('.flipper').addClass('activate-flipper');

		// move different baby steps into view by adjusting left margin
		$('.step-content-holder').animate({
			   "margin-left": "-" + (lastChar-1)*100 + "%"
			}, 300);
		});

	$.getJSON( "http://localhost:9001/app/assets/javascripts/baby-steps.json", function( data ) {

		// start counting how many people are in each step outside the loop so they're not overwritten each time
		var step1Count = 0,
			step2Count = 0,
			step3Count = 0,
			step4Count = 0,
			step5Count = 0,
			step6Count = 0,
			step7Count = 0;

		for (var i = 0; i < data.friends.length; i++) {

			// counts the number of list names as span items, so it can stop after getting to two per step
			var spanCount = $(('.friends-list-' + theBabyStep) + " span").length;
			
			// define in which baby step we're dealing with when looping through each item
			// also, save the count for the respective step as a more generic variable so we can use it to output 'other friends' later on
			switch (data.friends[i].babyStep) {
				case 1:
					var theBabyStep = 1;
					++step1Count;
					var thisStepCount = step1Count;
					break; 
				case 2:
					var theBabyStep = 2;
					++step2Count;
					var thisStepCount = step2Count;
					break; 
				case 3:
					var theBabyStep = 3;
					++step3Count;
					var thisStepCount = step3Count;
					break;
				case 4:
					var theBabyStep = 4;
					++step4Count;
					var thisStepCount = step4Count;
					break;
				case 5:
					var theBabyStep = 5;
					++step5Count;
					var thisStepCount = step5Count;
					break;
				case 6:
					var theBabyStep = 6;
					++step6Count;
					var thisStepCount = step6Count;
					break;
				case 7:
					var theBabyStep = 7;
					++step7Count;
					var thisStepCount = step7Count;
					break;
				default: 
					return false;
			}
	
	

			// only append more span tags & names if the current count isn't already at 2
			if(spanCount < 2){
				// appends each name within <span> tags so :after pseduo element can add commas except for on the last child 
				$('.friends-list-' + theBabyStep).append('<span>' + data.friends[i].firstName + " " + data.friends[i].lastName + '</span>');
			};
			
			if(thisStepCount == 2){
				$('.friends-list-' + theBabyStep + ' span:first-child').append(' <p class="and">and</p>');
				$('.friends-list-' + theBabyStep + ' span:after').css('display','none');
			}
			
			// only show other friends count if there are more than two friends on this step
			if(thisStepCount > 2){	
				// each time, replace .others-list with the updated count, minus two since they're listed as spans
				// note that it's replaced with another 'others-list' class instance -- otherwise, future replacements wouldn't work
				$('.friends-list-' + theBabyStep + '+ .others-list').replaceWith("<p class='others-list'>and " + (thisStepCount - 2) + " Other Friends are on this step.</p>");
			}

		}
		
		

	});
})
