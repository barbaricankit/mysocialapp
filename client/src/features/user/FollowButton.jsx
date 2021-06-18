import { Box, Button, useToast } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { postFollowedUser } from "./userSlice";

const FollowButton = ({ user }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const followedUser = (followId) => {
    dispatch(postFollowedUser({ followId, token }));
    toast({
      position: "bottom-left",
      render: () => (
        <Box color='white' p={3} bg='blue.500'>
          You followed @{user.username}
        </Box>
      ),
    });
  };
  return (
    <Button m={2} bg='rgb(29, 161, 242)' onClick={() => followedUser(user._id)}>
      Follow
    </Button>
  );
};

export default FollowButton;
