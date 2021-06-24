import Home from './Home';
import BookMarks from './BookMarks';
import Explore from './Discover';
import Notifications from './Notification';
import Profile from './Profile';
import Logout from './Logout';
import { Flex, Text } from '@chakra-ui/layout';
import { FaRegBookmark } from 'react-icons/fa';
import { FaHashtag } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../index';
import { userClickedLogOut } from '../../auth/authSlice';
import { IoIosLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export {
	FaRegBookmark,
	FaRegEnvelope,
	FaRegBell,
	FaRegUser,
	Home,
	BookMarks,
	Explore,
	Notifications,
	Profile,
	Logout,
	useTheme,
	Flex,
	Text,
	useSelector,
	NavLink,
	FaHome,
	FaHashtag,
	userClickedLogOut,
	IoIosLogOut,
	useDispatch,
	useNavigate
};
