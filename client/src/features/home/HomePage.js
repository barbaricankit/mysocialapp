import { Box } from "@chakra-ui/layout";
import { useTheme } from "../../localisation-context/localisation.context";
import Header from "../header/Header";
import Posts from "./Posts";

const HomePage = () => {
  const { windowWidth, isOpen, bodyBg, opaqueBg } = useTheme();

  const background = isOpen ? opaqueBg : bodyBg;

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
          <Header bg={background} />
          <hr />
          <Posts bg={background} />
        </Box>
      )}
    </>
  );
};
export default HomePage;
