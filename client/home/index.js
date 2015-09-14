Template.home.helpers({
  approvedPlaces: function() {
    return Places.findApproved();
  }
});