import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	FeedPage,
	AddNewTweet,
	PrivateRoute,
	Login,
	SignIn,
	PostPage,
	SignUp,
	Notifications,
	Followers,
	Following,
	Profile,
	BookMarksPage
} from '.';
import DiscoverPeople from '../user/DiscoverPeople';
import SearchPage from '../user/SearchPage';

const MobileView = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/signin' element={<SignIn />} />
			<Route path='/signup' element={<SignUp />} />
			<PrivateRoute path='/' element={<FeedPage />} />
			<PrivateRoute path='/search' element={<SearchPage />} />
			<PrivateRoute path='/discoverpeople' element={<DiscoverPeople />} />
			<PrivateRoute path='/:username' element={<Profile />} />
			<PrivateRoute path='/compose/tweet' element={<AddNewTweet />} />
			<PrivateRoute path='/:username/status/:id' element={<PostPage />} />
			<PrivateRoute path='/:userId/notifications' element={<Notifications />} />
			<PrivateRoute path='/:username/followers' element={<Followers />} />
			<PrivateRoute path='/:username/following' element={<Following />} />
			<PrivateRoute path='/:username/bookmarks' element={<BookMarksPage />} />
		</Routes>
	);
};

export default MobileView;
