import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowing } from "./following/followingSlice";
import { fetchFollowers } from "./followers/followerSlice";
import FollowerFollowingHeader from "./FollowerFollowingHeader";
import { useEffect } from "react";
const FollowerFollowing = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    following: {
      status: { followingStatus },
      followings,
    },
    followers: {
      status: { followerStatus },
      followers,
    },
  } = useSelector((state) => state);

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (followingStatus === "idle" || !followings?.length) {
      dispatch(fetchFollowing(token));
    }
    if (followerStatus === "idle" || !followers?.length) {
      dispatch(fetchFollowers(token));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <FollowerFollowingHeader />
      <Flex justifyContent='space-evenly' width='100%' p={4} pb={2}>
        <NavLink to={`/@${user.username}/followers`}>
          <Text>Followers</Text>
        </NavLink>
        <NavLink to={`/@${user.username}/following`}>
          <Text>Following</Text>
        </NavLink>
      </Flex>
      <hr />
    </>
  );
};

export default FollowerFollowing;
