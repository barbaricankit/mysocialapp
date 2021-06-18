import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const fetchFollowers = createAsyncThunk(
  "fetch/followers",
  async (token) => {
    const response = await axios({
      method: "GET",
      url: `${URL}/follower`,
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
    error: "",
  },
  extraReducers: {
    [fetchFollowers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFollowers.fulfilled]: (state, action) => {
      const { followers } = action.payload;
      if (action.payload.success && followers) {
        state.status = "success";
        state.followers = followers;
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
