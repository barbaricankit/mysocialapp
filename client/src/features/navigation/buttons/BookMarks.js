import { useTheme, Flex, Text, useSelector, NavLink, FaRegBookmark } from '.';

const BookMarks = () => {
	const { mobileView, btnColor, onToggle, browserView } = useTheme();
	const { user } = useSelector((state) => state.auth);
	return (
		<NavLink to={`/${user.username}/bookmarks`} end activeStyle={{ fontWeight: 'bold' }}>
			<Flex
				alignItems='center'
				justifyContent='flex-start'
				w='100%'
				pt={4}
				onClick={() => mobileView && onToggle()}>
				<FaRegBookmark color={btnColor} fontSize='x-large' />
				{(mobileView || browserView) && (
					<Text pl={3} fontSize='larger'>
						BookMarks
					</Text>
				)}
			</Flex>
		</NavLink>
	);
};

export default BookMarks;
