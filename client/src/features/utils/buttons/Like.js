import { Flex, Text } from "@chakra-ui/layout";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../theme-context/theme.context";
import { userLikedFeedPost } from "../../feed/feedSlice";
import { userLikedComment } from "../../posts/postSlice";
import { userLikedProfilePost } from "../../profile/profileSlice";
import { likeComment, likePost } from ".";

const Likes = ({ post, isComment, page }) => {
  const { btnColor } = useTheme();
  const { token, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const postLike = async () => {
    let data;
    if (isComment) {
      data = await likeComment({ token, commentId: post._id });
      if (data?.success) {
        dispatch(userLikedComment(data));
      }
    } else {
      data = await likePost({ token, postId: post._id });
      if (data?.success) {
        dispatch(userLikedFeedPost(data));
        dispatch(userLikedProfilePost(data));
      }
    }
  };
  const hasUserLikedPost = post?.likes?.find((id) => id === user._id);

  return (
    <Flex alignItems='center' w='100%' onClick={() => postLike()}>
      <FaRegHeart color={hasUserLikedPost ? "rgb(29, 161, 242)" : btnColor} />
      <Text ml={2} color={btnColor}>
        {post?.likes?.length ? post?.likes?.length : null}
      </Text>
    </Flex>
  );
};

export default Likes;
