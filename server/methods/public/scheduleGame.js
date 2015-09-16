Meteor.methods({
  scheduleGame: function(game, modifier, docId) {
    GamesSchema.clean(game);
    check(game, GamesSchema);
    check(modifier, Match.Any);
    check(docId, Match.Any);
    if (!this.userId) {
      throw new Meteor.Error(403, "You are not logged in");
    } else if (Places.isOutOfSchedule(game)) {
      throw new Meteor.Error(412, "You cannot schedule out of the court period's rules");
    } else if (Games.hasScheduled(game)) {
      throw new Meteor.Error(412, "You cannot schedule in this period");
    } else {
      Games.schedule(game);
    }
  }
});