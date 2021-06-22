import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const NotificationHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex alignItems='center' p={2} pt={4} w='100%'>
        <BiArrowBack fontSize='x-large' onClick={() => navigate("/")} />

        <Text fontSize='large' ml={3} fontWeight='700'>
          Notifications
        </Text>
      </Flex>
      <hr />
    </>
  );
};

export default NotificationHeader;
