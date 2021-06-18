import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes } from "react-router-dom";
import {
  PrivateRoute,
  Post,
  Notifications,
  Followers,
  Following,
  UsersToFollow,
  Profile,
  BrowserFeed,
} from ".";

const BrowserMainPage = () => {
  return (
    <Box borderRight='1px'>
      <Routes>
        {/* <Route path='/' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} /> */}
        <PrivateRoute path='/feed' element={<BrowserFeed />} />
        <PrivateRoute path='/explorepeople' element={<UsersToFollow />} />
        <PrivateRoute path='/:username' element={<Profile />} />
        <PrivateRoute path='/:username/status/:id' element={<Post />} />
        <PrivateRoute
          path='/:userId/notifications'
          element={<Notifications />}
        />
        <PrivateRoute path='/:username/followers' element={<Followers />} />
        <PrivateRoute path='/:username/following' element={<Following />} />
      </Routes>
    </Box>
  );
};

export default BrowserMainPage;
