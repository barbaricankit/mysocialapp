import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const fetchFollowing = createAsyncThunk(
  "fetch/following",
  async (postData) => {
    const {token,username}=postData
    const user=username.split("@")[1];
    const response = await axios({
      method: "GET",
      url: `${URL}/following/${user}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const followingSlice = createSlice({
  name: "following",
  initialState: {
    status: "idle",
    followings: [],
    user:{},
    error: "",
  },
  extraReducers: {
    [fetchFollowing.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFollowing.fulfilled]: (state, action) => {
      
      if (action.payload.success) {
        const { following,user } = action.payload;
        state.status = "success";
        state.followings = following;
        state.user=user;
      }
    },
    [fetchFollowing.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
  },
});

export default followingSlice.reducer;
