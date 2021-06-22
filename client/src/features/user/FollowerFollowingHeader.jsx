import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import { Text, Box } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
const FollowerFollowingHeader = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  return (
    <Flex alignItems='center' p={2} pt={4} w='100%'>
      <BiArrowBack fontSize='x-large' onClick={() => navigate("/")} />
      <Box pl={4}>
        <Text fontWeight='500'>{user.firstname + " " + user.lastname}</Text>
        <Text fontWeight='300' color=''>
          @{user.username}
        </Text>
      </Box>
    </Flex>
  );
};

export default FollowerFollowingHeader;
