Router.route("/games", {
  name: "games",
  fastRender: true,
  waitOn: function() {
    return [
      Meteor.subscribe("currentUser"),
      Meteor.subscribe("currentGames")
    ];
  },
  action: function() {
    this.render("games");
  }
});