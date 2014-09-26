// Prevent Page Jump to Top
$("a").click(function(event){
  event.preventDefault();
});
//Fade Document into view
$('body').delay(1200).fadeTo(1000, 1, function() {});
// Retrieve JSON object file //
$.ajax({
	url: '../app/assets/javascripts/baby-steps.json',
	success: function(data) {
		sessionStorage.clear();
		sessionStorage.setItem(sessionStorage.length, data);
	},
	fail: function(error) {
		console.log("Error: " + error);
	}
});	
var babyStepsData = $.parseJSON(sessionStorage[0]);
var numOfFriends = 0;
// Load Baby Step 1 on Page Load //
$('article, h1').fadeIn(900, function() {
	$('ul li:nth-child(1)').addClass('active').children('img').attr('src', '../app/assets/images/icons/individual/icons_small_bs1_blue.png');
	$('#step-icon').attr('src', '../app/assets/images/icons/individual/icons_large_bs' + 1 + '_blue.png');
	$('#step-number').html(babyStepsData.theSevenBabySteps[0]['step-number']);
	$('#step-detail').html(babyStepsData.theSevenBabySteps[0]['step-detail']);
	$('#step-content').html(babyStepsData.theSevenBabySteps[0]['step-content']);
	$('#friends').html("<p>"+ "</p>" + "<p>" +  numOfFriends + ' other friends are on this step.' + "</p>");
});
// Dynamically change content to the step the user selects. //
$(document).ready(function() {
	$("li").click(function() {
		$('li').each( function ( index ) {
			$(this).removeClass('active');
			$(this).children("img").attr('src', '../app/assets/images/icons/individual/icons_small_bs' + (index + 1) + '.png');
		});
		var stepNumber = Number($(this).children('img').attr('id'));
		var numOfFriends = 0; 
		var friendsInStep = [];
		//Collect Current Friends within step
		for(var i = 0; i < babyStepsData.friends.length; i++) {
			if(babyStepsData.friends[i].babyStep === stepNumber) {
				if(friendsInStep.length < 2) {
					friendsInStep[friendsInStep.length] = babyStepsData.friends[i].firstName + " " + babyStepsData.friends[i].lastName;
				}  else {
					numOfFriends += 1;	
				}
			};
		}
		//transition content in article
		$(this).fadeTo(450, 0.1, function() {
			$(this).addClass('active').children("img").attr('src', '../app/assets/images/icons/individual/icons_small_bs' + stepNumber + '_blue.png');
		});
		$('article, h1').fadeTo(450, 0.1, function() {
			$('#step-icon').attr('src', '../app/assets/images/icons/individual/icons_large_bs' + stepNumber + '_blue.png');
			$('#step-number').html(babyStepsData.theSevenBabySteps[stepNumber - 1]['step-number']);
			$('#step-detail').html(babyStepsData.theSevenBabySteps[stepNumber - 1]['step-detail']);
			$('#step-content').html(babyStepsData.theSevenBabySteps[stepNumber - 1]['step-content']);
			$('#friends').html("<p>"+ "</p>" + "<p>" +  numOfFriends + ' other friends are on this step.' + "</p>");
			if(friendsInStep.length === 1) {
				$('div#friends p:first-child').html("<a>" + friendsInStep[0] + "</a>" + ' and ');
			}
			else if(friendsInStep.length === 2) {
				$('div#friends p:first-child').html("<a>" + friendsInStep[0] + "</a>" + ", " + "<a>" + friendsInStep[1] + "</a>"  + ' and ');
			}
		}).fadeTo(600, 1, function() {});
		$(this).fadeTo(600, 1, function() {});
	});
});

