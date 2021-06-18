import { Flex } from "@chakra-ui/layout";
import { Comments, Likes, Retweets, Shares } from ".";

const PostFooter = ({ post }) => {
  return (
    <Flex justifyContent='space-evenly' w='100%' alignItems='center' ml={4}>
      <Comments post={post} />
      <Retweets post={post} />
      <Likes post={post} />
      <Shares post={post} />
    </Flex>
  );
};
export default PostFooter;
