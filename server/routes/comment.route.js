const express = require("express");
const { addNewComment, commentNotification } = require("../middleware/comment");
const { likedComment, likeNotification } = require("../middleware/liked");
const router = express.Router();
const {
  addFirstNotification,
  addNotification,
} = require("../middleware/notification");
const Comments = require("../models/comment.model");

router.param("postId", async (req, res, next, postId) => {
  req.postId = postId;
  next();
});

router
  .route("/:postId")

  .get(async (req, res) => {
    const { postId } = req;
    const comments = await Comments.find({ post: postId }).populate("user");

    comments.sort(
      (comment1, comment2) => comment2.createdAt - comment1.createdAt
    );
    comments.forEach((comment) => (comment.user.password = undefined));
    res.json({ success: true, comments });
  })
  .post(
    addNewComment,
    commentNotification,
    addFirstNotification,
    addNotification,
    async (req, res) => {
      const { comment } = req;

      const newComment = await comment.populate("user").execPopulate();
      newComment.user.password = undefined;
      res.json({ success: true, comments: newComment });
    }
  );

module.exports = router;
