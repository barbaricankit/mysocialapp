import { Stack } from "@chakra-ui/layout";
import {
  Home,
  BookMarks,
  Explore,
  Messages,
  Notifications,
  Profile,
  Logout,
} from "./buttons/index";
import FollowersAndFollowing from "./Followers";
import { useTheme } from "../../theme-context/theme.context";
const NavDetails = () => {
  const { mobileView } = useTheme();

  return (
    <Stack p={3} pl={0}>
      {mobileView && <FollowersAndFollowing />}
      <Home />
      <Explore />
      <Notifications />
      <Messages />
      <BookMarks />
      <Profile />
      <Logout />
    </Stack>
  );
};

export default NavDetails;
