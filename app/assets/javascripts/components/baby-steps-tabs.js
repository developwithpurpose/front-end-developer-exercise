$(function() {
	$(".component-baby-steps-tabs").each(function() {
		var $component 	= $(this),
		$tabs 			= $component.find("a[id^='step']"),
		$tab1 			= $component.find("#step1Tab"),
		hash 			= window.location.hash.substring(1),
		friendsPerStep 	= [[],[],[],[],[],[],[]];

		function activateTab1() {
			$tab1.addClass("active");
		}

		function getFriendStepSummary(arr, step) {
			var numOfFriends = arr.length;

			if (numOfFriends) {
				var friendStepSummary = "",
					firstFriend = "<mark>" + arr[0][1] + " " +arr[0][0] +"</mark>";

				if (numOfFriends > 1) secondFriend = "<mark>" + arr[1][1] + " " +arr[1][0] +"</mark>";
				
				switch (numOfFriends) {
					case 1:
						friendStepSummary = firstFriend + " is ";
						break;
					case 2:
						friendStepSummary = firstFriend + " and " + secondFriend  + " are ";
						break;
					case 3:
					case 4:
					default:
						friendStepSummary = firstFriend + ", " + secondFriend  + ", and "+ (numOfFriends-2) +" other friend"+ ((numOfFriends > 3) ? "s":"") + " are ";
						break;
				}

				return friendStepSummary + "also in Baby Step " + step;
				
			} else {
				return false;
			}
		}

		if (hash) {
			switch (hash) {
				case "baby-step-1":
				case "baby-step-2":
				case "baby-step-3":
				case "baby-step-4":
				case "baby-step-5":
				case "baby-step-6":
				case "baby-step-7":
					break;
				default :
					activateTab1();
			}
		} else {
			activateTab1();
		}

		$tabs.on('click', function() {
			var $this = $(this),
				$tabContent = $this.next(".content"),
				$allTabContent = $component.find(".content").not($tabContent);

			$tabs.removeClass("active");
			$tabs.attr("aria-selected", "false").attr("tabindex", "-1");
			$this.attr("aria-selected", "true").attr("tabindex", "0");
			$allTabContent.attr("aria-hidden", "true");
			$tabContent.attr("aria-hidden", "false");
			
			if ($("html").hasClass("no-cssanimations")) {
				$this
				 .animate({
				 	"padding-left":"80px",
				 	"padding-right":"64px"
				 },167)
				 .animate({
				 	"padding-left": "130px",
				 	"padding-right":"14px"        
				 },167)
				 .animate({
				 	"padding-left": "120px",
				 	"padding-right":"24px"        
				 },167);
			}

			if ($("html").hasClass("no-csstransitions")) {
				$tabContent.animate({
					"left": "300px",
					"opacity": "1"
				}, 300);

				$allTabContent.animate({
					"left": "200px",
					"opacity": "0"
				}, 300);
			}
		});

		$tabs.is(":focus").on("onkeydown", function(e) {
			if(e.keyCode == 37) { // left & down
				// trigger click to next left tab (if exists) or last tab
			} else if(e.keyCode == 39) { // right & up
				// trigger click to next right tab (if exists) or 1st tab
			}
		});

		$.ajax({
            url: "/baby-steps.json",
            type: 'GET',
            success: function(data) {
                var babyStepData = data["friends"];

                babyStepData.forEach(function(val, i, arr) {
					var friend = arr[i];

					friendsPerStep[friend["babyStep"]-1].push([friend["lastName"], friend["firstName"]]);
				});

				friendsPerStep.forEach(function(val, i, arr) {
					var currentArr = arr[i],
						stepCnt = i + 1;
					
					currentArr.sort();

					var summary = getFriendStepSummary(currentArr, stepCnt);

					if (summary) {
						$component.find("#step"+stepCnt+"Tab").next(".content").append("<footer><p>"+summary+"</p></footer>");
					}
				});
            },
            failure: function() {
            	console.log("no steps returned");
            }
        });
	});
});