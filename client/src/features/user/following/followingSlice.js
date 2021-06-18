import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const fetchFollowing = createAsyncThunk(
  "fetch/following",
  async (token) => {
    const response = await axios({
      method: "GET",
      url: `${URL}/following`,
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
    error: "",
  },
  extraReducers: {
    [fetchFollowing.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFollowing.fulfilled]: (state, action) => {
      const { following } = action.payload;
      if (action.payload.success && following) {
        state.status = "success";
        state.followings = following;
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
