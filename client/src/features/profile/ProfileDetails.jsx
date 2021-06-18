import { Flex } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/avatar";
import UserName from "../navigation/UserName";
import FollowersAndFollowing from "../navigation/Followers";
const ProfileDetails = ({ btnColor }) => {
  const {
    auth: { user },
  } = useSelector((state) => state);
  return (
    <>
      <Flex
        alignItems='center'
        p={3}
        pt={4}
        w='100%'
        justifyContent='space-between'>
        <Box>
          <Avatar name={user.firstname + " " + user.lastname} size='lg' />
        </Box>
        <Button>Edit Profile</Button>
      </Flex>
      <UserName size={"lg"} user={user} />
      <Box p={3} pt={2}>
        <FollowersAndFollowing />
      </Box>
    </>
  );
};

export default ProfileDetails;
