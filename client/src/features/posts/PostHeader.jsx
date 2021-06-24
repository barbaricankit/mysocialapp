import { Box, Flex, Heading, BiArrowBack, useLocation, useNavigate } from '.';

const PostHeader = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	return (
		<Box>
			<Flex alignItems='center' p={2} pt={4} w='100%'>
				<BiArrowBack 
        fontSize='x-large' 
        onClick={() => navigate(state?.path ? `/${state.path}` :'/')} 
        />
				<Heading ml={3} size='lg'>
					Tweet
				</Heading>
			</Flex>
			<hr />
		</Box>
	);
};

export default PostHeader;
