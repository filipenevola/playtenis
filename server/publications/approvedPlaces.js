Meteor.publish("approvedPlaces", function() {
  return Places.findApproved();
});