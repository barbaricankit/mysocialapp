import {
	Box,
	Home,
	BookMarks,
	Explore,
	Notifications,
	Profile,
	Logout,
	useSelector,
	useTheme,
	FollowersAndFollowing,
	RiChatSmileFill,
	SearchFloatingButton,
	Stack
} from '.';

const NavDetails = () => {
	const { mobileView, browserView, tabView, lgTabView } = useTheme();
	const { user } = useSelector((state) => state.auth);
	return (
		<Box pl={mobileView && 4}>
			{(browserView || tabView) && (
				<RiChatSmileFill color='rgb(29, 161, 242)' fontSize='xx-large' style={{ alignSelf: 'center' }} />
			)}
			<Stack p={2} pl={0}>
				{mobileView && <FollowersAndFollowing user={user} />}

				<Home />
				<Explore />
				<Notifications />
				<BookMarks />
				<Profile />
				<Logout />
			</Stack>
			{(tabView || lgTabView) && <SearchFloatingButton className='search_btn_tab_view' />}
		</Box>
	);
};

export default NavDetails;
