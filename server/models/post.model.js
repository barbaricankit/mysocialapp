const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    description: String,
    comments: Number,
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    retweet: Number,
    attachment: { type: Object },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
