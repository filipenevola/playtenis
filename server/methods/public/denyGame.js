Meteor.methods({
  denyGame: function(gameId) {
    check(gameId, String);
    if (!this.userId) {
      throw new Meteor.Error(403, "You are not logged in");
    } else {
      Meteor.users.quitGame(gameId, this.userId);
      Games.quit(gameId);
    }
  }
});