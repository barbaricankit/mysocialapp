import { useSelector, SearchedUserList, SearchBox, useTheme, Box, UsersToFollow } from '.';

const BrowserRightSideBar = () => {
	const { secondaryColor, borderColor } = useTheme();
	const { user: { searchedUserResult } } = useSelector((state) => state);
	return (
		<Box>
			<SearchBox />
			<Box
				className='right_side_bar'
				bg={secondaryColor}
				borderBottomColor={borderColor}
				borderTopColor={borderColor}>
				{searchedUserResult.length ? <SearchedUserList /> : <UsersToFollow />}
			</Box>
		</Box>
	);
};

export default BrowserRightSideBar;
