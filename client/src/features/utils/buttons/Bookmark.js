import { Flex } from "@chakra-ui/layout";
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkPost,
  useTheme,
  userBookmarkedPost,
  updateBookmarkStatus,
} from ".";

const Bookmark = ({ post }) => {
  const { btnColor } = useTheme();
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const postBookmark = async () => {
    const data = await bookmarkPost({ token, postId: post._id });
    dispatch(userBookmarkedPost(data));
    dispatch(updateBookmarkStatus());
  };
  const hasUserBookmarkedPost = user?.bookmarks?.find((id) => id === post._id);
  return (
    <Flex alignItems='center' w='100%' onClick={() => postBookmark()}>
      <FaRegBookmark
        color={hasUserBookmarkedPost ? "rgb(29, 161, 242)" : btnColor}
      />
    </Flex>
  );
};

export default Bookmark;
