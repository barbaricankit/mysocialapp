import { Flex, Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { useTheme } from "../../theme-context/theme.context";
import { NavLink } from "react-router-dom";
const FollowersAndFollowing = () => {
  const { btnColor } = useTheme();
  const { user } = useSelector((state) => state.auth);

  return (
    <Flex alignItems='center' w='100%'>
      <Flex alignItems='center'>
        <Text fontWeight='500'>{user.following.length}</Text>

        <NavLink to={`/@${user.username}/following`}>
          <Text fontWeight='400' color={btnColor} fontSize='md' ml={1}>
            Following
          </Text>
        </NavLink>
      </Flex>
      <Flex pl={4} alignItems='center'>
        <Text fontWeight='500'>{user.followers.length}</Text>
        <NavLink to={`/@${user.username}/followers`}>
          <Text fontWeight='400' color={btnColor} fontSize='md' ml={1}>
            Followers
          </Text>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default FollowersAndFollowing;
