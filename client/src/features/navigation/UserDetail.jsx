import { UserName, useSelector, Flex, Avatar, Box, useTheme } from '.';

const UserDetail = ({ size }) => {
	const { user } = useSelector((state) => state.auth);
	const { browserView, tabView, mobileView, lgTabView } = useTheme();
	return (
		<Box>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				p={tabView ? 0 : 3}
				pb={0}
				mt={(tabView || lgTabView) && 3}>
				<Avatar name={user.fullname} size={size} />
			</Flex>
			{(browserView || mobileView) && <UserName user={user} size={size} />}
		</Box>
	);
};

export default UserDetail;
