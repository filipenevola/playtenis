Accounts.validateLoginAttempt(function(attempt) {
  console.log(attempt.user);
  console.log("=============");
  return !attempt.user.blocked;
});

Accounts.onCreateUser(function(options, user) {
  user.blocked = false;
  return user;
});