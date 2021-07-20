import { Text, Box } from '.'

const UserDetails = ({ user }) => {
  return (
    <Box>
      <Text ml={4}>{user.bio}</Text>
    </Box>
  )
}

export default UserDetails
