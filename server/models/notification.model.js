const mongoose = require("mongoose");
const { Schema } = mongoose;
const notificationSchema = new Schema(
  {
    notifiedUserId: { type: Schema.Types.ObjectId, ref: "Users" },
    notifications: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        notification_type: {
          type: String,
          enum: ["POST_TYPE", "LIKED_TYPE", "FOLLOWER_TYPE"],
        },
        post: { type: Schema.Types.ObjectId, ref: "Post" },
        isRead: { type: Boolean, default: false },
        created_at: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Notifications = mongoose.model("Notification", notificationSchema);

module.exports = Notifications;
