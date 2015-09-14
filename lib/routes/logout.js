Router.route("/logout", {
  name: "logout",
  action: function() {
    Meteor.logout();
    this.redirect("/");
  }
});