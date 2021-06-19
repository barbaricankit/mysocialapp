import { Flex, Text } from "@chakra-ui/react";
import moment from "moment";
moment.locale();

const PostFullDate = ({ post }) => {
  return (
    <>
      <Flex>
        <Text m={3} alignSelf='flex-start' fontSize='sm'>
          {moment(post?.createdAt).format("lll")}
        </Text>
      </Flex>
    </>
  );
};

export default PostFullDate;
