import { Box, Flex, Heading } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

const UsersToFollowHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems='center' p={2} pt={4} w='100%'>
        <BiArrowBack fontSize='x-large' onClick={() => navigate("/")} />
        <Box pl={4}>
          <Heading size='md' m={2}>
            You might follow
          </Heading>
        </Box>
      </Flex>
      <hr />
    </>
  );
};

export default UsersToFollowHeader;
