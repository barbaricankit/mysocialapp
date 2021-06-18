import { Box, Text } from "@chakra-ui/layout";
import { useTheme } from "../../theme-context/theme.context";

const UserName = ({ size, user }) => {
  const { btnColor } = useTheme();

  return (
    <>
      <Box p={3} pb={0}>
        <Text fontWeight='600' fontSize={size}>
          {user?.firstname} {user?.lastname}
        </Text>
        <Text fontWeight='300' fontSize={size} color={btnColor}>
          @{user?.username}
        </Text>
      </Box>
    </>
  );
};

export default UserName;
