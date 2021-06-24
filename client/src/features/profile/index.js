import Profile from './Profile';
import ProfileHeader from './ProfileHeader';
import Headers from './Headers';
import UserPosts from './UserPosts';
import UserDetails from './UserDetails';
import { updateProfile } from '../auth/authSlice';
import ProfileDetails from './ProfileDetails';
import BookmarkPosts from './BookmarkPosts';
import { Loader, Error } from '../index';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Post } from '../utils/post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarkPosts } from './profileSlice';
import { fetchProfileDetails } from './profileSlice';
import { UserAvatar } from '../utils/index';
import { FollowButton } from '../user';
import EditProfileModal from './EditProfileModal';
import EditProfileFooter from './EditProfileFooter';
import { FollowersAndFollowing, UserName } from '../navigation';
import { UpdateFirstName, UpdateLastName, UpdateEmail, UpdateBio } from './inputFields/index';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useDisclosure,
	Box
} from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import { BiArrowBack } from 'react-icons/bi';
import {
	fetchPosts,
	initialProfileDetails,
	updateFirstname,
	updateBio,
	updateEmail,
	updateLastname
} from './profileSlice';

export {
	UpdateFirstName,
	UpdateLastName,
	UpdateEmail,
	UpdateBio,
	BiArrowBack,
	Profile,
	ProfileHeader,
	UserPosts,
	Headers,
	fetchPosts,
	initialProfileDetails,
	fetchProfileDetails,
	EditProfileModal,
	EditProfileFooter,
	FollowersAndFollowing,
	UserName,
	ProfileDetails,
	BookmarkPosts,
	UserAvatar,
	FollowButton,
	updateFirstname,
	updateBio,
	updateEmail,
	updateLastname,
	UserDetails,
	Loader,
	Error,
	useState,
	useEffect,
	useLocation,
	useParams,
	useNavigate,
	Post,
	useDispatch,
	useSelector,
	fetchBookmarkPosts,
	updateProfile,
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useDisclosure,
	Box,
	Flex
};
