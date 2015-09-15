Places = new Mongo.Collection("places");

Places.before.insert(function(userId, place) {
  place.courts.forEach(function(court) {
    court.slugname = slugify(court.name);
  });
});

Places.findApproved = function() {
  return this.find(
    {approved: true}, 
    {fields: {name:1, street:1, city:1, state:1, approved:1}}
  );
};

Places.findOneApprovedBy = function(_id) {
  return this.findOne({_id: _id, approved: true});
};

Places.isOutOfSchedule = function(game) {
  var place = this.findOneApprovedBy(game.placeId);
  return (game.startHour < place.openHour || game.endHour > place.closeHour);
};