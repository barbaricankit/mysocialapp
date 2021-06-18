const mongoose = require("mongoose");
const Users = require("./user.model");
const Comments = require("./comment.model");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    description: String,
    comments: { type: Schema.Types.ObjectId, ref: Comments },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    retweet: Number,
    share: Number,
    attachment: { type: Object },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
