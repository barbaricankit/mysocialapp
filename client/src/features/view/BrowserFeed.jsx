import { Flex } from "@chakra-ui/react";
import { useTheme } from "../../theme-context/theme.context";
import Feeds from "../feed/Feeds";
import Header from "../header/Header";
import AddNewTweet from "../tweet/AddNewTweet";

const BrowserFeed = () => {
  const { bodyBg } = useTheme();
  return (
    <Flex flexDir='column'>
      <Header bg={bodyBg} />
      <AddNewTweet />
      <Feeds />
    </Flex>
  );
};

export default BrowserFeed;
