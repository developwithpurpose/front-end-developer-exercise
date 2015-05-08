$(document).ready(function(){


	// was having dreadful time getting conditional CSS to work for IE, so fell back to JS detection
	// function borrowed & modified from: http://stackoverflow.com/a/19999868
	function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){      // If Internet Explorer, return version number
            return true;
        } else {
        	return false;
        }
	}

	// if not using IE, then add the flipper class to the first nav tab (baby step #1)
	// if using IE, then use the class .ie-hover for tab animation when hovering
	if(msieversion() == false){
		$('.baby-step:first-child .flipper').addClass('activate-flipper');
	} else {
		$('.baby-step:first-child .flipper').addClass('ie-activated');
		$('.baby-step:first-child').addClass('alter-icon');
		$('.flipper').hover(function(){$(this).toggleClass('ie-hover');});
	}
	
	// when baby step is clicked, execute animation and move appropriate content into view
	$('.baby-step').click(function(){
		var stepID = $(this).attr('data-step'),
			IDLength = stepID.length;
			lastChar = stepID.charAt(IDLength - 1);

		$(".baby-step").removeClass("alter-icon");
		$(this).addClass("alter-icon");

		// apply tab transition if not using Internet Explorer
		if(msieversion() == false){
			// unflips any selected tabs, flips the selected one
			$('.flipper').removeClass('activate-flipper');
			$(this).children('.flipper').addClass('activate-flipper');
		} else {
			$('.flipper').removeClass('ie-hover');
			$('.flipper').removeClass('ie-activated');
			$(this).children('.flipper').addClass('ie-activated');
		}

		// move different baby steps into view by adjusting left margin
		$('.step-content-holder').animate({
			   "margin-left": "-" + (lastChar-1)*100 + "%"
			}, 300);
		});

	$.getJSON( "http://localhost:9001/app/assets/javascripts/baby-steps.json", function( data ) {

		// filler profilelink variable that could be swapped out for the link in JSON.
		var profileLink = "http://macarthur.me";

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
				$('.friends-list-' + theBabyStep).prepend("<span class='name-span'><a href='" + profileLink + "'>"  + data.friends[i].firstName + " " + data.friends[i].lastName + "</a></span>");
			};
			
			// place an 'and' between the names if there are only two on that particular baby step
			// if there are more than two people on the baby step, then remove any 'and's that were placed there
			if(thisStepCount == 2){
				$('.friends-list-' + theBabyStep + ' span:first-of-type').append("<aside> and </aside>");
				$('.friends-list-' + theBabyStep + ' span').addClass('remove-comma');
			} else if (thisStepCount > 2) {
				$('.friends-list-' + theBabyStep + '  aside').remove();
				$('.friends-list-' + theBabyStep + ' span').removeClass('remove-comma');
			}
												
			// only show other friends count if there are more than two friends on this step
			if(thisStepCount > 2){	
			
				// based on the count, set the word choice for appended text
				if(thisStepCount <= 3){
					var wordChoice = "Friend is";
				} else {
					var wordChoice = "Friends are";
				}
					
				// each time, replace .appended-text with the updated count, minus two since they're listed as spans
				// note that it's replaced with another 'appended-text' class instance -- otherwise, future replacements wouldn't work
				$('.friends-list-' + theBabyStep + ' .appended-text').replaceWith("<p class='appended-text'> and " + (thisStepCount - 2) + " Other " + wordChoice + " on this step</p>");
			
			// if there are only one or two friends, then append slightly different text
			} else {
				
				// based on the count, set the word choice for appended text
				if(thisStepCount == 1){
					var wordChoice = "is";
				} else {
					var wordChoice = "are";
				}
				
				// replace the appropriate 'appended-text' class instance with the correct text
				$('.friends-list-' + theBabyStep + ' .appended-text').replaceWith("<p class='appended-text'> " + wordChoice + " on this step</p>");				
			}
				
		}

	});
})
