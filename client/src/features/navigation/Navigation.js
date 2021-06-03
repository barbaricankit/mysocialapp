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
import { useTheme } from "../../localisation-context/localisation.context";
const Navigation = () => {
  const { windowWidth, bodyBg } = useTheme();
  return (
    <Flex
      flexDir='column'
      zIndex={3}
      pos='fixed'
      top='0'
      bg={bodyBg}
      w={windowWidth ? "75%" : "4rem"}
      h='100%'
      p={2}>
      {windowWidth && (
        <>
          <NavHeader />
          <hr />

          <UserName />
        </>
      )}

      <Stack>
        {windowWidth && <FollowersAndFollowing />}
        <Home />
        <Explore />
        <Notifications />
        <Messages />
        <BookMarks />
        <Profile />
      </Stack>
    </Flex>
  );
};

export default Navigation;
