const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");

router.param("username", async (req, res, next, username) => {
  const userDetails = await Users.findOne({ username });
  req.userDetails = userDetails;
  next();
});

router
  .route("/:username")
  .get(async (req, res) => {

    const { userDetails } = req;
    const { following } = await userDetails.populate("following").execPopulate();
    userDetails.password=undefined;

    res.json({ success: true, following,user:userDetails });
  })
  router
  .route("/")
  .post(async (req, res) => {

    const { user } = req;
    const { followedId } = req.body;
    const followedUser = await Users.findById(followedId);
    if (followedUser) {
      await user.following.push(followedId);
      await user.save();
      user.password = undefined;
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "Invalid followed Id" });
    }
  });

module.exports = router;
