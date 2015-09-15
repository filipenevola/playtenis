Places = new Mongo.Collection("places");

Places.before.insert(function(userId, place) {
  place.courts.forEach(function(court) {
    court.slugname = slugify(court.name);
  });
});

Places.findApproved = function() {
  return this.find({approved: true});
};

Places.findOneApprovedBy = function(_id) {
  return this.findOne({_id: _id, approved: true});
};