import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;
const IMAGE_UPLOAD_URL = process.env.REACT_APP_IMAGE_UPLOAD;
export const uploadImage = createAsyncThunk(
  "/upload/post/image",
  async (formData) => {
    const response = await axios({
      method: "POST",
      url: `${IMAGE_UPLOAD_URL}`,
      headers: { "content-type": "multipart/form-data" },
      data: formData,
    });
    return response.data;
  }
);

export const postNewTweet = createAsyncThunk(
  "/post/tweet",
  async (postData) => {
    const { description, token, attachment } = postData;
    const response = await axios({
      method: "post",
      url: `${URL}/posts`,
      headers: { Authorization: `Bearer ${token}` },

      data: {
        description,
        attachment,
      },
    });
    return response.data;
  }
);
const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    postText: "",
    post: {},
    status: "idle",
    uploadStatus: "idle",
    error: "",
    postImage: null,
  },
  reducers: {
    newPost: (state, action) => {
      state.postText = action.payload.tweet;
      state.status = "idle";
    },
    updateUploadStatus: (state) => {
      state.uploadStatus = "loading";
    },
    deleteImage: (state) => {
      state.postImage = null;
      state.uploadStatus = "idle";
    },
    addEmojis: (state, action) => {
      state.postText = state.postText + action.payload.emoji.toString();
    },
  },
  extraReducers: {
    [postNewTweet.pending]: (state) => {
      state.status = "loading";
    },
    [postNewTweet.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = "success";
        state.post = action.payload.post;
        state.postText = "";
      } else {
        state.status = "error";
      }
    },
    [postNewTweet.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong. Please try again later";
      console.log(action.error.message);
    },

    [uploadImage.fulfilled]: (state, action) => {
      if (action.payload.secure_url) {
        state.uploadStatus = "sucess";
        state.postImage = action.payload;
      } else {
        state.uploadStatus = "error";
      }
    },
    [uploadImage.rejected]: (state, action) => {
      state.uploadStatus = "error";
      state.error = "Something went wrong. Please try again later";
      console.log(action.error.message);
    },
  },
});

export const { newPost, deleteImage, updateUploadStatus, addEmojis } =
  tweetSlice.actions;

export default tweetSlice.reducer;
