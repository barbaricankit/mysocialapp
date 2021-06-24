import FirstName from './input_fields/FirstName';
import Email from './input_fields/Email';
import LastName from './input_fields/LastName';
import UserName from './input_fields/UserName';
import Password from './input_fields/Password';
import ReEnterPassword from './input_fields/ReEnterPassword';
import SignInButton from './buttons/SignIn';
import SignUpButton from './buttons/SignUp';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/react';
import { RiChatSmileFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Loader, Error } from '../index';
import { useTheme } from '../index';
import { Box } from '@chakra-ui/react';
import {
	fetchSignInCall,
	fetchSignUpCall,
	enteredEmail,
	enteredFirstname,
	enteredLastname,
	enteredPassword,
	reEnteredPassword,
	enteredUsername
} from './authSlice';
import Login from './Login';
import SignIn from './Signin';
import SignUp from './Signup';

export {
	Button,
	Flex,
	Heading,
	Text,
	Box,
	Login,
	SignIn,
	SignUp,
	RiChatSmileFill,
	useSelector,
	useTheme,
	NavLink,
	useNavigate,
	useLocation,
	useEffect,
	FirstName,
	LastName,
	Email,
	UserName,
	Password,
	ReEnterPassword,
	SignInButton,
	SignUpButton,
	Loader,
	Error,
	fetchSignInCall,
	fetchSignUpCall,
	enteredEmail,
	enteredFirstname,
	enteredLastname,
	enteredPassword,
	reEnteredPassword,
	enteredUsername
};
