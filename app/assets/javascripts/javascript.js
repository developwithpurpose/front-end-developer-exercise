//Landon Ellerd
function animate(link) {
	var index = link.parent().index();
	var speed = 250;
	$('.page.currentStepDiv').animate({opacity: 0}, speed, function() {
		$('.page.currentStepDiv').removeClass('currentStepDiv');
		$('.page').eq(index-1).animate({opacity: 1}, speed).addClass('currentStepDiv');
		loadFriends(link.parent().index());
	});
}

function loadFriends(indexOfLink) {
	var peopleOnCurrentStep = [];
	$.getJSON("baby-steps.json", function( obj ) {
		$.each(obj.friends, function (index, friend) {
			if(friend.babyStep == indexOfLink) {
				peopleOnCurrentStep.push(friend);
			}
		});
		var h3Html;
		
		if(peopleOnCurrentStep.length == 0) {
			h3Html = "";
			postH3Html(h3Html);
		} else if(peopleOnCurrentStep.length == 1) {
			h3Html = "<em>" + peopleOnCurrentStep[0].firstName + " " + peopleOnCurrentStep[0].lastName + "</em> is also in Baby Step " + indexOfLink;
			postH3Html(h3Html);
		} else if(peopleOnCurrentStep.length == 2) {
			h3Html = "<em>" + peopleOnCurrentStep[0].firstName + " " + peopleOnCurrentStep[0].lastName + " and "+peopleOnCurrentStep[1].firstName + " " + peopleOnCurrentStep[1].lastName + "</em> are also in Baby Step " + indexOfLink;
			postH3Html(h3Html);
		} else if(peopleOnCurrentStep.length == 3) {
			h3Html = "<em>" + peopleOnCurrentStep[0].firstName + " " + peopleOnCurrentStep[0].lastName + ", "+peopleOnCurrentStep[1].firstName + " " + peopleOnCurrentStep[1].lastName + "</em> and 1 other friend are also in Baby Step " + indexOfLink;
			postH3Html(h3Html);
		} else {
			h3Html = "<em>" + peopleOnCurrentStep[0].firstName + " " + peopleOnCurrentStep[0].lastName + ", "+peopleOnCurrentStep[1].firstName + " " + peopleOnCurrentStep[1].lastName + "</em> and "+(peopleOnCurrentStep.length-2)+" other friends are also in Baby Step " + indexOfLink;
			postH3Html(h3Html);
		}
	});
}

function postH3Html(h3Html) {
	$("h3.myFriends").remove();
	$("<h3/>", {
	"class": "myFriends",
	html: h3Html}).appendTo( "body div.currentStepDiv");
}

function changeImage(element) {
	var children = element.children;
	switch($(element).parent().index()) {
		case 1:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs1_blue.png');
			break;
		case 2:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs2_blue.png');
			break;
		case 3:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs3_blue.png');
			break;
		case 4:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs4_blue.png');
			break;
		case 5:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs5_blue.png');
			break;
		case 6:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs6_blue.png');
			break;
		case 7:
			children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs7_blue.png');
			break;
	}
}

function changeImageBack(element, changingStep) {
    if((element.getAttribute('class') != "current") || (changingStep == true)) {
		var children = element.children;
		switch($(element).parent().index()) {
			case 1:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs1.png');
				break;
			case 2:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs2.png');
				break;
			case 3:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs3.png');
				break;
			case 4:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs4.png');
				break;
			case 5:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs5.png');
				break;
			case 6:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs6.png');
				break;
			case 7:
				children[1].setAttribute('src', 'assets/images/icons/individual/icons_small_bs7.png');
				break;
		}
	}
}
$('#steps li a').click( function(){
	 if (!$(this).hasClass("current")) {
		changeImageBack(document.getElementsByClassName("current")[0], true);
		animate($(this));
	} 
	$('.current').removeClass('current');
    $(this).addClass('current');
});
$(document).ready(loadFriends(1));