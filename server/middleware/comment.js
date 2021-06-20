const Comments = require("../models/comment.model");

const addNewComment = async (req, res, next) => {
  const { user, postId } = req;

  const { description } = req.body;

  const newComment = new Comments({
    user: user._id,
    description,
    post: postId,
  });
  const posts = await Posts.findById(postId);
  posts.comment += 1;
  req.postId = postId;
  await newComment.save();
  await posts.save();
  req.comment = newComment;
  next();
};

const commentNotification = async (req, res, next) => {
  const { user } = req;
  req.notifiedUserIds = user.followers;
  req.notification_type = "COMMENT_TYPE";
  next();
};

module.exports = { addNewComment, commentNotification };
