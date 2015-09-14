Houston.methods(Places, {
  Approve: function(place) {
    PlacesSchema.clean(place);
    check(place, PlacesSchema);
    Places.update(place._id, {$set: {approved: true}});
    return place.name + " approved successfully.";
  }
});