var friendsBySteps;

$.getJSON("baby-steps.json", function(result){
	friendsBySteps = _.groupBy(result.friends, 'babyStep');
});

function fullName(person){
	return person.firstName + " " + person.lastName;
}

$(document).ready(function() {
 
 	var lis = $(".steps-menu ul li");
 	
 	lis.on("click", function(e) {
		lis.removeClass("active");
		e.currentTarget.classList.add("active");

		lis.each(function() {
			var thisImg = $(this).find('img');
			thisImg.attr('src', thisImg.attr('src').replace('_blue', ''));
		});

		var originalSrc = $(e.currentTarget).find('img').attr('src');
		lis.find('img').attr('src')
		$(e.currentTarget).find('img').attr('src', originalSrc.replace(".png", "_blue.png"));

		var currentTab = parseInt((e.currentTarget.id).slice(-1));


		var friendsMessageId = document.getElementById("friends-message");

		var friendsOnThisStep = friendsBySteps[currentTab]; 
		friendsOnThisStep = _.orderBy(friendsOnThisStep, 'lastName', 'asc');

		var friendsArrayLength = friendsOnThisStep.length; 



		switch (friendsArrayLength) {
			case 0:
				friendsMessageId.innerHTML = "";
				break;
			case 1:
				friendsMessageId.innerHTML = '<a>' + fullName(friendsOnThisStep[0]) + "</a> is also in Baby Step " + currentTab;
				break;
			case 2: 
				friendsMessageId.innerHTML = "<a>" + fullName(friendsOnThisStep[0])+"</a>" + " and " + "<a>" + fullName(friendsOnThisStep[1]) + "</a> are also in Baby Step " + currentTab;
				break;
			case 3: 
				friendsMessageId.innerHTML = "<a>" + fullName(friendsOnThisStep[0]) + "</a>" + ", " + "<a>" + fullName(friendsOnThisStep[1]) + "</a>" + " and 1 other friend are also in Baby Step " + currentTab;
				break; 
			default:
				friendsMessageId.innerHTML = "<a>" + fullName(friendsOnThisStep[0]) + "</a>" + ", " + "<a>" + fullName(friendsOnThisStep[1]) + "</a>" + " and " +  (friendsArrayLength - 2)  + " other friends are also in Baby Step " + currentTab;
				break;
	}

 });

});










