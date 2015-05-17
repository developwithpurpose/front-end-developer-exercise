/***********************************
 * Global JS File
 * Contains all scripts common to the
 * entire site.
 * Created May 15, 2015
 **********************************/


/********** Global Functions **********/

// Display Friends on Baby Step
function displayFriends(){
	// declare variables
	var callback = function(json){
		var friends = json.friends;
		// put all data in its proper place
		$('.baby-step').each(function(){
			var id = $(this).attr('id');
			var babyStep = id.split('-')[3];
			var msg = buildMessage(friends, babyStep);
			$("#"+id).find('.baby-step-friends').html(msg);
		});
	};
	// get friends list
	getFriends(callback);
}


// Build Friends Message
function buildMessage(friends, babyStep){
	// declare variables
	var msg = "";
	var babyStepFriends = [];
	// consider only baby step friends
	for(i=0; i<friends.length; i++){
		if(friends[i].babyStep == babyStep && (friends[i].firstName || friends[i].lastName)){
			babyStepFriends.push(friends[i]);
		}
	}
	// sort friends list by last name
	if(babyStepFriends.length > 0){
		babyStepFriends.sortBy("lastName");
	}
	// build display message
	switch(babyStepFriends.length){
		case 0:
			msg = "";
			break;
		case 1:
			msg = '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[0]) + "</a> is on Baby Step " + babyStep;
			break;
		case 2:
			msg = '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[0]) + "</a> and " + '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[1]) + "</a> are on Baby Step " + babyStep;
			break;
		case 3:
			msg = '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[0]) + "</a>, " + '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[1]) + "</a> and 1 other friend are on Baby Step " + babyStep;
			break;
		default:
			msg = '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[0]) + "</a>, " + '<a href="#" class="baby-step-friends-name">' + formatName(babyStepFriends[1]) + "</a> and " + (babyStepFriends.length - 2) + " other friends are on Baby Step " + babyStep;
	}
	// return message
	return "<p>" + msg + "</p>";
}


// Get Friends List
function getFriends(callback){
	// declare variables
	var url = "assets/javascripts/baby-steps.json";
	var settings = {
		dataType: "json",
		success: callback,
		error: function(){
			console.log("Error retrieving friends list from ajax call");
			return [];
		}
	};
	// make the call and run the callback
	$.ajax(url, settings);
}


// Format Friends Name
function formatName(friend){
	return (friend) ? (friend.firstName && friend.lastName) ? friend.firstName + " " + friend.lastName : (friend.firstName) ? friend.firstName : (friend.lastName) ? friend.lastName : "" : "";
}


// Custom Sort Function
Array.prototype.sortBy = function(key){
	this.sort(function(a,b){
		if(a[key] < b[key]){
			return -1;
		}else if(a[key] > b[key]){
			return 1;
		}
		return 0;
	});
}




// JQuery Document Ready
$(document).ready(function(){

	// Nav bar link clicks
	$('.baby-steps-nav').on('click', '.link-baby-step', function(e){
		e.preventDefault();
		var linkClicked = $(e.currentTarget);
		var id = linkClicked.attr('href');
		// remove old content, show new content
		$('.baby-step').each(function(){
			if($(this).is(":visible")){
				$(this).toggle('slide', 200, function(){
					$(id).toggle('slide', 200);
				});
			}
		});
		// turn off old link, turn on new link
		$('.link-baby-step').each(function(){
			var link = $(this);
			if(link.parents('li').hasClass("on")){
				link.toggle('slide', {direction: 'right'}, 200, function(){
					link.parents('li').removeClass('on');
					link.toggle('slide', {direction: 'right'}, 200);
				});
			}
		});
		linkClicked.toggle('slide', {direction: 'right'}, 200, function(){
			linkClicked.parents('li').addClass('on');
			linkClicked.toggle('slide', {direction: 'right'}, 200);
		});
	});


	// Load up and display friends data
	displayFriends();

	
});
