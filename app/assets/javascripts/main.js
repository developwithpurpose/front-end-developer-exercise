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

	$.getJSON( "http://localhost:9001/app/assets/javascripts/baby-steps.json", function( data ) {
		var othersSwitch = false;
		var babyStepCount1 = 0,
			babyStepCount2 = 0,
			babyStepCount3 = 0,
			babyStepCount4 = 0,
			babyStepCount5 = 0,
			babyStepCount6 = 0,
			babyStepCount7 = 0;
		for (var i = 0; i < data.friends.length; i++) {
			
			switch (data.friends[i].babyStep) {
				case 1:
					var theBabyStep = 1;
					++babyStepCount1;
					break; 
				case 2:
					var theBabyStep = 2;
					++babyStepCount2;
					break; 
				case 3:
					var theBabyStep = 3;
					++babyStepCount3;
					break;
				case 4:
					var theBabyStep = 4;
					++babyStepCount4;
					break;
				case 5:
					var theBabyStep = 5;
					++babyStepCount5;
					break;
				case 6:
					var theBabyStep = 6;
					++babyStepCount6;
					break;
				case 7:
					var theBabyStep = 7;
					++babyStepCount7;
					break;
				default: 
					return false;
			}

			// if(babyStepCount7 < 2){
			// 	// appends each name within <span> tags so :after pseduo element can add commas except for on the last child 
			// 	$('.friends-list-' + theBabyStep).append('<span>' + data.friends[i].firstName + " " + data.friends[i].lastName + '</span>');
			// };

			// if(babyStepCount7 > 2 && othersSwitch === false){
			// 	$('.friends-list-' + theBabyStep).append('<p>and ' + (2) + ' Other Friends are on this step.</p>');
			// 	var othersSwitch = true;
			// };

		}
		
	});
})
