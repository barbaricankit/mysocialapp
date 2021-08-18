const Posts = require("../models/post.model");

const bookmarkedPost = async (req, res, next) => {
  const { user, postId } = req;

  let updateBookmark = false;
  await user.bookmarks.forEach(async (id, index) => {
    if (id.toString() === postId.toString()) {
      user.bookmarks.splice(index, 1);
      updateBookmark = true;
      await user.save();
    }
  });

  if (updateBookmark) {
    res.json({ success: true, bookmarks: user.bookmarks });
  } else {
    user.bookmarks.unshift(postId);
    await user.save();
    res.json({ success: true, bookmarks: user.bookmarks });
  }
};

module.exports = { bookmarkedPost };
