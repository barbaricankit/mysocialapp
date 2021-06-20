const Comments = require("../models/comment.model");
const Posts = require("../models/post.model");

const likedPost = async (req, res, next) => {
  const { user, postId } = req;
  const post = await Posts.findById(postId);
  let updateLikeCount = false;
  await post.likes.forEach(async (userId, index) => {
    if (userId.toString() === user._id.toString()) {
      post.likes.splice(index, 1);
      updateLikeCount = true;
      await post.save();
    }
  });

  if (updateLikeCount) {
    res.json({ success: true, post });
  } else {
    post.likes.push(user.id);
    await post.save();

    if (post.user === user.id) {
      res.json({ success: true, post });
    } else {
      req.post = post;
      req.postId = post._id;
      next();
    }
  }
};

const likedComment = async (req, res, next) => {
  const { user, postId } = req;

  const comment = await Comments.findById(postId);
  let updateLikeCount = false;
  await comment.likes.forEach(async (userId, index) => {
    if (userId.toString() === user._id.toString()) {
      comment.likes.splice(index, 1);
      updateLikeCount = true;
      await comment.save();
    }
  });

  if (updateLikeCount) {
    res.json({ success: true, comment });
  } else {
    comment.likes.push(user.id);
    await comment.save();
    if (comment.user === user.id) {
      res.json({ success: true, comment });
    } else {
      req.comment = comment;
      next();
    }
  }
};

const likeNotification = async (req, res, next) => {
  const { user } = req;

  req.notifiedUserIds = user.followers;
  req.notification_type = "LIKED_TYPE";
  next();
};

module.exports = { likedPost, likeNotification, likedComment };
