import { Flex, Text } from "@chakra-ui/layout";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../theme-context/theme.context";
import { postLikePost } from "../../feed/feedSlice";

const Likes = ({ post }) => {
  const { btnColor } = useTheme();
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const postLike = () => {
    dispatch(postLikePost({ token, postId: post._id }));
  };
  const hasUserLikedPost = post.likes.find((id) => id === user._id);

  return (
    <Flex alignItems='center' w='100%' onClick={() => postLike()}>
      <FaRegHeart color={hasUserLikedPost ? "rgb(29, 161, 242)" : btnColor} />
      <Text ml={2} color={btnColor}>
        {post.likes.length}
      </Text>
    </Flex>
  );
};

export default Likes;
