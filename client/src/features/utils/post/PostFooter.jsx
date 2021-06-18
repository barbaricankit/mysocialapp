import { Flex } from "@chakra-ui/layout";
import { Comments, Likes, Retweets, Shares } from ".";

const PostFooter = ({ post }) => {
  return (
    <Flex justifyContent='space-between' w='100%' alignItems='center'>
      <Comments post={post} />
      <Retweets post={post} />
      <Likes post={post} />
      <Shares post={post} />
    </Flex>
  );
};
export default PostFooter;
