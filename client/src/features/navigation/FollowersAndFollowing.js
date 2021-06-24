import { NavLink ,useTheme,Flex, Text} from ".";

const FollowersAndFollowing = ({user}) => {
  const { btnColor } = useTheme();
  
  return (
    <Flex alignItems='center' w='100%'>
      <Flex alignItems='center'>
        <Text fontWeight='500'>{user?.following?.length}</Text>
        <NavLink to={`/@${user?.username}/following`} state={{user}}>
          <Text fontWeight='400' color={btnColor} fontSize='md' ml={1}>
            Following
          </Text>
        </NavLink>
      </Flex>
      
      <Flex pl={4} alignItems='center'>
        <Text fontWeight='500'>{user?.followers?.length}</Text>
        <NavLink to={`/@${user?.username}/followers`} state={{user}} >
          <Text fontWeight='400' color={btnColor} fontSize='md' ml={1}>
            Followers
          </Text>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default FollowersAndFollowing;
