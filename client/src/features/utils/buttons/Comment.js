import { Box, Flex, Text } from "@chakra-ui/layout";
import { FaRegComment } from "react-icons/fa";
import { useTheme } from "../../../theme-context/theme.context";
import { NavLink, useParams } from "react-router-dom";

const Comments = ({ post, page }) => {
  const { btnColor } = useTheme();
  const { username } = useParams();
  return (
    <Box w='100%'>
      <NavLink
        to={`/${post.user?.username}/status/${post._id}`}
        state={{ path: username, page }}>
        <Flex alignItems='center'>
          <FaRegComment color={btnColor} />
          <Text ml={2} color={btnColor}>
            {post?.comments}
          </Text>
        </Flex>
      </NavLink>
    </Box>
  );
};

export default Comments;
