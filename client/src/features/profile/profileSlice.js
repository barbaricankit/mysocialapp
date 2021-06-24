import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const fetchProfileDetails = createAsyncThunk('/fetch/profile/details', async (postData) => {
	const { token, username } = postData;
	const response = await axios({
		method: 'GET',
		url: `${URL}/profile/${username}`,
		headers: { Authorization: `Bearer ${token}` }
	});
	return response.data;
});
export const fetchPosts = createAsyncThunk('/fetch/profile/posts', async (postData) => {
	const { token, username } = postData;
	const response = await axios({
		method: 'GET',
		url: `${URL}/profile/posts/${username}`,
		headers: { Authorization: `Bearer ${token}` }
	});
	return response.data;
});
export const fetchBookmarkPosts = createAsyncThunk('/fetch/profile/bookmarks', async (token) => {
	const response = await axios({
		method: 'GET',
		url: `${URL}/bookmarks`,
		headers: { Authorization: `Bearer ${token}` }
	});
	return response.data;
});

const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		postStatus: 'idle',
		profileStatus: 'idle',
		bookMarkStatus: 'idle',
		error: '',
		posts: [],
		profileUser: {},
		postUser: [],
		bookmarkPost: [],
		firstname: '',
		lastname: '',
		email: '',
		bio: ''
	},
	reducers: {
		userLikedProfilePost: (state, action) => {
			state.posts.forEach((post, index) => {
				if (post._id.toString() === action.payload.post._id.toString()) {
					state.posts[index].likes = action.payload.post.likes;
				}
			});
		},
		updateCommentCountInProfilePosts: (state, action) => {
			state.posts.forEach((post) => {
				if (post._id === action.payload.postId) {
					post.comments += 1;
				}
			});
		},
		updateBookmarkStatus: (state) => {
			state.bookMarkStatus = 'idle';
		},
		initialProfileDetails: (state, action) => {
			const { firstname, lastname, email, bio } = action.payload.user;
			state.firstname = firstname;
			state.lastname = lastname;
			state.email = email;
			state.bio = bio;
		},
		updateFirstname: (state, action) => {
			const { firstname } = action.payload;
			state.firstname = firstname;
		},
		updateLastname: (state, action) => {
			const { lastname } = action.payload;
			state.lastname = lastname;
		},
		updateEmail: (state, action) => {
			const { email } = action.payload;
			state.email = email;
		},
		updateBio: (state, action) => {
			const { bio } = action.payload;
			state.bio = bio;
		}
	},
	extraReducers: {
		[fetchProfileDetails.pending]: (state) => {
			state.profileStatus = 'loading';
		},
		[fetchProfileDetails.fulfilled]: (state, action) => {
			if (action.payload.success) {
				state.profileStatus = 'success';
				state.profileUser = action.payload.user;
			}
		},
		[fetchProfileDetails.rejected]: (state, action) => {
			state.profileStatus = 'error';
			state.error = 'Something went wrong, please try again later';
			console.log(action.error.message);
		},
		[fetchPosts.pending]: (state) => {
			state.postStatus = 'loading';
		},
		[fetchPosts.fulfilled]: (state, action) => {
			if (action.payload.success) {
				state.postStatus = 'success';
				state.posts = action.payload.posts;
				state.postUser = action.payload.user;
			}
		},
		[fetchPosts.rejected]: (state, action) => {
			state.postStatus = 'error';
			state.error = 'Something went wrong, please try again later';
			console.log(action.error.message);
		},
		[fetchBookmarkPosts.pending]: (state) => {
			state.bookMarkStatus = 'loading';
		},
		[fetchBookmarkPosts.fulfilled]: (state, action) => {
			if (action.payload.success) {
				state.bookMarkStatus = 'success';
				state.bookmarkPost = action.payload.posts;
			}
		},
		[fetchBookmarkPosts.rejected]: (state, action) => {
			state.bookMarkStatus = 'error';
			state.error = 'Something went wrong, please try again later';
			console.log(action.error.message);
		}
	}
});

export const {
	userLikedProfilePost,
	updateBookmarkStatus,
	initialProfileDetails,
	updateFirstname,
	updateBio,
	updateEmail,
	updateLastname,
	updateCommentCountInProfilePosts
} = profileSlice.actions;

export default profileSlice.reducer;
