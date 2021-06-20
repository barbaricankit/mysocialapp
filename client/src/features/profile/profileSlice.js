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
export const fetchBookmarkPosts = createAsyncThunk(
  "/fetch/profile/bookmarks",
  async (token) => {
    const response = await axios({
      method: "GET",
      url: `${URL}/bookmarks`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    postStatus: "idle",
    bookMarkStatus: "idle",
    error: "",
    posts: [],
    bookmarkPost: [],
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
  },
  reducers: {
    userLikedProfilePost: (state, action) => {
      state.posts.forEach((post, index) => {
        if (post._id.toString() === action.payload.post._id.toString()) {
          console.log(state.posts[index]._id, action.payload.post._id);
          state.posts[index].likes = action.payload.post.likes;
        }
      });
    },
    updateBookmarkStatus: (state) => {
      state.bookMarkStatus = "idle";
    },
    initialProfileDetails: (state, action) => {
      const { firstname, lastname, email, bio } = action.payload.user;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
      state.bio = bio;
    },
    updateFirstname: (state, action) => {
      const { firstname } = action.payload;
      state.firstname = firstname;
    },
    updateLastname: (state, action) => {
      const { lastname } = action.payload;
      state.lastname = lastname;
    },
    updateEmail: (state, action) => {
      const { email } = action.payload;
      state.email = email;
    },
    updateBio: (state, action) => {
      const { bio } = action.payload;
      state.bio = bio;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.postStatus = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.postStatus = "success";
        state.posts = action.payload.posts;
      }
    },
    [fetchPosts.rejected]: (state, action) => {
      state.postStatus = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
    [fetchBookmarkPosts.pending]: (state) => {
      state.bookMarkStatus = "loading";
    },
    [fetchBookmarkPosts.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.bookMarkStatus = "success";
        state.bookmarkPost = action.payload.posts;
      }
    },
    [fetchBookmarkPosts.rejected]: (state, action) => {
      state.bookMarkStatus = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
  },
});

export const {
  userLikedProfilePost,
  updateBookmarkStatus,
  initialProfileDetails,
  updateFirstname,
  updateBio,
  updateEmail,
  updateLastname,
} = profileSlice.actions;

export default profileSlice.reducer;
