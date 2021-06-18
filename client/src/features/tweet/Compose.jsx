import { Avatar } from "@chakra-ui/avatar";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import { FaGlobeAmericas } from "react-icons/fa";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ImageUpload, ShowEmoji, PostInput, TweetButton } from ".";
import { FaSmile } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useTheme } from "../../theme-context/theme.context";

const Compose = () => {
  const [showEmojis, setShowEmojis] = useState();
  const { user } = useSelector((state) => state.auth);
  const { tabView } = useTheme();
  return (
    <>
      <Flex justifyContent='space-between' w='100%'>
        <Box p={2}>
          <Avatar name={user.firstname + " " + user.lastname} />
        </Box>
        <Stack w='100%' pl={4}>
          <Flex flexDir='column' w='100%'>
            <PostInput />
            <Flex
              alignItems='center'
              pb={2}
              pt={8}
              pr={4}
              color='rgba(29,161,242,1.00)'>
              <FaGlobeAmericas />
              <Text pl={2}>Everyone can reply</Text>{" "}
            </Flex>
            <hr />
            <Box position='relative' w='100%'>
              <Flex justifyContent='space-between' m={2}>
                <Flex pt={3} color='rgba(29,161,242,1.00)' alignItems='center'>
                  <ImageUpload />
                  <FaSmile
                    className='emoji_icon'
                    onClick={() => setShowEmojis((showEmoji) => !showEmoji)}
                  />
                </Flex>
                {tabView && <TweetButton />}
              </Flex>
              {showEmojis && <ShowEmoji />}
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Compose;
