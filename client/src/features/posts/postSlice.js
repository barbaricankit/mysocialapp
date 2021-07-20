import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const URL = process.env.REACT_APP_SERVER_URL
export const getComments = createAsyncThunk(
  'post/comment',
  async (postData) => {
    const { token, postId } = postData
    const response = await axios({
      method: 'get',
      url: `${URL}/comment/${postId}`,
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  },
)
export const postComment = createAsyncThunk(
  'get/post/comments',
  async (postData) => {
    const { token, postId, description } = postData
    const response = await axios({
      method: 'post',
      url: `${URL}/comment/${postId}`,
      headers: { Authorization: `Bearer ${token}` },
      data: { description },
    })
    return response.data
  },
)
export const getPost = createAsyncThunk('get/post', async (postData) => {
  const { token, postId } = postData
  const response = await axios({
    method: 'get',
    url: `${URL}/posts/${postId}`,
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
})
const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: null,
    comments: [],
    status: 'idle',
    error: '',
  },
  reducers: {
    userLikedComment: (state, action) => {
      state.comments.forEach((comment, index) => {
        if (comment._id.toString() === action.payload.comment._id.toString()) {
          state.comments[index].likes = action.payload.comment.likes
        }
      })
    },
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.status = 'loading'
    },
    [getPost.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.post = action.payload.post
      } else {
        state.status = 'error'
      }
    },
    [getPost.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong. Please try again later'
      console.log(action.error.message)
    },
    [postComment.pending]: (state) => {
      state.status = 'loading'
    },
    [postComment.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.comments = [action.payload.comments, ...state.comments]
      } else {
        state.status = 'error'
      }
    },
    [postComment.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong. Please try again later'
      console.log(action.error.message)
    },
    [getComments.pending]: (state) => {
      state.status = 'loading'
    },
    [getComments.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.comments = action.payload.comments
      } else {
        state.status = 'error'
      }
    },
    [getComments.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong. Please try again later'
      console.log(action.error.message)
    },
  },
})
export const { userLikedComment } = postSlice.actions

export default postSlice.reducer
