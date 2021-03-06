Router.route("/", {
  name: "home",
  fastRender: true,
  waitOn: function() {
    return [
      Meteor.subscribe("currentUser"),
      Meteor.subscribe("approvedPlaces")
    ];
  },
  action: function() {
    this.render("home");
  }
});