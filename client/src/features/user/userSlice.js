import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const URL = process.env.REACT_APP_SERVER_URL

export const fetchUserToFollow = createAsyncThunk(
  'fetch/userstofollow',
  async (token) => {
    const response = await axios({
      method: 'GET',
      url: `${URL}/follow`,
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  },
)
export const postFollowedUser = createAsyncThunk(
  'post/followedUser',
  async (postData) => {
    const { token, followId } = postData
    const response = await axios({
      method: 'POST',
      url: `${URL}/follow`,
      headers: { Authorization: `Bearer ${token}` },
      data: { followId },
    })
    return response.data
  },
)
export const getSearchedUsers = createAsyncThunk(
  'get/searchedUsers',
  async (postData) => {
    const { token, value: searchedText } = postData
    if (searchedText) {
      const response = await axios({
        method: 'POST',
        url: `${URL}/user/searchedUser`,
        headers: { Authorization: `Bearer ${token}` },
        data: { searchedText },
      })
      return response.data
    }
    return { success: true, users: [] }
  },
)
const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle',
    usersToFollow: [],
    error: '',
    searchedUserResult: [],
    searchedText: '',
  },
  reducers: {
    userEnterSearchText: (state, action) => {
      state.searchedText = action.payload.value
    },
  },
  extraReducers: {
    [getSearchedUsers.pending]: (state) => {
      state.status = 'loading'
    },
    [getSearchedUsers.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.searchedUserResult = action.payload.users
      }
    },
    [getSearchedUsers.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong, please try again later'
      console.log(action.error.message)
    },
    [fetchUserToFollow.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchUserToFollow.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.usersToFollow = action.payload.usersToFollow
      }
    },
    [fetchUserToFollow.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong, please try again later'
      console.log(action.error.message)
    },
    [postFollowedUser.pending]: (state) => {
      state.status = 'loading'
    },
    [postFollowedUser.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.usersToFollow = state.usersToFollow.filter(
          (user) => user._id !== action.payload.followId,
        )
      }
    },
    [postFollowedUser.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong, please try again later'
      console.log(action.error.message)
    },
  },
})
export const { userEnterSearchText } = userSlice.actions
export default userSlice.reducer
