Meteor.methods({
  scheduleGame: function(game, modifier, docId) {
    GamesSchema.clean(game);
    check(game, GamesSchema);
    check(modifier, Match.Any);
    check(docId, Match.Any);
    if (!this.userId) {
      throw new Meteor.Error(403, "You are not logged in");
    } else {
      Games.insert(game);
    }
  }
});