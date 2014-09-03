describe("Friend model", function() {

  describe("when instantiated", function() {
    
    it("should exhibit attributes", function() {
      var friend = new Friend({
        lastName: "Harris"
      });
      
      expect(friend.get("lastName")).toEqual("Harris");
    });
    
  });
  
});