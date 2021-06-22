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
import {RiChatSmileFill} from "react-icons/ri"
import FollowersAndFollowing from "./FollowersAndFollowing";
import { useTheme } from "../../theme-context/theme.context";
import { useSelector } from "react-redux";
const NavDetails = () => {
  const { mobileView,tabView } = useTheme();
  const {user}=useSelector(state=>state.auth)
  return (<>
    {tabView && <RiChatSmileFill color="rgb(29, 161, 242)" fontSize="xx-large" style={{alignSelf:"center"}}/>}
    <Stack p={3} pl={0}>
      {mobileView && <FollowersAndFollowing user={user}/>}
      
      <Home />
      <Explore />
      <Notifications />
      <Messages />
      <BookMarks />
      <Profile />
      <Logout />
    </Stack>
    </>
  );
};

export default NavDetails;
