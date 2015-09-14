Meteor.startup(function() {
  // First user is the admin
  try {
    var userId = Accounts.createUser(Meteor.settings.adminUser);
    Houston._admins.insert({user_id: userId});
    console.log("Admin is ready!");
  } catch (e) {
    console.log("Admin already exist.");
  }
  Houston.add_collection(Meteor.users);
  console.log("PlayTenis");
});