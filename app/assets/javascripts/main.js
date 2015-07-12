$(document).ready( function () {

	var friends, copy, step;

	step = 1;

	$.getJSON("./assets/javascripts/baby-steps.json", function (data) {
		friends = data;
		UpdateStep();
		console.log(friends);
	})

	$.getJSON("./assets/javascripts/body-copy.json", function (data) {
		copy = data;
		UpdateCopy();
		console.log(copy);
	})

	$(".step").click( function () {

		$(".step").removeClass("selected");
		$(this).addClass("selected");

		step = $(this).index() + 1;

		UpdateStep();
	})

	function UpdateStep() {

		var numFriends, extraFriends, openTag, closeTag, message;

		var outputArray = [];

		for (i = 0; i < friends.friends.length; i++) {

			if (friends.friends[i].babyStep == step) {

				outputArray.push(friends.friends[i].firstName + " " + friends.friends[i].lastName);

			}
		}

		numFriends = outputArray.length;
		extraFriends = numFriends - 2;
		openTag = "<span class=\"name\">";
		closeTag = "</span>";

		switch (numFriends) {
			case 0:
				message = "";
				break;
			case 1:
				message = openTag + outputArray[0] + closeTag + " is also in Baby Step " + step;
				break;
			case 2:
				message = openTag + outputArray[0] + closeTag + " and " + openTag + outputArray[1] + closeTag + " are also in Baby Step " + step;
				break;
			case 3:
				message = openTag + outputArray[0] + closeTag + ", " + openTag + outputArray[1] + closeTag + ", and 1 other friend are also in Baby Step " + step;
				break;
			case 4:
			default:
				message = openTag + outputArray[0] + closeTag + ", " + openTag + outputArray[1] + closeTag + ", and " + extraFriends + " other friends are also in Baby Step " + step;
				break;
		}

		$(".output").html(message)

	}

	function UpdateCopy(currentStep) {


	}

})