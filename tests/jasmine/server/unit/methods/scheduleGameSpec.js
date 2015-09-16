describe("Methods: scheduleGame()", function() {
  
  var game = {_id: "123"}, userId = "ABC";

  it("schedule a game", function() {
    spyOn(Games, "hasScheduled").and.returnValue(null);
    spyOn(Places, "isOutOfSchedule").and.returnValue(null);
    spyOn(Games, "schedule");

    Meteor.methodMap.userId = userId;
    Meteor.methodMap.scheduleGame(game);

    expect(Places.isOutOfSchedule).toHaveBeenCalledWith(game);
    expect(Games.hasScheduled).toHaveBeenCalledWith(game);
    expect(Games.schedule).toHaveBeenCalledWith(game);
  });

  it("not schedule a game if user not logged in", function() {
    Meteor.methodMap.userId = undefined;

    try {
      Meteor.methodMap.scheduleGame(game);
    } catch (e) {
      expect(e.error).toEqual(403);
      expect(e.reason).toEqual("You are not logged in");
    }
    expect(Meteor.methodMap.scheduleGame).toThrow();
  });

  it("not schedule a game if game was scheduled before", function() {
    spyOn(Games, "hasScheduled").and.returnValue(true);
    spyOn(Places, "isOutOfSchedule").and.returnValue(null);
    spyOn(Games, "schedule");

    Meteor.methodMap.userId = userId;
    Meteor.methodMap.scheduleGame(game);

    expect(Places.isOutOfSchedule).toHaveBeenCalledWith(game);
    expect(Games.hasScheduled).toHaveBeenCalledWith(game);
    expect(Games.schedule).not.toHaveBeenCalled();
  });

  it("not schedule a game if scheduled is out place rules", function() {
    spyOn(Games, "hasScheduled").and.returnValue(null);
    spyOn(Places, "isOutOfSchedule").and.returnValue(true);
    spyOn(Games, "schedule");

    Meteor.methodMap.userId = userId;
    Meteor.methodMap.scheduleGame(game);

    expect(Places.isOutOfSchedule).toHaveBeenCalledWith(game);
    expect(Games.hasScheduled).not.toHaveBeenCalled();
    expect(Games.schedule).not.toHaveBeenCalled();
  });

});