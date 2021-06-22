import { NavLink} from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

import FollowerFollowingHeader from "./FollowerFollowingHeader";
const FollowerFollowing = ({user}) => {
 
  return (
    <>
      <FollowerFollowingHeader />
      <Flex justifyContent='space-evenly' width='100%' p={4} pb={2}>
        <NavLink to={`/@${user?.username}/followers`} >
          <Text>Followers</Text>
        </NavLink>
        <NavLink to={`/@${user?.username}/following`} >
          <Text>Following</Text>
        </NavLink>
      </Flex>
      <hr />
    </>
  );
};

export default FollowerFollowing;
