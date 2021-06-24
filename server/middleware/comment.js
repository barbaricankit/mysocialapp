const Comments = require("../models/comment.model");
const Posts =require("../models/post.model")
const addNewComment = async (req, res, next) => {
  const { user, postId } = req;

  const { description } = req.body;

  const newComment = new Comments({
    user: user._id,
    description,
    post: postId,
  });
  const post = await Posts.findById(postId);
  post.comments += 1;
  req.postId = postId;
  await newComment.save();
  await post.save();
  if(post.user===user._id)
  {
    const comment = await newComment.populate("user").execPopulate();
    comment.user.password = undefined;
    res.json({ success: true, comments: comment });
  }else{
    req.comment = newComment;
  req.post=post
  next();}
};

const commentNotification = async (req, res, next) => {
  const { post} = req;
  req.notifiedUserIds = [post.user];
  req.notification_type = "COMMENT_TYPE";
  next();
};

module.exports = { addNewComment, commentNotification };
