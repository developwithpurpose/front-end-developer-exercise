$(document).ready(function(){
  // hide elements of the hidden class immediately
  $(".hidden").hide();
  
  $(".baby_step").off('click');
  $(".baby_step").on('click', function(){
    // check to see if the baby step selected has opacity class
    if($(this).hasClass('opacity')){
      // selected class has opacity class - add it to the baby step without it first
      // we need to find the class that does not have the class of opacity using our keyword of selected
      var element = $("div").find(".selected");
      // after finding the element, swap out selected for opacity in the element className
      element[0].className = "pure-u-1 pad_b10 pad_t5 baby_step is-right opacity";
      // using this, remove the class opacity and add the class selected
      $(this).removeClass("opacity").addClass("selected");
      // get the baby step that was selected
      var baby_step = $(this)[0].id.substring(10); 
        // with the overflow height set at 425, each of the paragraphs for the seven steps are also given a height of 425
        // subtract 1 from the current baby step then multiply by 425 to tell the scrollTop where to stop at
        var scroll_adjust = baby_step - 1;
        scroll_adjust = scroll_adjust * 425;
        
        $(".overflow").animate({
	  scrollTop: scroll_adjust
        }, 1500);

	var users = [];
	// get all the friends from the json file setting them to the value of all_users
        $.getJSON("assets/javascripts/baby-steps.json", function(all_users){
          // loop through the object of all_users 
          for(var i = 0; i < all_users.friends.length; i++){
	    // check to see if the baby step of the individual friend within all_users is equal to the current baby step selected
	    if(all_users.friends[i].babyStep == baby_step){
	      // if it is equal, push it to the array
	      users.push(all_users.friends[i]);
	    }
	  }
          // check to make sure the users array is not empty, then continue
	  if(users.length != 0){
            // sort the array first based on the last name of the friend
            users.sort(function(a,b){
	      // if last name is equal, check first name
              if(a["lastName"] == b["lastName"]){
	        return a["firstName"] > b["firstName"] ? 1 : -1;
	      }
	      // last name is not equal
	      else{
	        return a["lastName"] > b["lastName"] ? 1 : -1;
	      }
	    });
			  
          if(users.length >= 4){
	    count = users.length - 2;
	    $("#baby_step_" + baby_step + "_output").html("<span style='color: #4099ff;'>" + users[0].firstName + " " + 
	    users[0].lastName + ", " + users[1].firstName + " " + users[1].lastName + "</span> and " + count + 
	    " other friends are also on Baby Step " + baby_step);
	  }
	  else if(users.length == 3){
	    $("#baby_step_" + baby_step + "_output").html("<span style='color: #4099ff;'>" + users[0].firstName + " " + 
	    users[0].lastName + ", " + users[1].firstName + " " + users[1].lastName + "</span> and 1 other friend are on Baby Step " + baby_step);
          }
	  else if (users.length == 2){
	    $("#baby_step_" + baby_step + "_output").html("<span style='color: #4099ff;'>" + users[0].firstName + " " + 
	    users[0].lastName + ", " + users[1].firstName + " " + users[1].lastName + "</span> are also on Baby Step " + baby_step);
	  }
	  else{
	    $("#baby_step_" + baby_step + "_output").html("<span style='color: #4099ff;'>" + users[0].firstName + " " + 
	    users[0].lastName + "</span> are on Baby Step " + baby_step);
	  }
	} // end if check users.length
      }); // end $.getJSON
    } // end if check for opacity class
  }); // end on click
}); // end document ready

