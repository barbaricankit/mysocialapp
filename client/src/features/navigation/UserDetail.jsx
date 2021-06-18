import { Avatar } from "@chakra-ui/avatar";
import { Flex } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import UserName from "./UserName";
const UserDetail = ({ size }) => {
  const { user } = useSelector((state) => state.auth);
  console.log({ user });
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' p={3} pb={0}>
        <Avatar name={user.firstname + " " + user.lastname} size={size} />
      </Flex>
      <UserName user={user} size={size} />
    </>
  );
};

export default UserDetail;
