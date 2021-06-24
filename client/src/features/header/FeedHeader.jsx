import { ColorModeSwitcher,Flex, Text, HStack,Avatar,useTheme,useSelector,Box } from ".";

const FeedHeader = ({ bg }) => {
  const { onToggle, mobileView, userProfileRef } = useTheme();
  const { user } = useSelector((state) => state.auth);
  
  return (
    <Box position='sticky' top='0' zIndex={1}>
      <Flex
        justifyContent='space-between'
        p={2}
        pl={3}
        mt={0}
        h='3.5rem'
        w='100%'
        bg={bg}
        alignItems='center'>
        <HStack>
          <Avatar
            ref={userProfileRef}
            size='sm'
            name={user.fullname}
            onClick={() => mobileView && onToggle()}
          />
          <Text fontWeight='1000' fontSize='xl' pl={3}>
            Home
          </Text>
        </HStack>
        <ColorModeSwitcher />
      </Flex>
      <hr />
    </Box>
  );
};
export default FeedHeader;
