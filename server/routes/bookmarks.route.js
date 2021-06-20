const express = require("express");
const { bookmarkedPost } = require("../middleware/bookmarks");
const Posts = require("../models/post.model");
const router = express.Router();

router.param("postId", async (req, res, next, postId) => {
  req.postId = postId;
  next();
});

router.route("/post/:postId").post(bookmarkedPost);

router.route("/").get(async (req, res) => {
  const { user } = req;
  const posts = await Posts.find({ _id: { $in: user.bookmarks } }).populate(
    "user"
  );

  res.json({ success: true, posts });
});
module.exports = router;
