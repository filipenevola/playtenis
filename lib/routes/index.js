Router.configure({
  layoutTemplate: "layout",
  onBeforeAction: function() {
    if (Meteor.user()) {
      this.next();
    } else {
      this.render("login");
    }
  }
});