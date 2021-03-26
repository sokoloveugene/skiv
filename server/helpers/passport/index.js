const passport = require("passport");
const User = require("../../models/User");

const localStrategy = require("./strategies/local");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, done);
});

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

passport.use(localStrategy);

module.exports = passport;
