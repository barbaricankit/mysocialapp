import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        outline: "none",
        border: "none",
        _focus: "none",
        _active: "none",

        _hover: "none",
        _after: "none",
        _before: "none",
        _highlighted: "none",
      },
    },
  },
});

export default theme;
