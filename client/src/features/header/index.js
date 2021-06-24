import ColorModeSwitcher from './ColorModeSwitcher';
import FeedHeader from './FeedHeader';
import { Flex, Text, HStack } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { useTheme } from '../theme-context/theme.context';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export {
	ColorModeSwitcher,
	FeedHeader,
	Flex,
	Text,
	HStack,
	Avatar,
	useTheme,
	useSelector,
	Box,
	useColorMode,
	useColorModeValue,
	IconButton,
	FaMoon,
	FaSun
};
