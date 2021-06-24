const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: { type: String, required: [true, "Password is required"] },
  firstname: { type: String, required: [true, "Firstname is required"] },
  lastname: { type: String, required: [true, "LastName is required"] },
  fullname: { type: String },
  email: { type: String, required: [true, "Email is required"] },
  bio: String,
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
