/* Activate First Nav Item */
$("#menu-step1").addClass("active");
$("#step1").addClass("active");


/* Navigation Selection */
$(".step").click(function(e){
	e.preventDefault();
	var selected = $(this).attr("href");
	$(".active").removeClass("active");
	$(this).addClass("active");
	$(selected).addClass("active");

	$("main").animate({
	    scrollTop: $(selected).offset().top - $("main").offset().top + $("main").scrollTop()
	}, 500);
});


/* Add Friends To Page */
$.getJSON( "baby-steps.json", function(data) {
	var friends = data.friends;

	// Process Data:
	var friendsPerStep = {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
	};
	for (var i = 0; i < friends.length; i++) {
		friendsPerStep[friends[i].babyStep].push(friends[i].firstName + " " + friends[i].lastName);
	}

	// Construct HTML Strings & Add To Page:
	for (var j = 1; j <= 7; j++) {
		var friendsOnStep = friendsPerStep[j];
		var phrase = "";
		switch (friendsOnStep.length) {
			case 0:
				break;
			case 1:
				phrase = "<a href='#'>" + friendsOnStep[0] +
				         "</a> is also in Baby Step " + j;
				break;
			case 2:
				phrase = "<a href='#'>" + friendsOnStep[0] +
				         "</a> and <a href='#'>" + friendsOnStep[1] +
				         "</a> are also in Baby Step " + j;
				break;
			case 3:
				phrase = "<a href='#'>" + friendsOnStep[0] +
				         "</a> and <a href='#'>" + friendsOnStep[1] +
				         "</a> and 1 Other Friend are also in Baby Step " + j;
				break;
			default:
				phrase = "<a href='#'>" + friendsOnStep[0] +
				         "</a> and <a href='#'>" + friendsOnStep[1] +
				         "</a> and " + (friendsOnStep.length-2) +
				         " Other Friends are also in Baby Step " + j;
		}
		$("#step" + j + " .friends").html(phrase);
	}
});