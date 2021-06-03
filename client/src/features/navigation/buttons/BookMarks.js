import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegBookmark } from "react-icons/fa";

const BookMarks = ({ windowWidth, color }) => {
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={color} icon={<FaRegBookmark />} size='lg' />
      {windowWidth && <Text>BookMarks</Text>}
    </Flex>
  );
};

export default BookMarks;
