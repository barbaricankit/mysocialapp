const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const MongooseConnection = require("./mongoose.db");
MongooseConnection();
const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const feedRouter = require("./routes/feed.route");
const followedUserRouter = require("./routes/following.route");
const followerUserRouter = require("./routes/followers.route");
const notificationRouter = require("./routes/notification.route");
const likedTweetRouter = require("./routes/liked.route");
const followRouter = require("./routes/follow.route");
const { verifyToken } = require("./middleware/auth");

app.use("/user", userRouter);
app.use("/posts", verifyToken, postRouter);
app.use("/feeds", verifyToken, feedRouter);
app.use("/follow", verifyToken, followRouter);
app.use("/following", verifyToken, followedUserRouter);
app.use("/follower", verifyToken, followerUserRouter);
app.use("/notification", verifyToken, notificationRouter);
app.use("/liked", verifyToken, likedTweetRouter);
app.get("/", async (req, res) => {
  res.json({ success: true, message: "Social Media Server" });
});

app.listen(PORT, async (req, res) => {
  console.log("Server started at PORT", PORT);
});
