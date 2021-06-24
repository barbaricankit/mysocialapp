import { Flex, Text, FaRegUser, NavLink, useSelector, useTheme } from '.';

const Profile = () => {
	const { mobileView, btnColor, onToggle, browserView } = useTheme();
	const { user } = useSelector((state) => state.auth);
	return (
		<NavLink to={`/${user.username}`} end activeStyle={{ fontWeight: 'bold' }} state={user}>
			<Flex
				alignItems='center'
				justifyContent='flex-start'
				w='100%'
				pt={4}
				onClick={() => mobileView && onToggle()}>
				<FaRegUser color={btnColor} fontSize='x-large' />
				{(mobileView || browserView) && (
					<Text pl={3} fontSize='larger'>
						Profile
					</Text>
				)}
			</Flex>
		</NavLink>
	);
};

export default Profile;
