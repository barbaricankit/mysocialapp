import { useTheme, Box, Text, NavLink } from '.'

const UserName = ({ size, user }) => {
  const { btnColor } = useTheme()

  return (
    <NavLink
      to={`/${user?.username}`}
      activeStyle={{ fontWeight: 'bold' }}
      state={{ user, path: window.location.pathname }}
    >
      <Box pl={4} pb={0}>
        <Text fontWeight="600" fontSize={size} isTruncated>
          {user?.fullname}
        </Text>
        <Text fontWeight="300" fontSize={size} color={btnColor}>
          @{user?.username}
        </Text>
      </Box>
    </NavLink>
  )
}

export default UserName
