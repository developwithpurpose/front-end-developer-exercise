/* 
JavaScript for Dave Ramsey's Code Evaluation
Cody S Kratzer
5-16-2014
*/

$("div#nav a").click(function(e) {
	// prevent the href from firing
	e.preventDefault();

	// param variables
	$step = $(this).attr("id");
	var step_num = parseInt($step.replace("step",""));
	// test - console.log(step_num);

	// first, fade out all content
	$("div#content div.step_content").removeClass("selected");

	// after the fade out is complete, fade in the content for the step selected
	$new_step = $("div#content div#"+$step+"_content");
	$new_step.addClass("selected");

	// remove "selected" class from all anchor tags
	$("div#nav a").removeClass("selected");

	// add "selected" class to the anchor tag
	$(this).addClass("selected");

	// get json data from the baby-steps.json file
	$.getJSON("assets/javascripts/baby-steps.json", function(data) {
		// test - console.log(data);
		var friend_count = 0;
		var friend_names = "";
		// loop through the parsed json and grab all friends for the selected step
		$.each(data["friends"], function() {
			// test - console.log(this["babyStep"]);
			// if a step match is found...
			if(this["babyStep"] == step_num) {
				// add to counter
				friend_count++;
				// if counter is less than 3, add to friend list
				if(friend_count < 3) {
					// if second name, add comma
					if(friend_count == 2) {
						friend_names += " and ";
					}
					friend_names += "<a href=\"#\">" + this["firstName"] + " " + this["lastName"] + "</a>";
				}
			}
		});

		// if friends were found in the selected step, format sentence to display
		if(friend_count > 0) {
			// check friend count to determine sentence structure
			switch(friend_count) {
				// one friend found
				case 1:
					friend_names += " is";
					break;
				// two friends found
				case 2:
					friend_names += " are";
					break;
				// three friends found, replace "and" with comma
				case 3:
					friend_names = friend_names.replace(" and", ",");
					friend_names += ", and 1 other friend are";
					break;
				// more than 3 friends found, replace "and" with comma and 
				// use friend_count to determine number of additional friends
				default:
					friend_names = friend_names.replace(" and", ",");
					friend_names += ", and " + parseInt(friend_count - 2) + " other friends are";
			}
			// add in last part of the friends sentence
			friend_names += " also in Baby Step " + step_num;
			$new_step.children("p.friends").html(friend_names);
		}
	});
});

// trigger first step to fire json parser
$("div#nav a#step3").trigger("click");