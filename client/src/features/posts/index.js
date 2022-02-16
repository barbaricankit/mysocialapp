import { PostFullDate } from '../utils/post';
import PostPage from './PostPage';
import PostHeader from './PostHeader';
import PostUserDetails from './PostUserDetails';
import Reply from './Reply';
import Comment from './Comment';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../utils';
import { getComments } from './postSlice';
import { Avatar, Box, Button, Flex, Textarea, Heading } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { PostDescription, PostFooter } from '../utils';
import { getPost } from './postSlice';
import { UserName } from '../navigation';
import { UserAvatar } from '../utils/index';
import { useState } from 'react';
import { useTheme } from '../index';
import { postComment } from './postSlice';
import { Loader } from '../index';
import { updateCommentCountInProfilePosts } from '../profile/profileSlice';
import { updateCommentCountInFeeds } from '../feed/feedSlice';

export {
	PostFullDate,
	PostHeader,
	PostUserDetails,
	PostPage,
	PostDescription,
	PostFooter,
	UserAvatar,
	UserName,
	Post,
	Reply,
	Comment,
	useEffect,
	useSelector,
	useDispatch,
	useState,
	useTheme,
	Loader,
	postComment,
	getComments,
	updateCommentCountInProfilePosts,
	updateCommentCountInFeeds,
	Avatar,
	Box,
	Button,
	Flex,
	Textarea,
	Heading,
	BiArrowBack,
	useLocation,
	useNavigate,
	useParams,
	moment,
	getPost
};
