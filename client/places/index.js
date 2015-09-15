Template.place.onRendered(function() {
  Session.set("ionTab.current", "home");
});

Template.place.helpers({
  currentPlace: function() {
    var placeId = Router.current().params._id;
    return Places.findOneApprovedBy(placeId);
  }
});