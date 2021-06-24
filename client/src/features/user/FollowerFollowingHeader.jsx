import { useSelector, useNavigate, BiArrowBack, Flex, Text, Box } from '.';

const FollowerFollowingHeader = () => {
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);
	return (
		<Flex alignItems='center' p={2} pt={4} w='100%'>
			<BiArrowBack fontSize='x-large' onClick={() => navigate('/')} />
			<Box pl={4}>
				<Text fontWeight='500'>{user.firstname + ' ' + user.lastname}</Text>
				<Text fontWeight='300' color=''>
					@{user.username}
				</Text>
			</Box>
		</Flex>
	);
};

export default FollowerFollowingHeader;
