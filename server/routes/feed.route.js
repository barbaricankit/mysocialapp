const express = require("express");
const router = express.Router();
const Posts = require("../models/post.model");

router.route("/").get(async (req, res) => {
  const { user } = req;
  const userPosts = await Posts.find({ user: user._id }).populate("user");
  let feeds = [...userPosts];
  const followingPosts = await Posts.find({
    user: { $in: user.following },
  }).populate("user");
  feeds = [...feeds, ...followingPosts];
  feeds.sort((post1, post2) => post2.createdAt - post1.createdAt);
  feeds.forEach((feed) => (feed.user.password = undefined));
  res.json({ success: true, feeds });
});

module.exports = router;
