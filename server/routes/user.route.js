const express = require("express");
const router = express.Router();

const {
  newUser,
  validateCredentials,
  updateUserDetails,
} = require("../middleware/user");
const { createToken, verifyToken } = require("../middleware/auth");
const Users = require("../models/user.model");

router.route("/searchedUser").post(verifyToken, async (req, res) => {
  const { searchedText } = req.body;
  const regex = { $regex: searchedText, $options: "i" };
  const users = await Users.find({
    $or: [
      { firstname: regex },
      { lastname: regex },
      { username: regex },
      { fullname: regex },
    ],
  });
  users.forEach((user) => (user.password = undefined));
  res.json({ success: true, users });
});
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
router.route("/details").post(verifyToken, updateUserDetails);
module.exports = router;
