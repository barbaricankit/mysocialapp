import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
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
        <Route path='/' element={<BrowserFeed />} />
        <Route path='/explorepeople' element={<UsersToFollow />} />
        <Route path='/:username' element={<Profile />} />
        <Route path='/:username/status/:id' element={<Post />} />
        <Route path='/:userId/notifications' element={<Notifications />} />
        <Route path='/:username/followers' element={<Followers />} />
        <Route path='/:username/following' element={<Following />} />
      </Routes>
    </Box>
  );
};

export default BrowserMainPage;
