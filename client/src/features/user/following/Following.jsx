import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Avatar, Box, Text } from "@chakra-ui/react";
import Loader from "../../utils/Loader";
import Error from "../../utils/Error";
import FollowerFollowing from "../FollowerFollowing";
import { useEffect } from "react";
import { fetchFollowing } from "./followingSlice";
import { useLocation, useParams } from "react-router";
import FollowButton from "../FollowButton";
import UserAvatar from "../../utils/UserAvatar";
import { UserName } from "../../navigation";
const Following = () => {
  const { status, followings, error,user } = useSelector((state) => state.following);
  const { token } = useSelector((state) => state.auth);
  const {username}=useParams();

  const dispatch = useDispatch();
  console.log({user})
  useEffect(() => {
    console.log({user})
    if (user.username!==username.split("@")[1]) {
      dispatch(fetchFollowing({token,username}));
    }
     // eslint-disable-next-line
  }, [username]);
  return (
    <>
      <FollowerFollowing user={user} />

      <Loader status={status} />
      <Error status={status} error={error} />
      <Box p={3}>
        {user.username===username.split("@")[1] && followings?.map((user) => (
          <Flex width='100%' key={user._id} justifyContent='space-between' alignItems='center'>
          <Flex m={2} alignItems='center'>
          <UserAvatar name={user.fullname} />
         

          <UserName user={user} />
              </Flex>
              <FollowButton user={user} />
            
        
        </Flex>
        ))}
      </Box>
    </>
  );
};

export default Following;
