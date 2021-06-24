import UpdateFirstName from './UpdateFirstName';
import UpdateLastName from './UpdateLastName';
import UpdateEmail from './UpdateEmail';
import UpdateBio from './UpdateBio';
import { fetchPosts, initialProfileDetails, updateFirstname, updateBio, updateEmail, updateLastname } from '../index';
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
import { useDispatch, useSelector } from 'react-redux';

export {
	UpdateFirstName,
	UpdateLastName,
	UpdateEmail,
	UpdateBio,
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
	fetchPosts,
	initialProfileDetails,
	updateFirstname,
	updateBio,
	updateEmail,
	updateLastname,
	useDispatch,
	useSelector
};
