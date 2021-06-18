import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserToFollow, UsersToFollowDetails, Loader } from ".";

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
    <>
      <Loader status={status} />

      <Box>
        <Heading size='md' m={2}>
          You might follow
        </Heading>

        {usersToFollow?.map((user) => (
          <Box key={user._id}>
            <UsersToFollowDetails user={user} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default UsersToFollow;
