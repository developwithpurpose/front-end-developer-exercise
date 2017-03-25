$(function() {
	var currentID = 1;

	$("#body-1").show();
		
	$("#nav-1")
		.css({"color": "#36ABE1", "font-weight": 600})
		.next().attr("src", "./assets/images/icons/individual/icons_small_bs1_blue.png")
		.parent().animate({
			backgroundColor: "#FFF"
		}, 100);

	$("li > a").click(function(e) {
		var newID = e.target.id.slice(4);

		e.preventDefault();

		$("li").each(function() {
			$(this).css("background-color", "transparent");
		});

		$("li > a").each(function(i) {
			$(this)
				.css({"color": "#9BA0A4", "font-weight": "normal"})
				.next().attr("src", "./assets/images/icons/individual/icons_small_bs" + (i + 1) + ".png");
		});

		$(this).css({"color": "#36ABE1", "font-weight": 600});

		$(this).parent().animate({
			backgroundColor: "#FFF"
		}, 100);

		$(this).next().attr("src", "./assets/images/icons/individual/icons_small_bs" + newID + "_blue.png");

		$("#body-" + currentID).hide();
		$("#body-" + newID).show();

		$.getJSON("../baby-steps.json", function(data) {
			var friendArray = [];
			$.each(data.friends, function(i, friend) {
				if(friend.babyStep == newID) {
					friendArray.push(friend);
				}
			});

			if (newID != 1) {
				if(friendArray.length > 2) {
					$("#body-" + newID + " > .friends").html("<a class='friend' href='#''>" + friendArray[0].firstName + " " + friendArray[0].lastName + "</a>, <a class='friend' href='#'>" + friendArray[1].firstName + " " + friendArray[1].lastName + "</a>, and " + (friendArray.length - 2) + " Other Friends are on this step.");
				} else if(friendArray.length == 2) {
					$("#body-" + newID + " > .friends").html("<a class='friend' href='#''>" + friendArray[0].firstName + " " + friendArray[0].lastName + "</a> and <a class='friend' href='#'>" + friendArray[1].firstName + " " + friendArray[1].lastName + "</a> are on this step.");					
				} else {
					$("#body-" + newID + " > .friends").html("<a class='friend' href='#''>" + friendArray[0].firstName + " " + friendArray[0].lastName + "</a> is on this step.");										
				}
			}
		});

		currentID = newID;
	});
});
