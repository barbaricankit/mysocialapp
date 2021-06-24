import { useTheme, Flex, Text, NavLink, FaHashtag } from '.';

const Discover = () => {
	const { mobileView, btnColor, onToggle, browserView } = useTheme();
	return (
		<NavLink to='/discoverpeople' activeStyle={{ fontWeight: 'bold' }}>
			<Flex
				alignItems='center'
				justifyContent='flex-start'
				w='100%'
				pt={4}
				onClick={() => mobileView && onToggle()}>
				<FaHashtag color={btnColor} fontSize='x-large' />
				{(mobileView || browserView) && (
					<Text pl={3} fontSize='larger'>
						Discover
					</Text>
				)}
			</Flex>
		</NavLink>
	);
};

export default Discover;
