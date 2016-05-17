$(function() {
	$(".component-baby-steps-tabs").each(function() {
		var $component = $(this),
		$tabs = $component.find("a[id^='step']"),
		$tab1 = $component.find("#step1Tab"),
		hash = window.location.hash.substring(1);
		
		function activateTab1() {
			$tab1.addClass("active");
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

			$tabs.each(function() {
				$this.removeClass("active");
			});

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

		// get data
		// babyStepData

		babyStepData.forEach(function(val, i, arr) {
			var friend = arr[i];

			friendsPerStep[friend["babyStep"]-1].push([friend["firstName"], friend["lastName"]]);
		});

		friendsPerStep.forEach(function(val, i, arr) {
			var currentArr = arr[i];
			
			currentArr.sort();

			var summary = getFriendStepSummary(currentArr);

			if (summary) {
				$("#baby-step-"+i).next(".content").append("<footer>"+summary+"</footer>");
			}
		});

		// for each step content - getFriendStepSummary()
		
		function getFriendStepSummary(arr) {
			var numOfFriends = arr.length;

			if (numOfFriends) {
				var friendStepSummary = "",
					firstFriend = "<mark>" + arr[0]["firstName"] + " " +arr[0]["lastName"] +"</mark>",
					secondFriend = "<mark>" + arr[1]["firstName"] + " " +arr[1]["lastName"] +"</mark>";

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
						friendStepSummary = firstFriend + ", " + secondFriend  + ", and "+ numOfFriends-2 +" other friend"+ (numOfFriends > 3) ? "s":"" + "are ";
						break;
				}

				return friendStepSummary + "also in Baby Step " + arr["babyStep"];

				
			} else {
				return false;
			}
		}


		// * if 0 friends, then don't show any message
		// * if 1 friend, then show "Paul Taylor is also in Baby Step 2"
		// * if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
		// * if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
		// * if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
	});
});