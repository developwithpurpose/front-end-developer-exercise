describe("displayFriendsInfoFor", function() {
  beforeEach(function() {
    window.friends = {
      step1: undefined,
      step2: ["Fred"],
      step3: ["Wilma","Bamm-Bamm"],
      step4: ["Barney","Gazoo","Betty"],
      step5: ["George","Judy","Rosie","Fergie","Elroy"]
    }
  });

  it("returns default display text", function() {
    expect(displayFriendsInfoFor('step1')).toEqual("");
  });

  it("returns display text for a result of one friend", function() {
    expect(displayFriendsInfoFor('step2')).toEqual("Fred is also in baby step 2");
  });

  it("returns display text for a result of two friends", function() {
    expect(displayFriendsInfoFor('step3')).toEqual("Wilma and Bamm-Bamm are also in baby step 3");
  });

  it("returns display text for a result of three friends", function() {
    expect(displayFriendsInfoFor('step4')).toEqual("Barney, Gazoo and Betty are also in baby step 4");
  });

});
