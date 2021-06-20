const express = require("express");
const {
  likedComment,
  likedPost,
  likeNotification,
} = require("../middleware/liked");
const {
  addFirstNotification,
  addNotification,
} = require("../middleware/notification");
const router = express.Router();

router.param("postId", async (req, res, next, postId) => {
  req.postId = postId;
  next();
});

router
  .route("/post/:postId")
  .post(
    likedPost,
    likeNotification,
    addFirstNotification,
    addNotification,
    async (req, res) => {
      const { post } = req;

      res.json({ success: true, post });
    }
  );

router.route("/comment/:postId").post(
  likedComment,
  likeNotification,
  addFirstNotification,
  addNotification,

  async (req, res) => {
    const { comment } = req;

    res.json({ success: true, comment });
  }
);
module.exports = router;
