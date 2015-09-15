Meteor.publish("currentUser", function() {
  return Meteor.users.find(this.userId, 
    {fields: {email:1, blocked:1, games:1, name:1}}
  );
});