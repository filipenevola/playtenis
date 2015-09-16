describe("Methods: registerPlace()", function() {
  
  var userId = "ABC", place = {name: "teste"};

  it("registers a place", function() {
    spyOn(Meteor.users, "quitGame");
    spyOn(Places, "insert");

    Meteor.methodMap.userId = userId;

    Meteor.methodMap.registerPlace(place);

    expect(Places.insert).toHaveBeenCalledWith(place);
  });

  it("not register a place if user not logged in", function() {
    Meteor.methodMap.userId = undefined;

    try {
      Meteor.methodMap.registerPlace(place);
    } catch (e) {
      expect(e.error).toEqual(403);
      expect(e.reason).toEqual("You are not logged in");
    }
    expect(Meteor.methodMap.registerPlace).toThrow();
  });

});