import { Home, BookMarks, Explore, Notifications, Profile, Logout } from './buttons/index';
import Navigation from './Navigation';
import NavDetails from './NavDetails';
import FollowersAndFollowing from './FollowersAndFollowing';
import UserName from './UserName';
import NavHeader from './NavHeader';
import UserDetail from './UserDetail';
import NavFooter from './NavFooter';
import BrowserNav from './BrowserNav';
import BookMarksPage from './BookMarksPage';
import { SearchFloatingButton } from '../user';
import { TweetButton } from '../tweet';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { BookmarkPosts } from '../profile/index';
import { useEffect } from 'react';
import { useTheme } from '../index';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiChatSmileFill } from 'react-icons/ri';
import { Stack } from '@chakra-ui/layout';
import { userClickedLogOut } from '../auth/authSlice';
import { IoIosLogOut } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import { Avatar } from '@chakra-ui/avatar';

export {
	Home,
	BookMarks,
	Logout,
	Explore,
	Notifications,
	Profile,
	NavDetails,
	FollowersAndFollowing,
	SearchFloatingButton,
	UserName,
	NavHeader,
	UserDetail,
	NavFooter,
	TweetButton,
	BrowserNav,
	Navigation,
	BookMarksPage,
	BookmarkPosts,
	useNavigate,
	BiArrowBack,
	Box,
	Flex,
	Text,
	Heading,
	useEffect,
	useTheme,
	NavLink,
	useSelector,
	useDispatch,
	RiChatSmileFill,
	FaTimes,
	Stack,
	userClickedLogOut,
	IoIosLogOut,
	Avatar
};
