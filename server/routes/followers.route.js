const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");

router.param("username", async (req, res, next, username) => {
  console.log({username})
  const userDetails = await Users.findOne({ username });
  req.userDetails = userDetails;
  console.log({userDetails})
  next();
});

router
  .route("/:username")
  .get(async (req, res) => {
    const { userDetails } = req;

    const { followers } = await userDetails.populate("followers").execPopulate();
    userDetails.password=undefined
    res.json({ success: true, followers,user:userDetails });
  })
  router
  .route("/")
  .post(async (req, res) => {
    const { user } = req;
    const { followerId } = req.body;
    const followerUser = await Users.findById(followerId);
    if (followerUser) {
      await user.followers.push(followerId);
      user.password = undefined;
      await user.save();
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "Invalid follower Id" });
    }
  });

module.exports = router;
