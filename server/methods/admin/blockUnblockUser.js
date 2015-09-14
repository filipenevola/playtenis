Houston.methods(Meteor.users, {
  "Block/Unblock": function(user) {
    check(user, Match.Any);
    Meteor.users.update(user._id, {$set: {blocked: !user.blocked}});
    return "User was blocked successfully.";
  }
});