$(function() {
	$(".component-baby-steps-tabs").each(DR.babyStepsTabs);
});

var DR = {
		babyStepsTabs: function($$tabs) {
		var $component 	= $(this),
		$tabs 			= $component.find("a[id^='step']"),
		$tab1 			= $component.find("#step1Tab"),
		hash 			= window.location.hash.substring(1),
		friendsPerStep 	= [[],[],[],[],[],[],[]];

		var setAccessibilityAttributes = function($activeTab) {
			var $tabContent 	= $activeTab.next(".content"),
				$allTabContent 	= $component.find(".content").not($tabContent);

			$tabs.not($activeTab).attr("aria-selected", "false");
			$activeTab.attr("aria-selected", "true");
			$allTabContent.attr("aria-hidden", "true");
			$tabContent.attr("aria-hidden", "false");
		}

		var activateTab1 = function() {
			$tab1.addClass("active");
			setAccessibilityAttributes($tab1);
		}

		var getFriendStepSummary = function(arr, step) {
			var numOfFriends = arr.length;

			if (numOfFriends) {
				var friendStepSummary = "",
					firstFriend = arr[0][1] + " " +arr[0][0];

				if (numOfFriends > 1) secondFriend = arr[1][1] + " " +arr[1][0];
				
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

		var appendSummariesToDom = function(babyStepData) {

			if (babyStepData) {
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
			}
		}

		var animateTabsWithJQuery = function(tab, tabContent, allTabContent) {

			if ($("html").hasClass("no-cssanimations")) {
				tab
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
				tabContent.animate({
					"left": "300px",
					"opacity": "1"
				}, 300);

				allTabContent.animate({
					"left": "200px",
					"opacity": "0"
				}, 300);
			}
		}

		var initStartingTab = function() {
			if (hash) {

				switch (hash) {
					case "baby-step-1":
					case "baby-step-2":
					case "baby-step-3":
					case "baby-step-4":
					case "baby-step-5":
					case "baby-step-6":
					case "baby-step-7":
						setAccessibilityAttributes($("#step"+hash.split("").pop()+"Tab"));
						break;
					default :
						activateTab1();
				}
			} else {
				activateTab1();
			}
		}

		var getBabyStepData = function() {
			$.ajax({
		        url: "/baby-steps.json",
		        type: 'GET',
		        success: function(data) {
		     
		            appendSummariesToDom(data["friends"]);
		        },
		        failure: function() {
		        	console.log("no steps returned");
		        }
		    });
		}

		var handleTabClicks = function() {
			$tabs.on('click', function() {
				var $this = $(this),
					$tabContent = $this.next(".content"),
					$allTabContent = $component.find(".content").not($tabContent);

				$tabs.removeClass("active");
				setAccessibilityAttributes($this);
				animateTabsWithJQuery($this, $tabContent, $allTabContent);
			});
		}

		var init = function() {
			initStartingTab();
			getBabyStepData();
			handleTabClicks();
		}

		var that = {};

		that.setAccessibilityAttributes = setAccessibilityAttributes;
		that.activateTab1 = activateTab1;
		that.getFriendStepSummary = getFriendStepSummary;
		that.appendSummariesToDom = appendSummariesToDom;
		that.animateTabsWithJQuery = animateTabsWithJQuery;
		that.initStartingTab = initStartingTab;
		that.getBabyStepData = getBabyStepData;
		that.handleTabClicks = handleTabClicks;
		that.init = init;
		
		return that;
	}
};