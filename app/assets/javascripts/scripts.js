$( document ).ready(function() {
	
	function getfriends() {
	
	 $.getJSON('baby-steps.json', function(data) {
         
		  babystep1 = 0
		  babystep2 = 0
		  babystep3 = 0
		  babystep4 = 0
		  babystep5 = 0
		  babystep6 = 0
		  babystep7 = 0
		  
		  babystep1names = [];
		  babystep2names = [];
		  babystep3names = [];
		  babystep4names = [];
		  babystep5names = [];
		  babystep6names = [];
		  babystep7names = [];

		  $.each(data.friends, function(key, val) {
			  
   			 babystep = val.babyStep
			           
			 if (babystep == 1) {
				babystep1++;
				babystep1names.push(val.firstName + " " +  val.lastName);
			 } else if (babystep == 2) {
				 babystep2++;
				 babystep2names.push(val.firstName + " " +  val.lastName);
			 } else if (babystep == 3) { 
			    babystep3++;
				babystep3names.push(val.firstName + " " +  val.lastName);
			 } else if (babystep == 4) {
				 babystep4++;
				 babystep4names.push(val.firstName + " " +  val.lastName);
			 } else if (babystep == 5) { 
			    babystep5++;
				babystep5names.push(val.firstName + " " +  val.lastName);
			 } else if (babystep == 6) { 
			    babystep6++;
				babystep6names.push(val.firstName + " " +  val.lastName);
			 } else if (babystep == 7) { 
			    babystep7++;
				babystep7names.push(val.firstName + " " +  val.lastName);
			 }
		 });
			
		 if (step === "#babystep1") {
			babystepnumber = 1
			babystepcount = babystep1
			babystepnames = babystep1names
			countremaining = babystepcount - 2
		 } else if (step === "#babystep2") {
			babystepnumber = 2
			babystepcount = babystep2
			babystepnames = babystep2names
			countremaining = babystepcount - 2
		 } else if (step === "#babystep3") {
			babystepnumber = 3
			babystepcount = babystep3
			babystepnames = babystep3names
			countremaining = babystepcount - 2
		 } else if (step === "#babystep4") {
			babystepnumber = 4
			babystepcount = babystep4
			babystepnames = babystep4names
			countremaining = babystepcount - 2
		 } else if (step === "#babystep5") {
			babystepnumber = 5
			babystepcount = babystep5
			babystepnames = babystep5names
			countremaining = babystepcount - 2
		 } else if (step === "#babystep6") {
			babystepnumber = 6
			babystepcount = babystep6
			babystepnames = babystep6names
			countremaining = babystepcount - 2
		 } else if (step === "#babystep7") {
			babystepnumber = 7
			babystepcount = babystep7
			babystepnames = babystep7names
			countremaining = babystepcount - 2
		 }
	 });	
	
	}
	
	
	$( "a[href^='#']" ).click(function(event) {
		
		getfriends();

		$(".message").hide();
				
		step = this.getAttribute('href')
		
	   var clicked_idx = $(step).index();
       var div_height = $(step).height();
       var scroll_to = clicked_idx * div_height;
	   
	   event.preventDefault();
		$("#main").animate({ 
			scrollTop: scroll_to 
		}, function(){
      	    	if (babystepcount == 0) {
					$(".message").html("").fadeIn();
				} else if (babystepcount == 1) {
				 	$(".message").html("<span>" + babystepnames[0] + "</span> is also in Baby Step " + babystepnumber).fadeIn();
			    } else if (babystepcount == 2) { 
			    	$(".message").html("<span>" + babystepnames[0] + "</span> and <span>" + babystepnames[1] + "</span> are also in Baby Step " + babystepnumber).fadeIn();
			    } else if (babystepcount == 3) {
				  	$(".message").html("<span>" + babystepnames[0] + "</span>, <span>" + babystepnames[1] + "</span>, and" + countremaining + " other friend are also in Baby Step " + babystepnumber).fadeIn();
				} else if (babystepcount >= 4) { 
			    	$(".message").html("<span>" + babystepnames[0] + "</span>, <span>" + babystepnames[1] + "</span>, and " + countremaining + " other friends are also in Baby Step " + babystepnumber).fadeIn();
				}
    	}
		
		);
				
	});
});