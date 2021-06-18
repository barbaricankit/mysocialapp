import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import feedReducer from "../features/feed/feedSlice";
import followerReducer from "../features/user/followers/followerSlice";
import followingReducer from "../features/user/following/followingSlice";
import notificationReducer from "../features/notification/notificationSlice";
import tweetReducer from "../features/tweet/tweetSlice";
import profileReducer from "../features/profile/profileSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    tweet: tweetReducer,
    notification: notificationReducer,
    followers: followerReducer,
    following: followingReducer,
    profile: profileReducer,
    user: userReducer,
  },
});
