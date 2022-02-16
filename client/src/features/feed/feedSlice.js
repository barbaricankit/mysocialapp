import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const URL = process.env.REACT_APP_SERVER_URL
export const fetchFeeds = createAsyncThunk('fetch/feed', async (token) => {
  const response = await axios.get(`${URL}/feeds`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
})

const feedSlice = createSlice({
  name: 'feeds',
  initialState: {
    feeds: [],
    status: 'idle',
    error: '',
  },
  reducers: {
    addNewFeed: (state, action) => {
      const findPost = state.feeds.find(
        ({ _id }) => _id === action.payload.feed._id,
      )
      if (!findPost) {
        state.feeds = [action.payload.feed, ...state.feeds]
      }
    },
    userLikedFeedPost: (state, action) => {
      state.feeds.forEach((feed) => {
        if (feed._id.toString() === action.payload.postId.toString()) {
          const index = feed.likes.findIndex(
            (userId) => userId === action.payload.userId,
          )

          if (index !== -1) {
            feed.likes.splice(index, 1)
          } else {
            feed.likes.push(action.payload.userId)
          }
        }
      })
    },
    updateCommentCountInFeeds: (state, action) => {
      state.feeds.forEach((feed) => {
        if (feed._id === action.payload.postId) {
          feed.comments += 1
        }
      })
    },
    updatePostUserDetails: (state, action) => {
      const { firstname, lastname, email, bio } = action.payload.user
      state.feeds.forEach((feed) => {
        if (feed.user._id === action.payload.userId) {
          feed.user.fullname = firstname + ' ' + lastname
          feed.user.firstname = firstname
          feed.user.lastname = lastname
          feed.user.email = email
          feed.user.bio = bio
        }
      })
    },
  },
  extraReducers: {
    [fetchFeeds.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchFeeds.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.status = 'success'
        state.feeds = action.payload.feeds
      } else {
        state.status = 'error'
      }
    },
    [fetchFeeds.rejected]: (state, action) => {
      state.status = 'error'
      state.error = 'Something went wrong. Please try again later'
      console.log(action.error.message)
    },
  },
})
export const {
  addNewFeed,
  userLikedFeedPost,
  updateCommentCountInFeeds,
  updatePostUserDetails,
} = feedSlice.actions

export default feedSlice.reducer
