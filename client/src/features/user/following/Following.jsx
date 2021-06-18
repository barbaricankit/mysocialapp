import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Avatar, Box, Text } from "@chakra-ui/react";
import Loader from "../../utils/Loader";
import Error from "../../utils/Error";
import FollowerFollowing from "../FollowerFollowing";
const Following = () => {
  const { status, followings, error } = useSelector((state) => state.following);

  return (
    <>
      <FollowerFollowing />

      <Loader status={status} />
      <Error status={status} error={error} />
      <Box p={3}>
        {followings?.map((user) => (
          <Flex key={user._id}>
            <Avatar name={user.firstname + " " + user.lastname} />
            <Box>
              <Flex>
                <Box>
                  <Text>{user.firstname + " " + user.lastname}</Text>
                  <Text>@{user.username}</Text>
                </Box>
                <Button>Following</Button>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default Following;
