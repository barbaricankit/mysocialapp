import { Flex, Text } from "@chakra-ui/layout";
import { useTheme } from "../../theme-context/theme.context";

const PostUserDetails = ({ post }) => {
  const { btnColor } = useTheme();
  return (
    <Flex flexDir='column'>
      <Text fontWeight='500'>
        {post?.user?.firstname + " " + post?.user?.lastname}
      </Text>
      <Text fontWeight='300' color={btnColor}>
        @{post?.user?.username}
      </Text>
    </Flex>
  );
};
export default PostUserDetails;
