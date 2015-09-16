describe("Methods: cancelGame()", function() {
  
  var gameId = "123", userId = "ABC";

  it("cancel the game", function() {
    spyOn(Meteor.users, "cancelGame");
    spyOn(Games, "cancel");
    spyOn(Games, "findCurrent").and.returnValue({_id: gameId});

    Meteor.methodMap.userId = userId;
    Meteor.methodMap.cancelGame(gameId);

    expect(Games.cancel).toHaveBeenCalledWith(gameId, userId);
    expect(Meteor.users.cancelGame).toHaveBeenCalledWith(gameId);
  });

  it("not cancel the game if user not logged in", function() {
    Meteor.methodMap.userId = undefined;

    try {
      Meteor.methodMap.cancelGame(gameId);
    } catch (e) {
      expect(e.error).toEqual(403);
      expect(e.reason).toEqual("You are not logged in");
    }
    expect(Meteor.methodMap.cancelGame).toThrow();
  });

  it("not cancel the game if you are not the owner", function() {
    spyOn(Meteor.users, "cancelGame");
    spyOn(Games, "cancel");
    spyOn(Games, "findCurrent").and.returnValue(null);
    Meteor.methodMap.userId = userId;

    try {
      Meteor.methodMap.cancelGame(gameId);
    } catch (e) {
      expect(e.error).toEqual(412);
      expect(e.reason).toEqual("You cannot cancel this game");
    }
    expect(Meteor.methodMap.cancelGame).toThrow();
    expect(Games.findCurrent).toHaveBeenCalledWith(gameId, userId);
    expect(Games.cancel).not.toHaveBeenCalled();
    expect(Meteor.users.cancelGame).not.toHaveBeenCalled();
  });

});