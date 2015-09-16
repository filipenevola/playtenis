describe("Methods: denyGame()", function() {
  
  var gameId = "123", userId = "ABC";

  it("deny the game", function() {
    spyOn(Meteor.users, "quitGame");
    spyOn(Games, "quit");

    Meteor.methodMap.userId = userId;

    Meteor.methodMap.denyGame(gameId);

    expect(Meteor.users.quitGame).toHaveBeenCalledWith(gameId, userId);
    expect(Games.quit).toHaveBeenCalledWith(gameId);
  });

  it("not deny the game if user not logged in", function() {
    Meteor.methodMap.userId = undefined;

    try {
      Meteor.methodMap.denyGame(gameId);
    } catch (e) {
      expect(e.error).toEqual(403);
      expect(e.reason).toEqual("You are not logged in");
    }
    expect(Meteor.methodMap.denyGame).toThrow();
  });

});