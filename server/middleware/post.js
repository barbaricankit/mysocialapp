const Posts = require("../models/post.model");

const addNewPost = async (req, res, next) => {
  const { user } = req;
  const { description, attachment } = req.body;

  const newPost = new Posts({
    description,
    attachment,
    user: user._id,
  });

  await newPost.save();
  req.post = newPost;
  req.postId = newPost._id;
  next();
};

const postNotification = async (req, res, next) => {
  const { user } = req;
  req.notifiedUserIds = user.followers;
  req.notification_type = "POST_TYPE";
  next();
};

module.exports = { addNewPost, postNotification };
