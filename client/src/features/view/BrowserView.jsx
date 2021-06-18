import { Grid } from "@chakra-ui/react";
import { BrowserLeftSideBar, BrowserRightSideBar, BrowserMainPage } from ".";

const BrowserView = () => {
  return (
    <Grid templateColumns='1fr 1.5fr 1fr'>
      <BrowserLeftSideBar />
      <BrowserMainPage />
      <BrowserRightSideBar />
    </Grid>
  );
};

export default BrowserView;
