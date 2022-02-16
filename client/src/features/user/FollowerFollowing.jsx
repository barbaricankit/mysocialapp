import { Text, NavLink, Flex, FollowerFollowingHeader } from '.'

const FollowerFollowing = ({ user }) => {
  return (
    <>
      <FollowerFollowingHeader user={user} />
      <Flex justifyContent="space-evenly" width="100%" p={4} pb={2}>
        <NavLink to={`/@${user?.username}/followers`}>
          <Text>Followers</Text>
        </NavLink>
        <NavLink to={`/@${user?.username}/following`}>
          <Text>Following</Text>
        </NavLink>
      </Flex>
      <hr />
    </>
  )
}

export default FollowerFollowing
