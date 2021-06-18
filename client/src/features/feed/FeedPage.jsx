import { Box } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/transition";
import { Feeds } from ".";
import { useTheme } from "../../theme-context/theme.context";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import ComposeFloatingButton from "../tweet/ComposeFloatingButton";
const FeedPage = () => {
  const { mobileView, isOpen, bodyBg, opaqueBg, tabView } = useTheme();

  const background = isOpen ? opaqueBg : bodyBg;

  return (
    <>
      {mobileView && (
        <Slide direction='left' in={isOpen} className='nav_slide'>
          <Navigation />
        </Slide>
      )}

      <Box ml={!mobileView & !tabView ? "4rem" : "0"}>
        <Header bg={background} />
        <hr />
        <Feeds bg={background} />
      </Box>

      {mobileView && <ComposeFloatingButton />}
    </>
  );
};
export default FeedPage;
