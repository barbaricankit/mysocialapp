import { Avatar, Box, Flex } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
import { PostFullDate, PostHeader, PostUserDetails, Reply, Comment } from ".";
import { PostDescription, PostFooter } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./postSlice";
import { useEffect } from "react";

moment.locale();

const Post = () => {
  const {
    feed: { feeds },
    profile: { posts },
    auth: { token },
    post: { post },
  } = useSelector((state) => state);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log({ feeds, posts });
  let POST =
    state?.page === "feeds"
      ? feeds.find((feed) => feed._id === id)
      : posts.find((post) => post._id === id);
  if (!POST) {
    POST = post;
  }
  useEffect(() => {
    if (!POST) {
      dispatch(getPost({ token, postId: id }));
    }
    // eslint-disable-next-line
  }, []);
  console.log({ POST, id });
  return (
    <>
      {POST && (
        <>
          <PostHeader />
          <Flex alignItems='center' alignSelf='flex-start' pt={3}>
            <Avatar
              name={POST?.user?.firstname + " " + POST?.user?.lastname}
              m={3}
              mt={0}
            />
            <PostUserDetails post={POST} />
          </Flex>
          <Box p={3} pl={4}>
            <PostDescription post={POST} size='large' />
          </Box>
          <PostFullDate post={POST} />
          <hr />
          <Box p={2}>
            <PostFooter post={POST} />
          </Box>
          <hr />
          <Reply post={POST} />
          <Comment post={POST} />{" "}
        </>
      )}
    </>
  );
};

export default Post;
