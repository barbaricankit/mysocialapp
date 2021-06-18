import { Avatar, Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { PostFullDate, PostHeader, PostUserDetails, Reply } from ".";
import { PostDescription, PostFooter } from "../utils";

moment.locale();

const Post = ({ btnColor, post }) => {
  const { state } = useLocation();

  const POST = state.data;
  console.log({ state });
  return (
    <>
      <PostHeader />
      <Flex alignItems='center' alignSelf='flex-start' pt={3}>
        <Avatar
          name={POST.user.firstname + " " + POST.user.lastname}
          m={3}
          mt={0}
        />
        <PostUserDetails post={POST} />
      </Flex>
      <Box p={3} pl={6}>
        <PostDescription post={POST} />
      </Box>
      <PostFullDate />
      <hr />
      <Box p={2}>
        <PostFooter post={POST} />
      </Box>
      <hr />
      <Reply post={POST} />
    </>
  );
};

export default Post;
