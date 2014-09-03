describe("Friends collection", function() {

  describe("when instantiated", function() {
    it("should set the URL to the collection URL", function() {
      var friends = new Friends({
          url: "/app/assets/javascripts/baby-steps.json"
      });
      
      expect(friends.url).toEqual("assets/javascripts/baby-steps.json");
    });
  });
  
  describe("when no id is set", function() {
      it("should return the collection URL", function() {
          var friends = new Friends();
          
          expect(friends.url).toEqual("assets/javascripts/baby-steps.json");
      });
  });
  
  describe("when a model is added", function() {
      it("should add a model", function() {
          var friend = new Friend({
              firstName: "Paul",
              lastName: "Taylor"
          });
          
          var friends = new Friends();
          friends.add(friend);
          
          expect(friends.length).toEqual(1);
      });
      
      it("should order models by last name", function() {
          var friend1 = new Friend({
              firstName: "Paul",
              lastName: "Taylor"
          });
          
          var friend2 = new Friend({
              firstName: "Karen",
              lastName: "Barnell"
          });
          
          var friend3 = new Friend({
              firstName: "Elia",
              lastName: "Martell"
          });
          
          var friends = new Friends();
            
          friends.add([friend1, friend2, friend3]);
        
          expect(friends.at(0)).toBe(friend2);
          expect(friends.at(1)).toBe(friend3);
          expect(friends.at(2)).toBe(friend1);
      });
  });
  
});