const authProtected = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401);
    res.json({ isAuthenticated: false });
    return;
  }
  next();
};

module.exports = authProtected;
