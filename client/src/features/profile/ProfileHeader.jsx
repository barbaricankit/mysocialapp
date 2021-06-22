import { Flex } from "@chakra-ui/layout";
import { Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ProfileHeader = ({ user, posts }) => {
  const navigate = useNavigate();

  return (
    <Flex alignItems='center' p={2} pt={4} w='100%'>
      <BiArrowBack fontSize='x-large' onClick={() => navigate("/")} />
      <Box pl={4}>
        <Text fontWeight='500'>{user?.fullname}</Text>
        <Text fontWeight='300' color=''>
          {posts?.length} Tweets
        </Text>
      </Box>
    </Flex>
  );
};

export default ProfileHeader;
