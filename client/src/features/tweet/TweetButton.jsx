import { Button } from "@chakra-ui/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewFeed } from "../feed/feedSlice";
import { newPost, postNewTweet } from "./tweetSlice";
const TweetButton = ({ tweet }) => {
  const navigate = useNavigate();
  const { status, post, postText, postImage } = useSelector(
    (state) => state.tweet
  );
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const addNewPost = () => {
    if (postText) {
      dispatch(
        postNewTweet({ token, description: postText, attachment: postImage })
      );
    }
  };
  useEffect(() => {
    if (status === "success") {
      dispatch(addNewFeed({ feed: post }));
      dispatch(newPost({ tweet: "" }));
      navigate("/");
    }
  }, [status, dispatch, tweet, post, navigate]);
  return (
    <Button
      borderRadius='9999px'
      bg='rgb(29, 161, 242)'
      // _active='none'
      // _hover='none'
      onClick={() => addNewPost()}>
      Tweet
    </Button>
  );
};

export default TweetButton;
