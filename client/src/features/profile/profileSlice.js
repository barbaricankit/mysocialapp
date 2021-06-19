import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;
export const fetchPosts = createAsyncThunk(
  "/fetch/profile/posts",
  async (token) => {
    const response = await axios({
      method: "GET",
      url: `${URL}/posts`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    status: "idle",
    error: "",
    posts: [],
  },
  reducers: {
    userLikedProfilePost: (state, action) => {
      console.log({ action, posts: state.posts });
      state.posts.forEach((post, index) => {
        if (post._id.toString() === action.payload.post._id.toString()) {
          console.log(state.posts[index]._id, action.payload.post._id);
          state.posts[index].likes = action.payload.post.likes;
        }
      });
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = "success";
        state.posts = action.payload.posts;
      }
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
  },
});

export const { userLikedProfilePost } = profileSlice.actions;

export default profileSlice.reducer;
