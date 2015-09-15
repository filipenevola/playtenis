Accounts.validateLoginAttempt(function(attempt) {
  console.log(attempt.user);
  return !attempt.user.blocked;
});

Accounts.onCreateUser(function(options, user) {
  user.name = options.profile.name;
  user.email = user.emails[0].address;
  user.blocked = false;
  user.games = [];
  return user;
});