import { Box } from "@chakra-ui/react";
import { BrowserNav } from "../navigation";

const BrowserLeftSideBar = () => {
  return (
    <Box borderRight='1px' pl='10rem' pr='1rem'>
      <BrowserNav />
    </Box>
  );
};

export default BrowserLeftSideBar;
