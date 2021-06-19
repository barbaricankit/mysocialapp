import { Flex } from "@chakra-ui/layout";
import { Comments, Likes, Retweets, Shares } from ".";

const PostFooter = ({ post, isComment, page }) => {
  return (
    <Flex justifyContent='space-evenly' w='100%' alignItems='center' ml={4}>
      <Comments post={post} page={page} />
      <Retweets post={post} />
      <Likes post={post} isComment={isComment} page={page} />
      <Shares post={post} />
    </Flex>
  );
};
export default PostFooter;
