import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import Posts from "./Posts";

const HomePage = () => {
  const bg = useColorModeValue("white", "rgb(21, 32, 43)");
  const bg1 = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(91, 112, 131, 0.4)"
  );
  const showNavigation = useSelector(
    (state) => state.navigation.showNavigation
  );
  const [windowWidth] = useMediaQuery("(max-width:500px)");

  const background = showNavigation ? bg1 : bg;

  return (
    <>
      {!windowWidth && (
        <Box ml='4rem'>
          <Header bg={background} />
          <hr />
          <Posts bg={background} />
        </Box>
      )}
      {windowWidth && (
        <Box>
          <Header bg={background} windowWidth={windowWidth} />
          <hr />
          <Posts bg={background} />
        </Box>
      )}
    </>
  );
};
export default HomePage;
