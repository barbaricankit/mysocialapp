import { BookmarkPosts, useNavigate, BiArrowBack, Box, Flex, Text } from '.';

const BookMarksPage = () => {
	const navigate = useNavigate();

	return (
		<Box>
			<Flex alignItems='center' p={2} pt={4} w='100%'>
				<BiArrowBack fontSize='x-large' onClick={() => navigate('/')} />
				<Box pl={4}>
					<Text fontWeight='500'>BookMarks</Text>
				</Box>
			</Flex>
			<hr />
			<BookmarkPosts />
		</Box>
	);
};

export default BookMarksPage;
