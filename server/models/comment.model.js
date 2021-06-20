const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    description: String,
    post: { type: Schema.Types.ObjectId, ref: "Posts" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    retweet: Number,
    share: Number,
    attachment: { type: Object },
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comment", commentSchema);

module.exports = Comments;
