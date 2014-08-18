// The navigation manager controls the look of the
// sidebar buttons and also controls which step is
// currently displayed to the user.
var navigationManager = {
	
	// Property used to track which step the user is currently viewing
	currentStep : 0,
	
	// Called when user clicks a navigation item in the sidebar.
	// 'index' is the 0-based index of the navigation item.
	selectStep : function(index) {
	
		// Do nothing if user selects the step he or she is currently
		// viewing.
		if(index !== this.currentStep && index >= 0)
		{
			// Hide current step and deselect step's navigation menu item.
			$(".stepDescr").eq(this.currentStep).hide();
			this.deselectNavItem(this.currentStep);
			
			this.currentStep = index;
			
			// Highlight the navigation menu item and sow the user-selected step .
			this.selectNavItem(this.currentStep);
			$(".stepDescr").eq(this.currentStep).fadeIn(400);
		}
	},
	
	// Highlights the user-selected navigation item and shows the item's selected
	// indicator image.
	selectNavItem: function(index) {
		$(".navItem").eq(index).addClass('selectedNavItem');
		$(".unselectedImage").eq(index).hide();
		$(".selectedImage").eq(index).show();
	},
	
	// Un-highlights the user-selected navigation item and shows the item's deselected
	// indicator image.
	deselectNavItem: function(index) {
		$(".navItem").eq(index).removeClass('selectedNavItem');
		$(".selectedImage").eq(index).hide();
		$(".unselectedImage").eq(index).show();						
	}
};

// The social manager controls the text displayed at the bottom of each step indicating
// which of the user's friends are also in the selected step.
var socialManager = {

	// Utilizes AJAX to retrieve JSON data containing all friends and the step in
	// which they are currently pursuing.
	updateFriendsInSteps : function() {
		that = this;
		$.ajax({
			url: "./assets/javascripts/baby-steps.json",
			cache: false,
			success: function(data){
				// Once data is retrieved from the server, parse the
				// data and update the site.
				that.updateSocialContainers(data.friends);				
			},
			fail: function(){
				// Not a requirement but it may be useful to
				// let the user know that the section is unable to
				// load the latest social data
			},
			datatype: "json"
		});
	},
	
	// This method updates each baby step section of the site to display
	// the friends currently pursuing the selected step.
	updateSocialContainers : function(friends){
		
		// Create an array that will hold a different array for each baby step.
		var friendsByStep = new Array();
		// Used for testing. Holds the number of friends in each step.
		var countFriendsByStep = new Array();
		
		// Define a function to provide an order for sorting an array of friends by last name.
		// Users with the same last names are left in the order they were received from the server.
		var sortByLastName = function(x,y) {
			return ((x.lastName === y.lastName) ? 0 : ((x.lastName > y.lastName) ? 1 : -1));
		}		 
		
		// Loop through the friends retrieved from the server and place each friend
		// into an array according to the step they are in. 'friendsByStep' will 
		// contain an array of arrays upon completion.
		var index;
		for (index = 0; index < friends.length; ++index) {
			// Create a new array to hold friends in the same step if one does
			// not already exist.
			if(!(friendsByStep[friends[index].babyStep] instanceof Array))
			{
				friendsByStep[friends[index].babyStep] = new Array();
			}
			// Store the friend in his or hers associated 'step' array
			friendsByStep[friends[index].babyStep].push(friends[index]);
		}
		
		// Clear old social data once the full return data has been traversed		
		$(".socialContainer").html("");
		 
		 // Loop through the newly populated friendsByStep array to update each step section
		 // with the user data retrieved from the server.
		for (index = 0; index < friendsByStep.length; ++index)
		{
			// If there are friends in the step...
			if(friendsByStep[index] != null)
			{
				var friendsInStep = friendsByStep[index]; // friendly name for the array containing all friends in a step
				var friendCount = friendsInStep.length;
				var socialMessage = "";
				var step = friendsInStep[0].babyStep;

				if(friendCount === 1)
				{
					socialMessage = "<a href=\"#\">" + friendsInStep[0].firstName + " " + friendsInStep[0].lastName + 
									"</a> is also in Baby Step " + step;
				}
				else if(friendCount > 1)
				{
					friendsInStep.sort(sortByLastName);
					
					if(friendCount === 2)
					{
						socialMessage = "<a href=\"#\">" + friendsInStep[0].firstName + " " + friendsInStep[0].lastName +
										"</a> and <a href=\"#\">" + friendsInStep[1].firstName + " " + friendsInStep[1].lastName +				
										"</a> are also in Baby Step " + step;
					}
					else if(friendCount === 3)
					{
						socialMessage = "<a href=\"#\">" + friendsInStep[0].firstName + " " + friendsInStep[0].lastName +
										"</a>, <a href=\"#\">" + friendsInStep[1].firstName + " " + friendsInStep[1].lastName +				
										"</a>, and 1 other friends are also in Baby Step " + 
										step;
					}
					else if(friendCount >= 4)
					{
						socialMessage = "<a href=\"#\">" + friendsInStep[0].firstName + " " + friendsInStep[0].lastName +
										"</a>, <a href=\"#\">" + friendsInStep[1].firstName + " " + friendsInStep[1].lastName +				
										"</a>, and " + (friendCount - 2) + " other friends are also in Baby Step " +
										step;
					}
				}
				
				// Set the message indicating the friends in the current step.
				$(".socialContainer").eq(step - 1).html(socialMessage);
				
				// Store number of friends in the step for testing purposes.
				countFriendsByStep[step - 1] = friendCount;
			}
		}
		return countFriendsByStep;
	}
}

$(document).ready(function() {
	socialManager.updateFriendsInSteps();
	$(".navItem").click(function() {
		navigationManager.selectStep($(this).index());
		socialManager.updateFriendsInSteps();
	});	  
});
