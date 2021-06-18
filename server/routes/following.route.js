const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");

router
  .route("/")
  .get(async (req, res) => {
    const { user } = req;
    const { following } = await user.populate("following").execPopulate();
    res.json({ success: true, following });
  })
  .post(async (req, res) => {
    const { user } = req;
    const { followedId } = req.body;
    const followedUser = await Users.findById(followedId);
    if (followedUser) {
      await user.following.push(followedId);
      await user.save();
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "Invalid followed Id" });
    }
  });

module.exports = router;
