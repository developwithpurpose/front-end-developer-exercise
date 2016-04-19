var BabySteps = {
	sectionList: [],
	tabList: [],
	anchorList: [],
	friends: {}
};

BabySteps.getSectionList = function() {
	BabySteps.sectionList = document.querySelectorAll("#content section");	
};

BabySteps.getTabList = function() {
	BabySteps.tabList = document.querySelectorAll("nav li");	
};

BabySteps.getAnchorList = function() {
	BabySteps.anchorList = document.querySelectorAll("nav li a");	
};

BabySteps.reorganize = function(friends) {
	var stepList = {
		"BabyStep1": [],
		"BabyStep2": [],
		"BabyStep3": [],
		"BabyStep4": [],
		"BabyStep5": [],
		"BabyStep6": [],
		"BabyStep7": []	
	},
		firstName = "",
		lastName = "";
		
	for(var i=0; i < friends.length; i++) {
		firstName = friends[i].firstName;
		lastName = friends[i].lastName;
		
		stepList["BabyStep" + friends[i].babyStep].push(firstName + " " + lastName);
	}
	
	return stepList;
};

BabySteps.getSectionList();
BabySteps.getTabList();
BabySteps.getAnchorList();

document.addEventListener("click", function(e) {
	var target = e.target,
		panel = document.querySelector(target.hash),
		babyStepHash = {
			"#bs1": "BabyStep1",
			"#bs2": "BabyStep2",
			"#bs3": "BabyStep3",
			"#bs4": "BabyStep4",
			"#bs5": "BabyStep5",
			"#bs6": "BabyStep6",
			"#bs7": "BabyStep7"
		},
	    tagHash = {
			"a": function() {
				e.preventDefault();
				
				$("section[aria-hidden='false']").prop("aria-hidden", "true").slideUp("slow");
				
				panel.setAttribute("aria-hidden", "false");
				$(panel).slideDown('slow');
				
				// remove selected
				for(var i=0; i < BabySteps.anchorList.length; i++) {
					BabySteps.anchorList[i].setAttribute("aria-selected", "false");	
				}
				
				// remove active tab
				for(var i=0; i < BabySteps.tabList.length; i++) {
					BabySteps.tabList[i].className = BabySteps.tabList[i].className.replace(" active-tab", "");	
				}
				
				// style parent
				target.parentNode.className += " active-tab";
				target.setAttribute("aria-selected", "true");
				
				$.get("../../baby-steps.json", function(data) {
					var friendText = "",
						friendList = [],
						linkOne = "",
						linkTwo = "";
					BabySteps.friends = BabySteps.reorganize(data.friends);
					friendList = BabySteps.friends[babyStepHash[target.hash]] || [];
					
					switch (friendList.length) {
						case 0:
							friendText = "";
							break;
						case 1:
							linkOne = "<a href='" + target.hash + "' class='friend-link'>" + friendList[0] + "</a>";
							friendText = linkOne + " is on this step";
							break;
						case 2: 
							linkOne = "<a href='" + target.hash + "' class='friend-link'>" + friendList[0] + "</a>";
							linkTwo = "<a href='" + target.hash + "' class='friend-link'>" + friendList[1] + "</a>";
							friendText = linkOne + " and " + linkTwo + " are on this step";
							break;
						default: 
							linkOne = "<a href='" + target.hash + "' class='friend-link'>" + friendList[0] + "</a>";
							linkTwo = "<a href='" + target.hash + "' class='friend-link'>" + friendList[1] + "</a>";
							friendText = linkOne + ", " + linkTwo + " and " + (friendList.length - 2) + " Other Friends are on this step";
					}
					
					$(target.hash + " .bs-friends").html(friendText);
				});
			}
		};
	
	if(target.tagName === "A") {
		tagHash[target.tagName.toLowerCase()]();
	}
}, false);