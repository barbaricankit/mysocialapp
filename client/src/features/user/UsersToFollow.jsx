import { Box, Button, Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import UserAvatar from "../utils/UserAvatar";
import { UserName } from "../navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserToFollow } from "./userSlice";

const UsersToFollow = () => {
  const {
    user: { status, usersToFollow },
    auth: { token },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserToFollow(token));
    }
  });
  return (
    <Box>
      <Heading size='md'>You might follow</Heading>
      {usersToFollow?.map((user) => (
        <Box key={user._id}>
          <Flex>
            <UserAvatar name={user.firstname + " " + user.lastname} />
            <UserName user={user} />
            <Button>Follow</Button>
          </Flex>
          <hr />
        </Box>
      ))}
    </Box>
  );
};

export default UsersToFollow;
