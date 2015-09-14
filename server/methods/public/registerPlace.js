Meteor.methods({
  registerPlace: function(place, modifier, docId) {
    PlacesSchema.clean(place);
    check(place, PlacesSchema);
    check(modifier, Match.Any);
    check(docId, Match.Any);
    if (!this.userId) {
      throw new Meteor.Error(403, "You are not logged in");
    } else {
      Places.insert(place);
    }
  }
})