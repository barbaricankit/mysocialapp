const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const Users = require("../models/user.model");

router
  .route("/")
  .get(verifyToken, async (req, res) => {
    const { user } = req;
    const usersToFollow = await Users.find({
      _id: { $nin: [...user.following, user._id] },
    });
    for (let follow of usersToFollow) {
      follow.password = undefined;
    }

    res.json({ success: true, usersToFollow });
  })
  .post(verifyToken, async (req, res) => {
    const {
      user,
      body: { followId },
    } = req;
    const followUser = await Users.findById(followId);
    let addedFollowing = false;
    user.following.forEach((followingid, index1) => {
      if (followingid.toString() === followId.toString()) {
        user.following.splice(index1, 1);
        addedFollowing = true;

        followUser.followers.forEach((followerId, index2) => {
          if (followerId.toString() === user._id.toString()) {
            followUser.followers.splice(index2, 1);
          }
        });
      }
    });
    if (!addedFollowing) {
      user.following.push(followId);
      followUser.followers.push(user._id);
    }
    await user.save();
    await followUser.save();
    res.json({ success: true, followId });
  });

module.exports = router;
