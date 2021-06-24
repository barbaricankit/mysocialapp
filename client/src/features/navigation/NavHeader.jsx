import { Box, Flex, Heading, FaTimes, UserDetail, useTheme } from '.';

const NavHeader = () => {
	const { onToggle } = useTheme();

	return (
		<Box>
			<Flex justifyContent='space-between' alignItems='center' h='3rem' p={2}>
				<Heading p={3} size='lg'>
					Account Info
				</Heading>
				<FaTimes onClick={onToggle} />
			</Flex>
			<hr />
			<UserDetail size={'md'} />
		</Box>
	);
};

export default NavHeader;
