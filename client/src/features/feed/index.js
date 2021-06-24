import { Comments, Likes, Retweets, Bookmark } from '../utils/buttons';
import { Box } from '@chakra-ui/layout';
import { Slide } from '@chakra-ui/transition';
import FeedPage from './FeedPage';
import Feeds from './Feeds';
import { useTheme } from '../index';
import { FeedHeader } from '../header/index';
import { Navigation } from '../navigation/index';
import { ComposeFloatingButton } from '../tweet/index';
import { SearchFloatingButton } from '../user/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader } from '../index';
import { Post } from '../utils/index';
import { fetchFeeds } from './feedSlice';

export {
	SearchFloatingButton,
	ComposeFloatingButton,
	Navigation,
	Comments,
	Likes,
	Retweets,
	Bookmark,
	FeedPage,
	Feeds,
	Box,
	Slide,
	useTheme,
	FeedHeader,
	useDispatch,
	useSelector,
	useEffect,
	Error,
	Loader,
	Post,
	fetchFeeds
};
