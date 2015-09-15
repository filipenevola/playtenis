Router.route("/places/:_id", {
  name: "place",
  fastRender: true,
  waitOn: function() {
    return [
      Meteor.subscribe("currentUser"),
      Meteor.subscribe("currentPlace", this.params._id)
    ];
  },
  action: function() {
    this.render("place");
  }
});