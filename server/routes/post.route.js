const express = require("express");
const router = express.Router();
const {
  addFirstNotification,
  addNotification,
} = require("../middleware/notification");
const { addNewPost, postNotification } = require("../middleware/post");
const Posts = require("../models/post.model");

router.param("postId", async (req, res, next, postId) => {
  req.postId = postId;
  next();
});

router.route("/:postId").get(async (req, res) => {
  const { postId } = req;
  const post = await Posts.findById(postId).populate("user");
  post.user.password = undefined;
  res.json({ success: true, post });
});

router
  .route("/")
  .get(async (req, res) => {
    const { user } = req;
    const posts = await Posts.find({ user: user._id }).populate("user");
    posts.sort((post1, post2) => post2.createdAt - post1.createdAt);
    posts.forEach((post) => (post.user.password = undefined));
    res.json({ success: true, posts });
  })
  .post(
    addNewPost,
    postNotification,
    addFirstNotification,
    addNotification,
    async (req, res) => {
      const { notification, post, user } = req;
      const newPost = await post.populate("user").execPopulate();
      newPost.user.password = undefined;
      user.password = undefined;
      res.json({ success: true, notification, post: newPost, user });
    }
  );

module.exports = router;
