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

  it("returns default text", function() {
    expect(displayFriendsInfoFor('step1')).toEqual("");
  });
});
