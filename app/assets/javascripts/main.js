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

	// first, fade out all content
	$("div#content div.step_content").removeClass("selected");
	
	// test - console.log("old div has faded out.");

	// after the fade out is complete, fade in the content for the step selected
	$("div#content div#"+$step+"_content").addClass("selected");
	
	// test - console.log("new div has faded in.");

	// remove "selected" class from all anchor tags
	$("div#nav a").removeClass("selected");

	// add "selected" class to the anchor tag
	$(this).addClass("selected");
});

