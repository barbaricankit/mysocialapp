import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMediaQuery } from "@chakra-ui/media-query";
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [windowWidth] = useMediaQuery("(max-width:500px)");
  const { isOpen, onToggle } = useDisclosure();
  const bodyBg = useColorModeValue("white", "rgb(21, 32, 43)");
  const opaqueBg = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(91, 112, 131, 0.4)"
  );
  const btnColor = useColorModeValue("rgb(91, 112, 131)", "rgb(136, 153, 166)");
  return (
    <ThemeContext.Provider
      value={{ windowWidth, isOpen, onToggle, bodyBg, btnColor, opaqueBg }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
