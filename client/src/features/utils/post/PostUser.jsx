import { Flex, Text } from "@chakra-ui/layout";
import { useTheme } from "../../../theme-context/theme.context";
import { PostDate } from ".";

const PostUser = ({ post }) => {
  const { btnColor } = useTheme();
  return (
    <Flex alignItems='baseline' alignSelf='flex-start' width='100%'>
      <Text fontWeight='500' isTruncated>
        {post.user.firstname + " " + post.user.lastname}
        <span style={{ color: btnColor }}> @{post.user.username}</span>
      </Text>
      <Text ml={1}>.</Text>
      <PostDate post={post} />
    </Flex>
  );
};
export default PostUser;
