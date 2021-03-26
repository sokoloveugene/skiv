const LocalStrategy = require("passport-local");
const User = require("../../../models/User");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, {
          errors: { "email or password": "is invalid" },
        });
      }

      const isPasswordValid = await user.checkPassword(password);

      if (!isPasswordValid) {
        return done(null, false, {
          errors: { "email or password": "is invalid" },
        });
      }

      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  }
);
