const express = require("express");
const Notifications = require("../models/notification.model");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const { user } = req;
  const notifications = await Notifications.findOne({
    notifiedUserId: user._id,
  })
    .populate("notifications.user")
    .populate("notifications.post");
  notifications?.notifications.sort(
    (notification1, notification2) =>
      notification2.createdAt - notification1.createdAt
  );
  for (let notification of notifications?.notifications) {
    notification.user.password = undefined;
  }
  res.json({ success: true, notifications });
});

router.route("/read").post(async (req, res) => {
  res.json({ success: true, message: "Notifcation read successfully" });
});
module.exports = router;
