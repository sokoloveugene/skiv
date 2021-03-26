const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const passport = require("../helpers/passport/index");
const router = Router();
const User = require("../models/User");

router.post(
  "/signUp",
  [check("email").isEmail(), check("password").isLength({ min: 8 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error" });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "This user already exist" });
      }

      const user = new User({ email });

      await user.setPassword(password);

      await user.save();

      req.login(user, (err) => {
        if (err) {
          console.log(err);
        }
      });

      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json("Something went wrong, please try again");
    }
  }
);

router.post(
  "/signIn",
  passport.authenticate("local", { session: true }),
  async (req, res) => {
    try {
      res.json({ isAuthenticated: true });
    } catch (e) {
      res.status(500).json("Something went wrong, please try again");
    }
  }
);

router.post("/logOut", (req, res) => {
  try {
    req.logOut();
    res.json({ isAuthenticated: false });
  } catch (err) {
    res.status(500).json("Something went wrong, please try again");
  }
});

router.get("/isAuth", (req, res) => {
  try {
    const isAuthenticated = req.isAuthenticated();
    res.json({ isAuthenticated });
  } catch (err) {
    res.status(500).json("Something went wrong, please try again");
  }
});

module.exports = router;
