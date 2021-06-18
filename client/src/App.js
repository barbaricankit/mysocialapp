import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/Login";
import SignIn from "./features/auth/Signin";
import SignUp from "./features/auth/Signup";

import BrowserView from "./features/view/BrowserView";
import { useTheme } from "./theme-context/theme.context";
import { Box, useColorModeValue } from "@chakra-ui/react";
import MobileView from "./features/view/MobileView";
import { PrivateRoute } from "./features/view";

function App() {
  const { mobileView, tabView } = useTheme();
  const bg = useColorModeValue("light", "rgba(0,0,0,1.00)");

  return (
    <Box className='App' bg={bg}>
      {mobileView && <MobileView />}
      {tabView && <PrivateRoute path='/feed' element={<BrowserView />} />}
      {tabView && (
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
