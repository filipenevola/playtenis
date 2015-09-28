Games = new Mongo.Collection("games");

_.extend(Games, {
  hasScheduled: function(game) {
    return this.findOne({
      courtId: game.courtId, 
      placeId: game.placeId,
      playDate: game.playDate,
      startHour: game.startHour
    });
  },
  findCurrent: function(gameId, userId) {
    return this.findOne({_id: gameId, userId: userId});
  },
  listAll: function(userId) {
    check(userId, String);
    var games = Meteor.users.findOne(
      userId, 
      {fields: {games:1}}
    ).games;
    var gamesId = games.map(function(game) {
      return game.gameId;
    });
    return this.find(
      {_id: {$in: gamesId}},
      {sort: {playDate: 1, startHour: 1}}
    );
  },
  cancel: function(gameId, userId) {
    this.remove({_id: gameId, userId: userId});
  },
  quit: function(gameId) {
    var game = this.findOne(gameId);
    var players = game.players.filter(function(player) {
      return player.email !== Meteor.user().email;
    });
    this.update(gameId, {$set: {players: players}}); 
  },
  schedule: function(game) {
    var gameId = this.insert(game);
    var game = this.findOne(gameId);
    game.players.forEach(function(player) {
      var isAccepted = Meteor.user().email === player.email;
      Meteor.users.update(  
        {email: player.email},
        {$push: {games: {gameId: gameId, accepted: isAccepted}}}
      );
    });
  }
});

Games.before.insert(function(userId, game) {
  game.userId = userId;
  game.players.push({email: Meteor.user().email});
});