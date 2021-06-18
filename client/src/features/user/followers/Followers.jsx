import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Avatar, Box, Text } from "@chakra-ui/react";
import Loader from "../../utils/Loader";
import Error from "../../utils/Error";
import FollowerFollowing from "../FollowerFollowing";
const Followers = () => {
  const { status, followers, error } = useSelector((state) => state.followers);
  const { user } = useSelector((state) => state.auth);

  const findIsUserFollowing = (followerid) =>
    user?.following.find((id) => id === followerid);
  console.log({ followers });
  return (
    <>
      <FollowerFollowing />

      <Loader status={status} />
      <Error status={status} error={error} />
      <Box p={3}>
        {followers?.map((user) => (
          <Flex width='100%' key={user._id}>
            <Avatar name={user.firstname + " " + user.lastname} />
            <Box>
              <Flex justifyContent='space-between' width='100%'>
                <Box>
                  <Text>{user.firstname + " " + user.lastname}</Text>
                  <Text>@{user.username}</Text>
                </Box>
                <Button>
                  {findIsUserFollowing(user._id) ? "Following" : "Follow"}
                </Button>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default Followers;
