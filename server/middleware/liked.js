const Posts = require("../models/post.model");

const likedPost = async (req, res, next) => {
  const { user } = req;
  const { postId } = req.body;
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
    req.post = post;
  } else {
    post.likes.push(user.id);
    await post.save();
    req.post = post;
  }
  next();
};

const likeNotification = async (req, res, next) => {
  const { user } = req;

  req.notifiedUserIds = user.followers;
  req.notification_type = "LIKED_TYPE";
  next();
};

module.exports = { likedPost, likeNotification };
