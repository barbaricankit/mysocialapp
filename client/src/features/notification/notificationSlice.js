import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;
export const fetchNotificatons = createAsyncThunk(
  "fetch/notification",
  async (token) => {
    const response = await axios({
      method: "GET",
      url: `${URL}/notification`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    status: "idle",
    notifications: [],
  },
  extraReducers: {
    [fetchNotificatons.pending]: (state) => {
      state.status = "loading";
    },
    [fetchNotificatons.fulfilled]: (state, action) => {
      state.status = "success";
      state.notifications = action.payload.notifications;
    },
    [fetchNotificatons.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong. Please try again later";
      console.log(action.error.message);
    },
  },
});

export default notificationSlice.reducer;
