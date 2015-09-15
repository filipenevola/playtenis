Template.place.helpers({
  currentPlace: function() {
    var placeId = Router.current().params._id;
    return Places.findOneApprovedBy(placeId);
  }
});