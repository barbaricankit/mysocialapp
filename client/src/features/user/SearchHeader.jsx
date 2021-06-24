import { BiArrowBack, Text, Box, Flex, useNavigate } from '.';

const SearchHeader = () => {
	const navigate = useNavigate();

	return (
		<Flex alignItems='center' p={2} pt={4} w='100%'>
			<BiArrowBack fontSize='x-large' onClick={() => navigate('/')} />
			<Box pl={4}>
				<Text fontWeight='500'>Discover People</Text>
			</Box>
		</Flex>
	);
};

export default SearchHeader;
