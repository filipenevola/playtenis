describe("Methods: acceptGame()", function() {
  
  var gameId = "123", userId = "ABC";

  beforeEach(function() {
    spyOn(Meteor.users, "acceptGame");
  });

  it("accepts the game", function() {
    Meteor.methodMap.userId = userId;

    Meteor.methodMap.acceptGame(gameId);

    expect(Meteor.users.acceptGame).toHaveBeenCalledWith(gameId, userId);
  });

  it("not accepts the game if user not logged in", function() {
    Meteor.methodMap.userId = undefined;

    try {
      Meteor.methodMap.acceptGame(gameId);
    } catch (e) {
      expect(e.error).toEqual(403);
      expect(e.reason).toEqual("You are not logged in");
    }
    expect(Meteor.methodMap.acceptGame).toThrow();
  });

});