import { Flex } from "@chakra-ui/layout";
import { useTheme } from "../../theme-context/theme.context";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { UserDetail, NavFooter, NavDetails, NavHeader, TweetButton } from ".";

const Navigation = () => {
  const {
    mobileView,
    tabView,
    bodyBg,
    onToggle,
    onClose,
    isOpen,
    navRef,
    userProfileRef,
  } = useTheme();

  useEffect(() => {
    if (mobileView && isOpen) {
      document.addEventListener("click", (e) => {
        if (
          navRef.current &&
          !navRef.current.contains(e.target) &&
          userProfileRef.current &&
          !userProfileRef.current.contains(e.target)
        ) {
          onClose();
        }
      });
    }
  }, [mobileView, onToggle, isOpen, onClose, navRef, userProfileRef]);
  const navWidth = () => {
    if (mobileView) return "80%";
    else if (tabView) {
      return "100%";
    }
    return "4rem";
  };

  return (
    <Box pos='sticky' top='0' zIndex={3}>
      <Flex
        flexDir='column'
        ref={navRef}
        w={navWidth()}
        bg={bodyBg}
        p={2}
        minH='100vh'>
        {mobileView && <NavHeader />}

        <NavDetails />
        {tabView && <TweetButton />}
        {tabView && <UserDetail />}
      </Flex>
    </Box>
  );
};

export default Navigation;
