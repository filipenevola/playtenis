Template.games.onRendered(function() {
  Session.set("ionTab.current", "game");
});

Template.games.helpers({
  currentGames: function() {
    return Games.listAll(Meteor.userId());
  },
  place: function() {
    return Places.findOne(this.placeId);
  },
  friends: function() {
    return this.players.filter(function(player) {
      return player.email !== Meteor.user().email;
    });
  },
  nextPlayDate: function() {
    return moment(this.playDate).format("YYYY-MM-DD");
  },
  isMyGame: function() {
    return Meteor.userId() === this.userId;
  },
  isInvite: function() {
    var games = Meteor.user().games;
    var gameId = this._id;
    return games.filter(function(game) {
      return game.gameId === gameId && !game.accepted;
    });
  }
});

Template.games.events({
  "click button[data-cancel]": function(e, template) {
    var button = e.target; 
    button.disabled = true;
    IonPopup.confirm({
      title: "Are you sure?",
      template: "Are you <strong>really</strong> sure?",
      onOk: function() {
        Meteor.call("cancelGame", button.getAttribute("data-cancel"));
      },
      onCancel: function() {
        button.disabled = false;
      }
    });
  },
  "click button[data-accept]": function(e, template) {
    var button = e.target; 
    button.disabled = true;
    Meteor.call("acceptGame", button.getAttribute("data-accept"));
  },
  "click button[data-deny]": function(e, template) {
    var button = e.target; 
    button.disabled = true;
    IonPopup.confirm({
      title: "Are you sure?",
      template: "Are you <strong>really</strong> sure?",
      onOk: function() {
        Meteor.call("denyGame", button.getAttribute("data-deny"));
      },
      onCancel: function() {
        button.disabled = false;
      }
    });
  }
});