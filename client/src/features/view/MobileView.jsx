import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  FeedPage,
  AddNewTweet,
  PrivateRoute,
  Login,
  SignIn,
  Post,
  SignUp,
  Notifications,
  Followers,
  Following,
  UsersToFollow,
  Profile,
} from ".";

const MobileView = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <PrivateRoute path='/feed' element={<FeedPage />} />
      <PrivateRoute path='/explorepeople' element={<UsersToFollow />} />
      <PrivateRoute path='/:username' element={<Profile />} />
      <PrivateRoute path='/compose/tweet' element={<AddNewTweet />} />
      <PrivateRoute path='/:username/status/:id' element={<Post />} />
      <PrivateRoute path='/:userId/notifications' element={<Notifications />} />
      <PrivateRoute path='/:username/followers' element={<Followers />} />
      <PrivateRoute path='/:username/following' element={<Following />} />
    </Routes>
  );
};

export default MobileView;
