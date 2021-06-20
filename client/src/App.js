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
import {
  BrowserFeed,
  Followers,
  Following,
  PrivateRoute,
  UsersToFollow,
} from "./features/view";
import { Notifications, Profile } from "./features/view/index";
import { Post } from "./features/posts/index";
import BookMarksPage from "./features/navigation/BookMarksPage";

function App() {
  const { mobileView, tabView } = useTheme();
  const bg = useColorModeValue("light", "rgba(0,0,0,1.00)");

  return (
    <Box className='App' bg={bg}>
      {mobileView && <MobileView />}
      {tabView && (
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <PrivateRoute
            path='/feed'
            element={<BrowserView element={<BrowserFeed />} />}
          />
          <PrivateRoute
            path='/explorepeople'
            element={<BrowserView element={<UsersToFollow />} />}
          />
          <PrivateRoute
            path='/:username'
            element={<BrowserView element={<Profile />} />}
          />
          <PrivateRoute
            path='/:username/status/:id'
            element={<BrowserView element={<Post />} />}
          />
          <PrivateRoute
            path='/:userId/notifications'
            element={<BrowserView element={<Notifications />} />}
          />
          <PrivateRoute
            path='/:username/followers'
            element={<BrowserView element={<Followers />} />}
          />
          <PrivateRoute
            path='/:username/following'
            element={<BrowserView element={<Following />} />}
          />
          <PrivateRoute
            path='/:username/bookmarks'
            element={<BrowserView element={<BookMarksPage />} />}
          />
        </Routes>
      )}
    </Box>
  );
}

export default App;
