import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Textarea } from "@chakra-ui/react";
import { ShowImage, newPost } from ".";

const MIN_TEXT_AREA_HEIGHT = 35;
const PostInput = () => {
  const { postText } = useSelector((state) => state.tweet);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.style.height = "inherit";
    inputRef.current.style.height = `${Math.max(
      inputRef.current.scrollHeight,
      MIN_TEXT_AREA_HEIGHT
    )}px`;
  }, [postText]);

  return (
    <>
      <Textarea
        w='100%'
        ref={inputRef}
        type='textarea'
        placeholder="What's happening?"
        outline='none'
        border='none'
        _focus='none'
        minH={MIN_TEXT_AREA_HEIGHT}
        value={postText}
        onChange={(e) => dispatch(newPost({ tweet: e.target.value }))}
      />
      <ShowImage />
    </>
  );
};

export default PostInput;
