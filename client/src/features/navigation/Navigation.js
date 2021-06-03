import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Stack } from "@chakra-ui/layout";

import {
  Home,
  BookMarks,
  Explore,
  Messages,
  Notifications,
  Profile,
} from "./buttons/index";
import FollowersAndFollowing from "./Followers";
import UserName from "./UserName";
import NavHeader from "./NavHeader";
const Navigation = ({ windowWidth }) => {
  const bg = useColorModeValue("white", "rgb(21, 32, 43)");
  const color = useColorModeValue("rgb(91, 112, 131)", "rgb(136, 153, 166)");
  return (
    <Flex
      flexDir='column'
      zIndex={3}
      pos='fixed'
      top='0'
      bg={bg}
      w={windowWidth ? "75%" : "4rem"}
      h='100%'
      p={2}>
      {windowWidth && (
        <>
          <NavHeader />
          <hr />

          <UserName color={color} />
        </>
      )}

      <Stack>
        {windowWidth && <FollowersAndFollowing color={color} />}
        <Home windowWidth={windowWidth} color={color} />
        <Explore windowWidth={windowWidth} color={color} />
        <Notifications windowWidth={windowWidth} color={color} />
        <Messages windowWidth={windowWidth} color={color} />
        <BookMarks windowWidth={windowWidth} color={color} />
        <Profile windowWidth={windowWidth} color={color} />
      </Stack>
    </Flex>
  );
};

export default Navigation;
