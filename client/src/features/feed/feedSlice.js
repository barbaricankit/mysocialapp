import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;
export const fetchFeeds = createAsyncThunk("fetch/feed", async (token) => {
  const response = await axios.get(`${URL}/feeds`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

const feedSlice = createSlice({
  name: "feeds",
  initialState: {
    feeds: [],
    status: "idle",
    error: "",
  },
  reducers: {
    addNewFeed: (state, action) => {
      state.feeds = [action.payload.feed, ...state.feeds];
      state.status = "idle";
    },
    userLikedFeedPost: (state, action) => {
      console.log({ action });
      state.feeds.forEach((feed, index) => {
        if (feed._id.toString() === action.payload.post._id.toString()) {
          console.log(state.feeds[index]._id, action.payload.post._id);
          state.feeds[index].likes = action.payload.post.likes;
        }
      });
    },
  },
  extraReducers: {
    [fetchFeeds.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFeeds.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = "success";
        state.feeds = action.payload.feeds;
      } else {
        state.status = "error";
      }
    },
    [fetchFeeds.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong. Please try again later";
      console.log(action.error.message);
    },
  },
});
export const { addNewFeed, userLikedFeedPost } = feedSlice.actions;

export default feedSlice.reducer;
