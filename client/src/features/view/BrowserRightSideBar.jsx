import { Box } from "@chakra-ui/react";
import { useTheme } from "../../theme-context/theme.context";
import UsersToFollow from "../user/UsersToFollow";

const BrowserRightSideBar = () => {
  const { secondaryColor, borderColor } = useTheme();
  return (
    <Box>
      <Box
        className='right_side_bar'
        bg={secondaryColor}
        borderBottomColor={borderColor}
        borderTopColor={borderColor}>
        <UsersToFollow />
      </Box>
    </Box>
  );
};

export default BrowserRightSideBar;
