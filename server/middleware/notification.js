const Notifications = require("../models/notification.model");

const addFirstNotification = async (req, res, next) => {
  const { user, notification_type, notifiedUserIds, postId } = req;
  req.notifiedUsers = [];
 
  for (let notifiedUserId of notifiedUserIds) {
    const notification_user = await Notifications.findOne({
      notifiedUserId,
    });

    if (notification_user) {
      req.notifiedUsers = [...req.notifiedUsers, notification_user];
    } else {
      const newNotification = new Notifications({
        notifiedUserId,
        notifications: [
          {
            notification_type,
            post: postId,
            user: user._id,
          },
        ],
      });
      await newNotification.save();
    }
  }

  next();
};
const addNotification = async (req, res, next) => {
  const { user, notification_type, notifiedUsers, postId } = req;

  for (let notifiedUser of notifiedUsers) {
    notifiedUser.notifications.push({
      notification_type,
      post: postId,
      user: user._id,
    });
    await notifiedUser.save();
  }

  next();
};

const readNotification = async (req, res, next) => {
  const { user, notificationId } = req;
  const notifiedUser = await Notifications.findOne({
    notifiedUserId: user._id,
  });
  notifiedUser.notifications.forEach((notification) => {
    if (notification._id === notificationId) {
      notification.isRead = true;
    }
  });
  next();
};
module.exports = { addFirstNotification, addNotification, readNotification };
