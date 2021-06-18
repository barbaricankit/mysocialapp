import { Flex } from "@chakra-ui/layout";
import { Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
const ProfileHeader = () => {
  const navigate = useNavigate();
  const {
    auth: { user },
    profile: { posts },
  } = useSelector((state) => state);
  return (
    <Flex alignItems='center' p={2} pt={4} w='100%'>
      <BiArrowBack fontSize='x-large' onClick={() => navigate("/feed")} />
      <Box pl={4}>
        <Text fontWeight='500'>{user.firstname + " " + user.lastname}</Text>
        <Text fontWeight='300' color=''>
          {posts?.length} Tweets
        </Text>
      </Box>
    </Flex>
  );
};

export default ProfileHeader;
