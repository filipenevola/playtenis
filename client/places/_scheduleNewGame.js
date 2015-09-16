Template._scheduleNewGame.onRendered(function() {
  Session.set("ionTab.current", "home");
});

Template._scheduleNewGame.helpers({
  gamesSchema: function() {
    return GamesSchema;
  },
  getPlaceId: function() {
    return Router.current().params._id;
  },
  getCourtId: function() {
    return Template.instance().data.id;
  },
  getCourtName: function() {
    return Template.instance().data.court;
  },
  currentPlace: function() {
    var placeId = Router.current().params._id;
    return Places.findOneApprovedBy(placeId);
  }
});

AutoForm.hooks({
  scheduleNewGame: {
    onSuccess: function (operation, result, template) {
      IonPopup.show({
        title: "Nice!",
        template: "The game was scheduled successfully!",
        buttons: [{
          text: "Ok",
          type: "button-positive",
          onTap: function() {
            IonPopup.close();
            IonModal.close();
            Router.go("/games");
          }
        }]
      });
    },
    onError: function(operation, error, template) {
      if (error.reason) {
        IonPopup.show({
          title: "Warning!",
          template: error.reason,
          buttons: [{
            text: "Ok",
            type: "button-assertive",
            onTap: function() {
              IonPopup.close();
            }
          }]
        });
      }
    }
  }
});