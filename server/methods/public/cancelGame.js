Meteor.methods({
  cancelGame: function(gameId) {
    check(gameId, String);
    if (!this.userId) {
      throw new Meteor.Error(403, "You are not logged in");
    } else {
      var currentGame = Games.findCurrent(gameId, this.userId);
      if (!currentGame) {
        throw new Meteor.Error(412, "You cannot cancel this game");
      } else {
        Games.cancel(gameId, this.userId);
        Meteor.users.cancelGame(gameId);
      }
    }
  }
});