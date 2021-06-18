const mongoose = require("mongoose");
const Posts = require("./post.model");
const Notifications = require("./notification.model");
const Messages = require("./message.model");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  password: { type: String, required: [true, "Password is required"] },
  firstname: { type: String, required: [true, "Firstname is required"] },
  lastname: { type: String, required: [true, "LastName is required"] },
  email: { type: String, required: [true, "Email is required"] },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  messages: [{ type: Schema.Types.ObjectId, ref: Messages }],
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
