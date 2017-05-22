/** 
	******************************************************************************************************************
	** Create a variable of the App
	** Created by: Mark Fasel
	** Copyright 2017
	** Last Modified: 05/22/2017
	** 
		Description: 
		
		This file is used for the transitions of the baby step pages and the ajax calls with lodash. Alternatives
		for lodash could also be used such as underscore. I used an object literal notation for this JavaScript file
		for an easy to read approach, but can adapt to any JavaScript design pattern desired.
		
		Modernizr is used for checking if the browser supports CSS transitions. If it does, it uses CSS3 by applying
		classes to the element. If not, it uses jQuery to animate css properties.
	**
	******************************************************************************************************************
**/
var app = {
    config : {
        // Set Up Variables
        allStepItems : $("nav li"),
        mainNavigation : $("nav li a"),
        stepCount : $("nav li a").data("step"),
        stepContent : $(".content--main section"),
        stepSection : $(".content--main section").data("section"),
        json : "../baby-steps.json"
    },

    init : function(config) {
	    // Call methods		
		app.stepTransition();
		app.getFriends();
    },
    
    stepTransition : function() {
	    
	    // Set click function for navigation to start transition of content
	    app.config.mainNavigation.click(function(e) {
		
			// Prevent page jump
			e.preventDefault();
			
			// Let's check that the item clicked isn't the current item - if so return false to prevent a double click
			if($(this).parent().hasClass('active')){
				return false;
		   	}
			
			// Let's check modernizr to see if the browser supports css transitions. 
			// If not, let's animate with JS, if it does we'll animate using CSS3
			if(!Modernizr.csstransitions) { 
				$(".content--main section.active").animate({top: '-500px', opacity: 0}, {duration: 700, easing: 'easeInQuart'}).removeClass("active"); // Removes active class after running the animate out sequence
				$(".content--main section#step"+$(this).data('step')).delay(700).animate({top: '0' , opacity: 1}, {duration: 700, easing: 'easeOutQuart'}).addClass("active"); // Adds the active class after running the animate in sequence
			} else {
				$(".content--main section.active").addClass("fade-out-up").removeClass("active"); // Removes active class from section
				$(".content--main section#step"+$(this).data('step')).removeClass('hidden').addClass("active"); // Removes hidden class and adds active class
			}			
			
			app.config.allStepItems.removeClass('active'); // Remove active class
			
			// Add active class to the newly selected item
			$(this).parent().addClass("active active--step" + $(this).data('step'));
		});
		
    },
    
    getFriends : function() {
	    
	    // JSON request for the data
        $.getJSON(app.config.json, function(response) {
	        
	        // Create friends object
	        var friendsObj = {};
	        
	        // Create local variable for holding the response
	        var friends = response.friends;
	        
	        // Let's sort the object using lodash by step and last name
	        friends = _.sortBy(friends, ['babyStep', 'lastName'] );
	        
	        // Create a new object with the friends data that reduces the obj and sorts it by step
	        friendsObj = app.buildFriendsObj(friends);
	
	        // Let's add the object to the current step content
	        app.addFriendsToStep(friendsObj);
		});
    },
	
	buildFriendsObj : function(obj) {
		// Create a local variable to store friend name
		var friendName;
		
		// Reduce the object by combining all friends in a step to an obj based off the step number - using transform, but reduce could also be used and would require returning the result
	  	var newObj = _.transform(obj, function(result, friendObj) {
		  	// Build the friend name from the friend object with first and last name
			friendName = friendObj.firstName + " " + friendObj.lastName;
			(result[friendObj.babyStep] || (result[friendObj.babyStep] = [])).push(friendName); // Push the names in the step obj
		}, {});
		return newObj; // Return the newObj
	},
	
	addFriendsToStep : function(obj) {
		
		// Loop over the obj
        _.each(obj, function(friends, step) {
	        
	        // Create local variable for the message output
			var msg;
			
			// Check the step and build out the text for display based on the baby step number
			if (step == 2) { // Start with 2 because no message is to be outputted for step 1
				msg = "<a href='#'>" + friends[0] + "</a> is also in Baby Step " + step;
			} else if (step == 3) {
				msg = "<a href='#'>" + friends[0] + "</a> and <a href='#'>" + friends[1] +
			  "</a> are also in Baby Step " + step;
			} else if (step == 4) {
				msg = "<a href='#'>" + friends[0] + "</a>, <a href='#'>" + friends[1] +
			  "</a> and 1 other friend are also in Baby Step " + step;
			} else if (step > 4) { // If the step is greater than 4 follow this condition - check the current length of the obj and reduce by the number of friends currently displayed (2)
				msg = "<a href='#'>" + friends[0] + "</a>, <a href='#'>" + friends[1] +
			  "</a> and " + (friends.length - 2) + " other friends are also in Baby Step "
			  + step;
			} 
			// Append the messge to the content of the step
			$( "<p class='friends'>" + msg + "</p>").appendTo("#step" + step + ' .step--content');
        });
	}
    
};

/** 
	*********************************************************
	** Run the App
	*********************************************************
**/	
$(document).ready(function() { app.init(); });