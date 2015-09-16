Meteor.methods({
  acceptGame: function(gameId) {
    check(gameId, String);
    if (!this.userId) {
      throw new Meteor.Error(403, "You are not logged in");
    } else {
      Meteor.users.acceptGame(gameId, this.userId);
    }
  }
});