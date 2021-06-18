import { Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import moment from "moment";
moment.locale();

const PostFullDate = () => {
  const { state } = useLocation();

  const POST = state.data;
  console.log({ state });
  return (
    <>
      <Flex pl={4}>
        <Text m={3} alignSelf='flex-start' fontSize='sm'>
          {moment(POST.updatedAt).format("lll")}
        </Text>
      </Flex>
    </>
  );
};

export default PostFullDate;
