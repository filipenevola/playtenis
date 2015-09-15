Houston.methods(Places, {
  Approve: function(place) {
    check(place, Match.Any);
    Places.update(place._id, {$set: {approved: true}});
    return place.name + " approved successfully.";
  }
});