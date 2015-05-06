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
		for (var i = 0; i < data.friends.length; i++) {
			
			if(data.friends[i].babyStep == (i+1)){
				$('.friends-list-' + (i+1)).append(data.friends[i].firstName);
			}
					
		switch (data.friends[i].babyStep) {
			case 1:
				var varBabyStep = 1;
				alert(varBabyStep);
				break; 
			case 2:
				var varBabyStep = 2;
				alert(varBabyStep);
				break; 
			default: 
				return true;
		}
		
		$('.friends-list-' + varBabyStep).append(data.friends[i].firstName);
			
		}
	});
})
