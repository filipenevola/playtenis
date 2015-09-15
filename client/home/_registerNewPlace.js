Template._registerNewPlace.onRendered(function() {
  Session.set("ionTab.current", "home");
});

Template._registerNewPlace.helpers({
  placesSchema: function() {
    return PlacesSchema;
  }
});

AutoForm.hooks({
  registerNewPlace: {
    onSuccess: function (operation, result, template) {
      IonPopup.show({
        title: "Nice!",
        template: "Please wait the admin approve this place for future play's schedules",
        buttons: [{
          text: "Ok",
          type: "button-positive",
          onTap: function() {
            IonPopup.close();
            IonModal.close();
          }
        }]
      });
    },
    onError: function(operation, error, template) {
      if (error.reason) {
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
  }
});