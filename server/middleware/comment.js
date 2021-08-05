const Comments = require('../models/comment.model')
const Posts = require('../models/post.model')
const addNewComment = async (req, res, next) => {
  const { user, postId } = req

  const { description } = req.body

  const newComment = new Comments({
    user: user._id,
    description,
    post: postId,
  })
  const post = await Posts.findById(postId)
  post.comments += 1
  req.postId = postId
  await newComment.save()
  await post.save()
  if (post.user.toString() === user._id.toString()) {
    req.isPostUser = true
    req.comment = newComment
    req.post = post
    next()
  } else {
    req.comment = newComment
    req.post = post
    req.isPostUser = false
    next()
  }
}

const commentNotification = async (req, res, next) => {
  const { user, postId, post, isPostUser, comment } = req
  const comments = await Comments.find({ post: postId })
  const userIds = comments.filter((comment) => comment.user !== user._id)
  if (isPostUser) {
    if (userIds.length) {
      const comments = await comment.populate('user').execPopulate()
      comments.user.password = null
      res.json({ success: true, comments })
    } else {
      req.notifiedUserIds = userIds
      next()
    }
  } else {
    req.notifiedUserIds = [...userIds, post.user]
    next()
  }
}

module.exports = { addNewComment, commentNotification }
