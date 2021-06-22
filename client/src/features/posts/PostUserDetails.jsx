import { Flex } from "@chakra-ui/layout";
import { UserName } from "../navigation";
import UserAvatar from "../utils/UserAvatar";

const PostUserDetails = ({ post }) => {

  return (
       <Flex m={2} alignItems='center'>
          <UserAvatar name={post?.user?.fullname} />
          <UserName user={post?.user} />
        </Flex>
  );
};
export default PostUserDetails;
