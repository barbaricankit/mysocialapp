import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { FaPlusCircle } from "react-icons/fa";

const UserName = () => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' p={1}>
        <Avatar name='Ankit Singhania' size='md' />
        <IconButton bg='none' icon={<FaPlusCircle />} size='lg' />
      </Flex>
      <Box p={1}>
        <Text fontWeight='600' fontSize='md'>
          Ankit Singhania
        </Text>
        <Text fontWeight='300' fontSize='md'>
          @ankitCoder1993
        </Text>
      </Box>
    </>
  );
};

export default UserName;
