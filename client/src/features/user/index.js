import FollowButton from './FollowButton';
import { fetchUserToFollow, postFollowedUser } from './userSlice';
import UsersToFollowDetails from './UsersToFollowDetails';
import UsersToFollowHeader from './UserToFollowHeader';
import SearchFloatingButton from './SearchFloatingButton';
import { Loader, Error, useTheme } from '..';
import { UserAvatar } from '../utils';
import { UserName } from '../navigation';
import { Input, Box, Button, useToast, Text, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFollowing } from '../auth/authSlice';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/layout';
import FollowerFollowingHeader from './FollowerFollowingHeader';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useCallback, useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { debounce } from 'lodash';
import { getSearchedUsers } from './userSlice';
import SearchBox from '../user/SearchBox';
import SearchedUserList from '../user/SearchedUserList';
import SearchHeader from './SearchHeader';
import FollowerFollowing from './FollowerFollowing';
import UsersToFollow from './UsersToFollow';
import SearchPage from './SearchPage';
import DiscoverPeople from './DiscoverPeople';
export {
	SearchBox,
	SearchPage,
	SearchedUserList,
	SearchHeader,
	DiscoverPeople,
	FollowerFollowingHeader,
	FollowerFollowing,
	FollowButton,
	UsersToFollowDetails,
	UsersToFollow,
	fetchUserToFollow,
	postFollowedUser,
	Loader,
	Error,
	UsersToFollowHeader,
	SearchFloatingButton,
	UserAvatar,
	UserName,
	Box,
	Button,
	Text,
	Heading,
	NavLink,
	Flex,
	useToast,
	useDispatch,
	useSelector,
	useEffect,
	useNavigate,
	useTheme,
	BiArrowBack,
	useCallback,
	useState,
	BiSearchAlt2,
	debounce,
	getSearchedUsers,
	updateUserFollowing,
	Input
};
