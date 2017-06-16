function grabJSON (){  //This function grabs the information from the JSON file and determines how many people are on each baby step and displays the appropriate information on the webpage.
	$.getJSON("/../../baby-steps.json", function(response){
			var $onBabyStepString = $("li.active").find("a").attr("href").slice(-1);
			var $onBabyStepInt = parseInt($onBabyStepString, 10);
			var names= [];
			for (var i = 0; i < response.friends.length; i++) { //This counter matches the baby step (href) with the baby step in the JSON file. 
				if ($onBabyStepInt === response.friends[i].babyStep) {
					names.push(response.friends[i]);
				}
			}
			if (names.length === 0) {
				$(".replace-this").replaceWith("<p class='replace-this'></p>");
			} else if (names.length === 1) {
				$(".replace-this").replaceWith("<p class='replace-this'><a>" + names[0].firstName +" "+ names[0].lastName + "</a> is also in Baby Step " +$onBabyStepInt+".</p>");
			} else if (names.length === 2) {
				$(".replace-this").replaceWith("<p class='replace-this'><a>" + names[0].firstName +" "+ names[0].lastName + "</a> and <a> " + names[1].firstName +" "+ names[1].lastName + "</a> are also in Baby Step " +$onBabyStepInt+".</p>");
			} else if (names.length === 3) {
				$(".replace-this").replaceWith("<p class='replace-this'><a>" + names[0].firstName +" "+ names[0].lastName + "</a>, <a>" + names[1].firstName +" "+ names[1].lastName +"</a> and 1 other friend are also in Baby Step "+$onBabyStepInt+".</p>");
			} else {
				$(".replace-this").replaceWith("<p class='replace-this'><a>" + names[0].firstName +" "+ names[0].lastName + "</a>, <a>" + names[1].firstName +" "+ names[1].lastName +"</a> and "+(names.length - 2)+" other friends are also in Baby Step "+$onBabyStepInt+".</p>");
			}
	});
}

$(function() {
	grabJSON();//This is where the page loads.  I wanted to call the function first incase the friends at baby step one ever changed.
	
	var height = $(".wrapper").height();
  	$("#shadow-left").height(height);
  	$("#shadow-right").height(height);

	$(".baby-steps-list").each(function(){ //This gives names to all the different elements I will use.  This was done with the help of "JavaScript and jQuery: interactive front-end web development" by Jon Duckett
		var $this  = $(this);
		var $step  = $this.find("li.active");
		var $link  = $step.find("a");
		var $panel = $($link.attr("href"));

		$this.on("click", ".tab-control", function(e){
			e.preventDefault();
			var $link = $(this);
			var id    = this.hash;
			$panel.animate({
				opacity: 0.0,
				paddingLeft: "200px"
			}, 500, function(){
				$panel.removeClass("active");
			});

			$step.toggleClass("active");
		
			$panel.animate({
				opacity: 1.0,
				paddingLeft: "0px",	
			}, 100, function(){
				$panel = $(id).addClass("active");
			});
			$step  = $link.parent().toggleClass("active");

			grabJSON();
		});
	});

	$("#div").height(function() {
    return window.innerHeight - $(this).offset().top - 35;
	});
});