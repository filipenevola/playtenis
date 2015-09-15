Meteor.publish("currentPlace", function(placeId) {
  check(placeId, String);
  return Places.find({_id: placeId, approved: true});
});