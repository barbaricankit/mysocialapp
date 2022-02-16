import { Avatar } from "@chakra-ui/avatar";

const UserAvatar = ({ name, size }) => {
  return <Avatar name={name} mr={2} size={size} />;
};
export default UserAvatar;
