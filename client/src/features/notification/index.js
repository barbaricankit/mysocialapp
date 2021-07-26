import NotificationDetails from './NotificationDetails'
import NotificationHeader from './NotificationHeader'
import Notifications from './Notifications'
import { useSelector, useDispatch } from 'react-redux'
import { Flex } from '@chakra-ui/layout'
import { Avatar, Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { notificationType } from './notificationType'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useLocation } from 'react-router-dom'
import { Loader, Error } from '../index'
import { useEffect } from 'react'
import { fetchNotificatons } from './notificationSlice'
export {
  NotificationHeader,
  NotificationDetails,
  Notifications,
  useSelector,
  useDispatch,
  useEffect,
  Flex,
  Avatar,
  Box,
  Text,
  NavLink,
  notificationType,
  BiArrowBack,
  useNavigate,
  useLocation,
  Loader,
  Error,
  fetchNotificatons,
}
