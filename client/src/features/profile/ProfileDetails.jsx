import { Flex } from "@chakra-ui/layout";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/avatar";
import UserName from "../navigation/UserName";
import FollowersAndFollowing from "../navigation/Followers";
import EditProfileModal from "./EditProfile";
import { UserDetails } from ".";
const ProfileDetails = ({ btnColor }) => {
  const {
    auth: { user },
  } = useSelector((state) => state);
  const { isOpen, onClose, onOpen } = useDisclosure();
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
        <Button onClick={onOpen}>Edit Profile</Button>
      </Flex>
      <UserName size={"lg"} user={user} />
      <UserDetails />
      <Box p={3} pt={2}>
        <FollowersAndFollowing />
      </Box>
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProfileDetails;
