const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");

router
  .route("/")
  .get(async (req, res) => {
    const { user } = req;

    const { followers } = await user.populate("followers").execPopulate();

    res.json({ success: true, followers });
  })
  .post(async (req, res) => {
    const { user } = req;
    const { followerId } = req.body;
    const followerUser = await Users.findById(followerId);
    if (followerUser) {
      await user.followers.push(followerId);

      await user.save();
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "Invalid follower Id" });
    }
  });

module.exports = router;
