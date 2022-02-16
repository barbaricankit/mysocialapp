import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const fetchFollowers = createAsyncThunk(
  "fetch/followers",
  async (postData) => {
    const {token,username}=postData
    const user=username.split("@")[1];
    const response = await axios({
      method: "GET",
      url: `${URL}/follower/${user}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const followerSlice = createSlice({
  name: "follower",
  initialState: {
    status: "idle",
    followers: [],
    user:{},
    error: "",
  },
  extraReducers: {
    [fetchFollowers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFollowers.fulfilled]: (state, action) => {
      
      if (action.payload.success) {
        const { followers,user } = action.payload;
        state.status = "success";
        state.followers = followers;
        state.user=user
      }
    },
    [fetchFollowers.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
  },
});

export default followerSlice.reducer;
