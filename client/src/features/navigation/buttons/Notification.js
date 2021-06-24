import { useTheme, Flex, Text, FaRegBell, NavLink, useSelector } from '.';

const Notifications = () => {
	const { mobileView, btnColor, onToggle, browserView } = useTheme();
	const { user } = useSelector((state) => state.auth);
	return (
		<NavLink to={`/${user._id}/notifications`} end activeStyle={{ fontWeight: 'bold' }}>
			<Flex
				alignItems='center'
				justifyContent='flex-start'
				w='100%'
				pt={4}
				onClick={() => mobileView && onToggle()}>
				<FaRegBell color={btnColor} fontSize='x-large' />
				{(mobileView || browserView) && (
					<Text pl={3} fontSize='larger'>
						Notifications
					</Text>
				)}
			</Flex>{' '}
		</NavLink>
	);
};

export default Notifications;
