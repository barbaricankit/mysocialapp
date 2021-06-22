import { Box, Button, useToast } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { updateUserFollowing } from "../auth/authSlice";
import { postFollowedUser } from "./userSlice";

const FollowButton = ({ user: followUser }) => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const isFollowing = () => user.following.find((id) => id === followUser?._id);
  const followedUser = (followId) => {
    dispatch(postFollowedUser({ followId, token }));
    dispatch(updateUserFollowing({ followId }));
    toast({
      position: "bottom-left",
      render: () => (
        <Box color='white' p={3} bg='blue.500'>
          You {isFollowing() ? "unfollowed" : "followed"} @{followUser.username}
        </Box>
      ),
    });
  };
  return (
    <Button
      m={2}
      bg='rgb(29, 161, 242)'
      onClick={() => followedUser(followUser._id)}>
      {isFollowing() ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
