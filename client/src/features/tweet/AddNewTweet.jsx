import { Box } from "@chakra-ui/react";
import { useTheme } from "../../theme-context/theme.context";
import Compose from "./Compose";
import TweetHeader from "./TweetHeader";

const AddNewTweet = () => {
  const { mobileView, secondaryColor, borderColor } = useTheme();

  return (
    <>
      {mobileView && <TweetHeader />}
      <Compose />
      {!mobileView && (
        <Box
          className='horizontal_line'
          mt={2}
          bg={secondaryColor}
          borderBottomColor={borderColor}
          borderTopColor={borderColor}></Box>
      )}
    </>
  );
};

export default AddNewTweet;
