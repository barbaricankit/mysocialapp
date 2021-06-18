import { Text } from "@chakra-ui/layout";

const FeedBody = ({ post }) => {
  return (
    <Text mt={0} fontSize='sm'>
      {post.description}
    </Text>
  );
};
export default FeedBody;
