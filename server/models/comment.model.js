const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    desciption: String,
    post: { type: Schema.Types.ObjectId, ref: "Posts" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    likes: Number,
    retweet: Number,
    share: Number,
    attachment: String,
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comment", commentSchema);

module.exports = Comments;
