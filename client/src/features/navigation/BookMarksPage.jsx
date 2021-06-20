import { Box, Flex, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import BookmarkPosts from "../profile/BookmarkPosts";

const BookMarksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems='center' p={2} pt={4} w='100%'>
        <BiArrowBack fontSize='x-large' onClick={() => navigate("/feed")} />
        <Box pl={4}>
          <Text fontWeight='500'>BookMarks</Text>
        </Box>
      </Flex>
      <hr />
      <BookmarkPosts />
    </>
  );
};

export default BookMarksPage;
