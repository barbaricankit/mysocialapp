const express = require("express");
const { likedPost, likeNotification } = require("../middleware/liked");
const {
  addFirstNotification,
  addNotification,
} = require("../middleware/notification");
const router = express.Router();

router
  .route("/post")
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

module.exports = router;
