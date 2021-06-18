import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;
export const fetchSignInCall = createAsyncThunk(
  "/signin",
  async ({ username, password }) => {
    const response = await axios.post(`${URL}/user/signin`, {
      username,
      password,
    });

    return response.data;
  }
);
export const fetchSignUpCall = createAsyncThunk(
  "/signup",
  async ({ firstname, lastname, username, password, email }) => {
    const response = await axios.post(`${URL}/user/signup`, {
      firstname,
      lastname,
      username,
      password,
      email,
    });
    return response.data;
  }
);
export const verifyToken = createAsyncThunk("/auth/token", async (token) => {
  const response = await axios({
    method: "GET",
    url: `${URL}/user/login`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: "",
    user: {},
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    reEnterPassword: "",
    login: false,
    token: null,
  },
  reducers: {
    enteredFirstname: (state, action) => {
      state.firstname = action.payload.value;
    },
    enteredLastname: (state, action) => {
      state.lastname = action.payload.value;
    },
    enteredEmail: (state, action) => {
      state.email = action.payload.value;
    },
    enteredPassword: (state, action) => {
      state.password = action.payload.value;
    },
    reEnteredPassword: (state, action) => {
      state.reEnterPassword = action.payload.value;
    },
    enteredUsername: (state, action) => {
      state.username = action.payload.value;
    },
    userClickedLogOut: (state) => {
      state.token = null;
      state.user = "";
      state.status = "idle";
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [fetchSignInCall.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSignInCall.fulfilled]: (state, action) => {
      if (action.payload.success) {
        const { token, user } = action.payload;
        state.status = "success";
        state.token = token;
        state.login = true;
        state.user = user;
        localStorage.setItem("token", JSON.stringify({ token }));
      } else {
        state.status = "error";
        state.error = action.payload.message;
      }
    },
    [fetchSignInCall.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
    [fetchSignUpCall.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSignUpCall.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.status = "success";
      state.token = token;
      state.login = true;
      state.user = user;
      localStorage.setItem("token", JSON.stringify({ token }));
    },
    [fetchSignUpCall.rejected]: (state, action) => {
      state.status = "error";
      state.error = "Something went wrong, please try again later";
      console.log(action.error.message);
    },
    [verifyToken.pending]: (state) => {
      state.status = "loading";
    },
    [verifyToken.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [verifyToken.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
    },
  },
});

export const {
  enteredFirstname,
  enteredLastname,
  enteredPassword,
  enteredUsername,
  enteredEmail,
  reEnteredPassword,
  userClickedLogOut,
} = authSlice.actions;
export default authSlice.reducer;
