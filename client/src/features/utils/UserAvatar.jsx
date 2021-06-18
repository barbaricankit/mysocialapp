import { Avatar } from "@chakra-ui/avatar";

const UserAvatar = ({ name, size }) => {
  return <Avatar name={name} m={2} mt={0} ml={0} size={size} />;
};
export default UserAvatar;
