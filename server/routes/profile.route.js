const express = require("express");
const router = express.Router();
const Posts = require("../models/post.model");
const Users = require("../models/user.model");

router.param("username", async (req, res, next, username) => {
  const userDetails = await Users.findOne({ username });
  req.userDetails = userDetails;
  next();
});

router.route("/:username").get(async (req, res) => {
  const { userDetails } = req;

  userDetails.password = undefined;
  res.json({ success: true, user: userDetails });
});

router.route("/posts/:username").get(async (req, res) => {
  const { userDetails } = req;
  const user = userDetails._id;
  const posts = await Posts.find({ user }).populate("user");
  posts.sort((post1, post2) => post2.createdAt - post1.createdAt);
  posts.forEach((post) => (post.user.password = undefined));
  res.json({ success: true, posts, user:userDetails });
});

module.exports = router;
