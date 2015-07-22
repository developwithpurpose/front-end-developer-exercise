describe("BabySteps", function () {
	describe("init", function () {

		beforeEach(function () {
			spyOn(BabySteps.util, "attachClickJQ");
			//spyOn(BabySteps.util, "fetchFriends");
			BabySteps.init();
		});

		it("attached navigation click handlers", function() {
			expect(BabySteps.util.attachClickJQ).toHaveBeenCalled();
		});

		it("sets currentStep to 1", function() {
			expect(BabySteps.currentStep).toBe(1);
		});

		it("sets friendContainer", function() {
			expect(BabySteps.friendContainer).toBeDefined()
		});

		/*it("fetched friend data", function() {
			expect(BabySteps.util.fetchFriends).toHaveBeenCalled();
		});*/
	});

	describe("navHandler", function () {
		var e, mockNavItem, mockContentPanel;

		beforeEach(function () {
			var body = document.getElementsByTagName("body")[0];
			
			mockNavItem = document.createElement("div");
			mockNavItem.id = "mockNavItem";
			mockNavItem.setAttribute("href", "#step-1-content");

			mockContentPanel = document.createElement("div");
			mockContentPanel.id = "mockContentPanel";
			mockContentPanel.className = "step-1-content";

			mockHighlighter = document.createElement("div");
			mockHighlighter.className = "highlighter";

			mockSlideWrapper = document.createElement("div");
			mockSlideWrapper.className = "slide-wrapper";

			body.appendChild(mockNavItem);
			body.appendChild(mockContentPanel);
			body.appendChild(mockContentPanel);
			body.appendChild(mockSlideWrapper);

			e = { "currentTarget":  document.getElementById("mockNavItem") };
			BabySteps.navHandler(e);
		});

		it("uses .animate if feature detection meets condition for < IE 9", function() {
			var animate = spyOn($.fn, "animate");
			document.all = true;
			window.atob = false;
			BabySteps.navHandler(e);

			expect(animate).toHaveBeenCalled();
		});

		it("uses .css if feature detection is modern browser", function() {
			var animate = spyOn($.fn, "animate");
			BabySteps.navHandler(e);

			expect(animate).toHaveBeenCalled();
		});
	});

	describe("friendHandler", function () {
		it("should prevent default anchor link behavior", function() {
			var e = jasmine.createSpyObj("e", [ "preventDefault" ]);
			BabySteps.friendHandler(e);

			expect(e.preventDefault).toHaveBeenCalled();
		});
	});

	describe("successHandler", function () {
		var data = {}, sort, clickHandler, container;

		beforeEach(function () {
			var body = document.getElementsByTagName("body")[0];

			data.friends = [
		        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
		        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
		        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
		        { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
		        { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
		        { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
		        { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
		        { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
		        { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
		        { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
		        { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
		        { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
		        { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
		        { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
		        { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
		        { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
		        { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
		        { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
		        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
		        { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
		        { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
		    ];

		    sort = spyOn(data.friends, "sort");
		    clickHandler = spyOn(BabySteps.util, "attachClickJQ");

		    BabySteps.fetching = true;
		    BabySteps.currentStep = 1;

		    container = document.createElement('div');
		    container.id = "friends-container";
		    body.appendChild(container);

		    BabySteps.friendContainer = $('#friends-container');

		    BabySteps.successHandler(data);
		});

		it("receives data and sorts it", function() {
			expect(sort).toHaveBeenCalled();
		});

		it("defined the BabySteps.myFriendsObj", function() {
			expect(BabySteps.myFriendsObj).toEqual(jasmine.any(Object));
		});

		it("retrieved friends for current step", function() {
			expect(BabySteps.currentFriends.length).toBe(0);
		});

		it("set BabySteps.friendsText to a string", function() {
			expect(BabySteps.friendsText).not.toBe(null);
			expect(typeof BabySteps.friendsText).toBe("string");
		});

		it("placed BabySteps.friendsText as HTML into BabySteps.friendContainer", function() {
			BabySteps.currentStep = 2;
			BabySteps.successHandler(data);

			expect(BabySteps.friendContainer.html()).toEqual('<a href="">Paul Taylor</a> is also in Baby Step 2');
		});

		it("attached click handler for friend links", function() {
			expect(BabySteps.util.attachClickJQ).toHaveBeenCalled();
		});

		it("sets BabySteps.fetching to null", function() {
			expect(BabySteps.fetching).toBe(null);
		});
	});

	describe("filterFriends", function () {
		var friends, stepNum, result, filtered;

		beforeEach(function () {
			friends = [
		        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
		        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
		        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 }
	        ];

	        result = [
		        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
		        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 }
	        ];

	        stepNum = 3;

	        filtered = BabySteps.util.filterFriends(friends, stepNum);
		});

		it("return filtered list of friends", function() {
			expect(filtered).toEqual(result);
		});
	});

	describe("fetchFriends", function () {
		var ajax;

		beforeEach(function () {
			ajax = spyOn(jQuery, 'ajax');
			BabySteps.util.fetchFriends();
		});

		it("to call ajax ", function() {
			expect(ajax).toHaveBeenCalled();
		});
	});

	describe("commaSeparated", function () {
		it("should return a string separated by commas after giving it what to splitBy", function() {
			var string = "My pah and I like to shoot rubber duckies and use pogo sticks while eating giant turkey legs and laugh at grandma try to eat her turkey leg."

			expect(BabySteps.util.commaSeparated(string, " and", ",")).toBe('My pah, I like to shoot rubber duckies, use pogo sticks while eating giant turkey legs, laugh at grandma try to eat her turkey leg.')
		});
	});
});