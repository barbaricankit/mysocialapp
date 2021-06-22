import { Avatar, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../theme-context/theme.context";
import { postComment } from "./postSlice";
import { Loader } from "../utils/index";
import { updateCommentCountInProfilePosts } from "../profile/profileSlice";
import { updateCommentCountInFeeds } from "../feed/feedSlice";
const Reply = ({ post }) => {
  const {
    auth: { user, token },
  } = useSelector((state) => state);
  const { secondaryColor, borderColor } = useTheme();
  const [reply, setReply] = useState("");
  const dispatch = useDispatch();
  const replyClick = () => {
    const postId = post._id;
    dispatch(postComment({ token, postId, description: reply }));
    dispatch(updateCommentCountInProfilePosts({ postId }));
    dispatch(updateCommentCountInFeeds({ postId }));

    setReply("");
  };
  return (
    <>
      <Loader />
      <Flex p={3} justifyContent='space-between'>
        <Avatar name={user.fullname} />
        <Textarea
          value={reply}
          placeholder='Tweet your reply'
          outline='none'
          border='none'
          _focus='none'
          onChange={(e) => setReply(e.target.value)}
        />
        <Button onClick={() => replyClick()}>Reply</Button>
      </Flex>
      <Box
        className='horizontal_line'
        bg={secondaryColor}
        borderBottomColor={borderColor}
        borderTopColor={borderColor}></Box>
    </>
  );
};

export default Reply;
