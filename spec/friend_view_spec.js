describe("Friend View", function() {
	var friendView;
	
	beforeEach(function() {
		friendView = new FriendView();
	});
	
	afterEach(function() {
	    delete friendView;
	});
	
	describe("when instantiated", function() {
		it("attaches to the main DOM element", function() {
			expect(friendView.$el.selector).toEqual("article");
		});
	});
});