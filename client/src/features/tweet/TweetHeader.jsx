import { TweetButton, Error, Loader, useNavigate, useSelector, BiArrowBack, Flex } from '.';

const TweetHeader = ({ tweet }) => {
	const navigate = useNavigate();
	const { status } = useSelector((state) => state.tweet);

	return (
		<>
			<Loader status={status} />
			<Error status={status} />
			<Flex justifyContent='space-between' alignItems='center' p={2} pt={4} w='100%'>
				<BiArrowBack fontSize='x-large' onClick={() => navigate('/')} />

				<TweetButton />
			</Flex>
			<hr />
		</>
	);
};

export default TweetHeader;
