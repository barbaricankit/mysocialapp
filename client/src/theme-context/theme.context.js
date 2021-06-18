import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMediaQuery } from "@chakra-ui/media-query";
import { createContext, useContext, useRef } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mobileView, tabView] = useMediaQuery([
    "(max-width:500px)",
    "(min-width:550px)",
  ]);
  const [browserView] = useMediaQuery(["(display-mode: browser)"]);
  console.log({ browserView });
  console.log({ tabView, mobileView });
  const navRef = useRef(null);
  const userProfileRef = useRef(null);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const bodyBg = useColorModeValue("white", "rgba(0,0,0,1.00)");
  const opaqueBg = useColorModeValue("#999", "rgb(52 64 78)");
  const btnColor = useColorModeValue("rgb(91, 112, 131)", "rgb(136, 153, 166)");
  const borderColor = useColorModeValue(
    "rgb(235, 238, 240)",
    "rgb(47, 51, 54)"
  );
  const secondaryColor = useColorModeValue(
    "rgb(247, 249, 250)",
    "rgb(21, 24, 28)"
  );
  return (
    <ThemeContext.Provider
      value={{
        navRef,
        userProfileRef,
        mobileView,
        tabView,
        isOpen,
        onToggle,
        bodyBg,
        btnColor,
        opaqueBg,
        onClose,
        borderColor,
        secondaryColor,
        browserView,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
