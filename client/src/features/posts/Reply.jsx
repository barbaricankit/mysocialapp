import { Avatar, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useTheme } from "../../theme-context/theme.context";

const Reply = () => {
  const { user } = useSelector((state) => state.auth);
  const { secondaryColor, borderColor } = useTheme();
  return (
    <>
      <Flex p={3} justifyContent='space-between'>
        <Avatar name={user.firstname + " " + user.lastname} />
        <Textarea
          placeholder='Tweet your reply'
          outline='none'
          border='none'
          _focus='none'
        />
        <Button>Reply</Button>
      </Flex>
      <Box
        className='horizontal_line'
        bg={secondaryColor}
        borderBottomColor={borderColor}
        borderTopColor={borderColor}></Box>
    </>
  );
};

export default Reply;
