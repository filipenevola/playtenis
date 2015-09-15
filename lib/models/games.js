Games = new Mongo.Collection("games");

Games.before.insert(function(userId, game) {
  game.players.push({email: Meteor.user().email});
});

Games.hasScheduled = function(game) {
  return this.findOne({
    courtId: game.courtId, 
    placeId: game.placeId,
    playDate: game.playDate,
    startHour: game.startHour
  });
};

Games.listAll = function(userId) {
  var games = Meteor.users.findOne(userId).games;
  var gamesId = games.map(function(game) {
    return game.gameId;
  });
  return Games.find(
    {_id: {$in: gamesId}},
    {sort: {playDate: 1, startHour: 1}}
  );
};