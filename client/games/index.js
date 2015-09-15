Template.games.onRendered(function() {
  Session.set("ionTab.current", "game");
});

Template.games.helpers({
  currentGames: function() {
    return Games.listAll(Meteor.userId());
  },
  friends: function() {
    return this.players.filter(function(player) {
      return player.email !== Meteor.user().email;
    });
  },
  nextPlayDate: function() {
    return moment(this.playDate).format("YYYY-MM-DD");
  },
  place: function() {
    return Places.findOne(this.placeId);
  }
});