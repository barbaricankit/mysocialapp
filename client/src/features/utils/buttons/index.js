import Comments from './Comment';
import Likes from './Like';
import Retweets from './Retweet';
import Bookmark from './Bookmark';
import { useTheme } from '../../theme-context/theme.context';
import { bookmarkPost, likePost, likeComment } from '../servercalls';
import { userBookmarkedPost } from '../../auth/authSlice';
import { updateBookmarkStatus } from '../../profile/profileSlice';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { FaRegBookmark } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegComment } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { userLikedFeedPost } from '../../feed/feedSlice';
import { userLikedComment } from '../../posts/postSlice';
import { userLikedProfilePost } from '../../profile/profileSlice';

export {
	Comments,
	Likes,
	Bookmark,
	Retweets,
	bookmarkPost,
	likePost,
	likeComment,
	useTheme,
	userBookmarkedPost,
	updateBookmarkStatus,
	userLikedFeedPost,
	userLikedComment,
	userLikedProfilePost,
	Box,
	Flex,
	Text,
	FaRegBookmark,
	FaRegComment,
	AiOutlineRetweet,
	FaRegHeart,
	useDispatch,
	useSelector,
	NavLink,
	useParams
};
