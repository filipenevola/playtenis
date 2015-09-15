Meteor.startup(function() {
  // First user is the admin
  try {
    var userId = Accounts.createUser(Meteor.settings.adminUser);
    Houston._admins.insert({user_id: userId});
    console.log("PlayTenis - Admin is ready!");
  } catch (e) {
    console.log("PlayTenis - Admin already exist.");
  }
  Houston.add_collection(Meteor.users);
  // Reset data for tests purposes
  // Places.remove({});
  // Games.remove({});
});