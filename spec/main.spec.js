// A few basic test cases

describe( "Navigation manager", function () {
    describe( "current step", function () {
		it("is set to 4", function() {
			navigationManager.selectStep(4);
			expect(navigationManager.currentStep).toEqual(4);
		});
		it("is not set to a negative value", function() {
			navigationManager.currentStep = 0;
			navigationManager.selectStep(-1);
			expect(navigationManager.currentStep).toEqual(0);
		});
    });
});
describe( "Social manager", function () {
    describe( "parses friend data", function () {
		it("parses when only 2 friends are in step 4", function() {
			friends = [
				{ "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
				{ "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 }
			];
			expect((socialManager.updateSocialContainers(friends))[3]).toEqual(2);
		});
		it("parses when only 1 friends are in step 1", function() {
			friends = [
				{ "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 1 },
			];
			expect((socialManager.updateSocialContainers(friends))[0]).toEqual(1);
		});
		it("parses when there are no friends", function() {
			friends = [];
			expect((socialManager.updateSocialContainers(friends))[0]).toBeUndefined();
		});
		it("parses when there are multiple friends in multiple steps", function() {
			friends = [
				{ "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 2 },
				{ "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 6 },
				{ "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 2 },
				{ "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 6 },			
			];
			expect((socialManager.updateSocialContainers(friends))[1]).toEqual(2);
			expect((socialManager.updateSocialContainers(friends))[5]).toEqual(2);
		});
    });
});