import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const UserDetails = ({ bg }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Box>
      <Text>{user.bio}</Text>
    </Box>
  );
};

export default UserDetails;
