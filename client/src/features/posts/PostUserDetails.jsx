import { Flex, Text } from "@chakra-ui/layout";
import { useTheme } from "../../theme-context/theme.context";
import { UserName } from "../navigation";
import UserAvatar from "../utils/UserAvatar";

const PostUserDetails = ({ post }) => {
  const { btnColor } = useTheme();
  return (
    
       <Flex m={2} alignItems='center'>
          <UserAvatar name={post?.user?.fullname} />
         

          <UserName user={post?.user} />
              </Flex>
     
   
  );
};
export default PostUserDetails;
