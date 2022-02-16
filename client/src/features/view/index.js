import BrowserRightSideBar from './BrowserRightSideBar'
import BrowserLeftSideBar from './BrowserLeftSideBar'
import BrowserMainPage from './BrowserMainPage'
import BrowserFeed from './BrowserFeed'
import BrowserView from './BrowserView'
import MobileView from './MobileView'
import FeedPage from '../feed/FeedPage'
import AddNewTweet from '../tweet/AddNewTweet'
import { PrivateRoute } from '../private'
import { PostPage } from '../posts'
import { Notifications } from '../notification'
import { Followers } from '../user/followers'
import { Following } from '../user/following'
import { UsersToFollow } from '../user'
import { Profile } from '../profile'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useTheme } from '..'
import { useSelector } from 'react-redux'
import { Feeds } from '../feed'
import { FeedHeader } from '../header'
import { Login, SignIn, SignUp } from '../auth'
import { Routes, Route } from 'react-router-dom'
import { Loader } from '../'
import {
  SearchPage,
  SearchBox,
  SearchedUserList,
  DiscoverPeople,
} from '../user'
import { BookMarksPage } from '../navigation'

export {
  BrowserRightSideBar,
  BrowserLeftSideBar,
  BrowserFeed,
  BrowserView,
  MobileView,
  FeedPage,
  Text,
  Loader,
  Feeds,
  FeedHeader,
  AddNewTweet,
  SearchPage,
  DiscoverPeople,
  PrivateRoute,
  Login,
  SignIn,
  useSelector,
  SearchedUserList,
  SearchBox,
  useTheme,
  Box,
  Flex,
  PostPage,
  SignUp,
  Notifications,
  Followers,
  Following,
  UsersToFollow,
  Profile,
  BrowserMainPage,
  BookMarksPage,
  Routes,
  Route,
}
