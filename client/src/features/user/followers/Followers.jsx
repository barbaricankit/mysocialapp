import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Avatar, Box, Text } from "@chakra-ui/react";
import {fetchFollowers,FollowerFollowing,Error,Loader} from "."
import { useLocation, useParams } from "react-router";
import FollowButton from "../FollowButton";
import { UserName } from "../../navigation";
import UserAvatar from "../../utils/UserAvatar";

const Followers = () => {
  const { status, followers, error ,user} = useSelector((state) => state.followers);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {username}=useParams();
  

  // const findIsUserFollowing = (followerid) =>
  //   state?.user?.following.find((id) => id === followerid);

    useEffect(() => {
    if (user.username!==username.split("@")[1]) {
      dispatch(fetchFollowers({token,username}));
    }
    // eslint-disable-next-line
  },[]);

  return (
    <>
      <FollowerFollowing user={user}/>

      <Loader status={status} />
      <Error status={status} error={error} />
      <Box p={3}>
        {user.username===username.split("@")[1] && followers?.map((user) => (
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

export default Followers;
