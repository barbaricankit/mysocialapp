import { useTheme, Flex, Text, NavLink, FaHome } from '.';

const Home = () => {
	const { mobileView, onToggle, btnColor, browserView } = useTheme();
	return (
		<NavLink to='/' end activeStyle={{ fontWeight: 'bold' }}>
			<Flex
				alignItems='center'
				justifyContent='flex-start'
				w='100%'
				pt={4}
				onClick={() => mobileView && onToggle()}>
				<FaHome color={btnColor} fontSize='x-large' />
				{(mobileView || browserView) && (
					<Text pl={3} fontSize='larger'>
						Home
					</Text>
				)}
			</Flex>
		</NavLink>
	);
};

export default Home;
