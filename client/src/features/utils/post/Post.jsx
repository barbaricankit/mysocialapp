import { Box, Flex, VStack } from "@chakra-ui/layout";
import { NavLink, useParams } from "react-router-dom";
import { PostUser, PostFooter, PostDescription } from ".";
import UserAvatar from "../UserAvatar";

const Post = ({ post }) => {
  const { username } = useParams();
  return (
    <Box key={post.id}>
      <Flex w='100%' p={3} mb={3}>
        <UserAvatar name={post.user.firstname + " " + post.user.lastname} />
        <VStack w='100%' pl={1.5} pr={2}>
          <PostUser post={post} />

          <NavLink
            style={{ alignSelf: "flex-start" }}
            to={`/${post.user.username}/status/${post._id}`}
            state={{ data: post, path: username }}>
            <PostDescription post={post} />
          </NavLink>

          <PostFooter post={post} />
        </VStack>
      </Flex>
      <hr />
    </Box>
  );
};
export default Post;
