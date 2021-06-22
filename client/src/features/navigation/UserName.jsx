import { Box, Text } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../theme-context/theme.context";

const UserName = ({ size, user }) => {
  const { btnColor } = useTheme();

  return (
    <>
      <NavLink
        to={`/${user?.username}`}
        activeStyle={{ fontWeight: "bold" }}
        state={user} >
        <Box  pb={0}>
          <Text fontWeight='600' fontSize={size} isTruncated>
            {user?.fullname}
          </Text>
          <Text fontWeight='300' fontSize={size} color={btnColor}>
            @{user?.username}
          </Text>
        </Box>
      </NavLink>
    </>
  );
};

export default UserName;
