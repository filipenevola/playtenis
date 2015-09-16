_.extend(Meteor.users, {
  acceptGame: function(gameId, userId) {
    var games = this.findOne(userId).games;
    games.forEach(function(game) {
      if (game.gameId === gameId) {
        game.accepted = true;
      }
    });
    this.update(userId, {$set: {games: games}});
  },
  quitGame: function(gameId, userId) {
    var user = this.findOne(userId);
    var games = user.games.filter(function(game) {
      return game.gameId !== gameId;
    });
    this.update(userId, {$set: {games: games}});
  },
  cancelGame: function(gameId) {
    var self = this;
    var users = self.find(
      {"games.gameId": gameId},
      {fields: {games: 1}}
    ).fetch();
    users.forEach(function(user) {
      var games = user.games.filter(function(game) {
        return game.gameId !== gameId;
      });
      self.update(user._id, {$set: {games: games}});
    });
  }
});