const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Email is not Valid").isEmail(),
    check("password", "Min length of password 5 symbols").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "This user already exist" });
      }

      // const hashedPassword = bcrypt.hashSync(password, 12);
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json("Something went wrong, please try again");
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Email is not Valid").normalizeEmail().isEmail(),
    check("password", "Min length of password 5 symbols").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      // check password
      const isMatchPassword = await bcrypt.compare(password, user.password);

      if (!isMatchPassword) {
        res.status(400).json({ message: "Wrong password" });
      }

      const token = jwt.sign(
        {
          userId: user.id,
        },
        config.get("jwtSecret"),
        { expiresIn: "1h" }
      );

      // default status 200
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json("Something went wrong, please try again");
    }
  }
);

module.exports = router;
