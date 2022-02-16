import {
	Routes,
	Route,
	PostPage,
	Notifications,
	Followers,
	Following,
	PrivateRoute,
	Profile,
	BrowserFeed,
	Login,
	SignIn,
	SignUp,
	BrowserView,
	SearchPage,
	DiscoverPeople,
	BookMarksPage
} from '.';

const BrowserMainPage = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/signin' element={<SignIn />} />
			<Route path='/signup' element={<SignUp />} />
			<PrivateRoute path='/search' element={<BrowserView element={<SearchPage />} />} />
			<PrivateRoute path='/' element={<BrowserView element={<BrowserFeed />} />} />
			<PrivateRoute path='/discoverpeople' element={<BrowserView element={<DiscoverPeople />} />} />
			<PrivateRoute path='/:username' element={<BrowserView element={<Profile />} />} />
			<PrivateRoute path='/:username/status/:id' element={<BrowserView element={<PostPage />} />} />
			<PrivateRoute path='/:userId/notifications' element={<BrowserView element={<Notifications />} />} />
			<PrivateRoute path='/:username/followers' element={<BrowserView element={<Followers />} />} />
			<PrivateRoute path='/:username/following' element={<BrowserView element={<Following />} />} />
			<PrivateRoute path='/:username/bookmarks' element={<BrowserView element={<BookMarksPage />} />} />
		</Routes>
	);
};

export default BrowserMainPage;
