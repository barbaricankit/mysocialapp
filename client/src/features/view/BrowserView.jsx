import { Box, Grid } from "@chakra-ui/react";
import { BrowserLeftSideBar, BrowserRightSideBar } from ".";

const BrowserView = ({ element }) => {
  return (
    <Grid templateColumns='1fr 1.5fr 1fr'>
      <BrowserLeftSideBar />
      <Box borderRight='1px'>{element}</Box>
      <BrowserRightSideBar />
    </Grid>
  );
};

export default BrowserView;
