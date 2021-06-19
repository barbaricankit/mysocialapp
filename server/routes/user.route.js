const express = require("express");
const router = express.Router();

const { newUser, validateCredentials } = require("../middleware/user");
const { createToken, verifyToken } = require("../middleware/auth");

router.route("/signup").post(newUser, createToken, async (req, res) => {
  const { token, user } = req;
  user.password = undefined;
  res.json({ success: true, token, user });
});

router.route("/login").get(verifyToken, async (req, res) => {
  const { token, user } = req;
  user.password = undefined;
  res.json({ success: true, user, token });
});
router
  .route("/signin")
  .post(validateCredentials, createToken, async (req, res) => {
    const { user, token } = req;
    user.password = undefined;
    res.status(200).json({
      success: true,
      token,
      user,
    });
  });
module.exports = router;
