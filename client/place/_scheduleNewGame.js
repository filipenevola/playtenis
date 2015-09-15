Template._scheduleNewGame.helpers({
  gamesSchema: function() {
    return GamesSchema;
  },
  currentPlace: function() {
    var placeId = Router.current().params._id;
    return Places.findOneApprovedBy(placeId);
  }
});

AutoForm.hooks({
  scheduleNewGame: {
    onSubmit: function(game) {
      game.placeId = Router.current().params.placeId;
      game.courtId = Template.instance().data.courtId;
      this.done();
      return false;
    },
    onSuccess: function (operation, result, template) {
      IonPopup.show({
        title: "Nice!",
        template: "The game was scheduled successfully!",
        buttons: [{
          text: "Ok",
          type: "button-positive",
          onTap: function() {
            IonPopup.close();
            Router.go("/");
          }
        }]
      });
    },
    onError: function(operation, error, template) {
      IonPopup.show({
        title: "Warning!",
        template: "Something is wrong<br>Reason: "+ error.reason,
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
});