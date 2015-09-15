Meteor.publishComposite("currentGames", {
  find: function() {
    return Games.listAll(this.userId);
  },
  children: [
    {
      find: function(game) {
        return Places.find({_id: game.placeId});
      }
    }
  ]
});