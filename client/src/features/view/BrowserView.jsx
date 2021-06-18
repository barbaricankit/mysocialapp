import { Box, Grid } from "@chakra-ui/react";
import { BrowserLeftSideBar, BrowserRightSideBar, BrowserMainPage } from ".";

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

//<PrivateRoute path="/feed" element={<BrowserView element={<BrowserFeed />} />} />
