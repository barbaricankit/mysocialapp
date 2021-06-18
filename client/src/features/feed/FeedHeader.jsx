import { Flex, Text } from "@chakra-ui/layout";
import { useTheme } from "../../theme-context/theme.context";
import FeedDate from "./FeedDate";

const FeedHeader = ({ post }) => {
  const { btnColor } = useTheme();
  return (
    <Flex alignItems='baseline' alignSelf='flex-start' width='100%'>
      <Text fontWeight='500' isTruncated>
        {post.user.firstname + " " + post.user.lastname}
        <span style={{ color: btnColor }}> @{post.user.username}</span>
      </Text>

      <Text ml={1}>.</Text>
      <FeedDate post={post} />
    </Flex>
  );
};
export default FeedHeader;
