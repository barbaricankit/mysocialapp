import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BookmarkPosts, UserPosts } from ".";

const Headers = () => {
  const [view, setView] = useState("tweets");
  return (
    <>
      <Flex justifyContent='space-evenly'>
        <Text p={2} pb={1} onClick={() => setView("tweets")}>
          Tweets
        </Text>

        <Text p={2} pb={1} onClick={() => setView("bookmarks")}>
          BookMarks
        </Text>
      </Flex>
      <hr />
      {view === "tweets" && <UserPosts />}
      {view === "bookmarks" && <BookmarkPosts />}
    </>
  );
};

export default Headers;
