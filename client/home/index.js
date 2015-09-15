Template.home.onRendered(function() {
  Session.set("ionTab.current", "home");
});

Template.home.helpers({
  approvedPlaces: function() {
    return Places.findApproved();
  }
});