import { Flex } from "@chakra-ui/layout";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import UserName from "../navigation/UserName";
import FollowersAndFollowing from "../navigation/FollowersAndFollowing";
import EditProfileModal from "./EditProfile";
import FollowButton from "../user/FollowButton"
import { UserDetails } from ".";
import { useSelector } from "react-redux";
import UserAvatar from "../utils/UserAvatar";
const ProfileDetails = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {user:loginedUser}=useSelector((state)=>state.auth)
  console.log({profiledetails:user})
  console.log({loginedUser})
  return (
    <>
      <Flex
        alignItems='center'
        p={3}
        pt={4}
        w='100%'
        justifyContent='space-between'>
        <Box>
        <UserAvatar name={user?.fullname} size='lg' />
          {/* <Avatar name={user.firstname + " " + user.lastname} size='lg' /> */}
        </Box>
        {loginedUser?._id===user?._id ?<Button onClick={onOpen}>Edit Profile</Button>:(<FollowButton user={user} />)}
        
      </Flex>
      <Box pl={3}>
      <UserName size={"lg"} user={user} /></Box>
      <UserDetails />
      <Box p={3} pt={2}>
        <FollowersAndFollowing user={user} />
      </Box>
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProfileDetails;
