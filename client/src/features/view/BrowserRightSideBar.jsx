import { Box } from "@chakra-ui/react";
import { useTheme } from "../../theme-context/theme.context";
import Search from "../user/Search";
import UsersToFollow from "../user/UsersToFollow";
import SearchedUserList from "../user/SearchedUserList";
import {  useSelector } from "react-redux";

const BrowserRightSideBar = () => {
  const { secondaryColor, borderColor } = useTheme();
  const {
    user: { searchedUserResult },
    
  } = useSelector((state) => state);
  return (
    <Box>
      <Search />
      <Box
        className='right_side_bar'
        bg={secondaryColor}
        borderBottomColor={borderColor}
        borderTopColor={borderColor}>
        {searchedUserResult.length ? <SearchedUserList /> : <UsersToFollow />}
      </Box>
    </Box>
  );
};

export default BrowserRightSideBar;
