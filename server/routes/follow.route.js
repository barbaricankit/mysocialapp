const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const Users = require("../models/user.model");

router.route("/").get(verifyToken, async (req, res) => {
  const { user } = req;
  const usersToFollow = await Users.find({
    _id: { $nin: [...user.followers, user._id] },
  });
  for (let follow of usersToFollow) {
    follow.password = undefined;
  }

  res.json({ success: true, usersToFollow });
});

module.exports = router;
