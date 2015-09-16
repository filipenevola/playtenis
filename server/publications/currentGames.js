Meteor.publishComposite("currentGames", {
  find: function() {
    return Games.listAll(this.userId);
  },
  children: [
    {
      find: function(game) {
        return Places.findApprovedBy(game.placeId);
      }
    }
  ]
});