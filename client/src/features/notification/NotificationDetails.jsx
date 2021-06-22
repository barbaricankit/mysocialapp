import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotificationDetails = () => {
  const { notifications } = useSelector((state) => state.notification);

  const notificationDetails = (notification) => {
    const name = `${notification.user.fullname}`;
    if (notification.notification_type === "POST_TYPE") {
      return (
        <Box>
          Recent tweet from <strong>{name}</strong>
        </Box>
      );
    } else if (notification.notification_type === "LIKED_TYPE") {
      return (
        <Box>
          <strong>{name}</strong> liked your tweet
        </Box>
      );
    }else if(notification.notification_type === "COMMENT_TYPE"){
      return (
        <Box>
          <strong>{name}</strong> commented on your post
        </Box>)
    }else if(notification.notification_type === "FOLLOWER_TYPE"){
      return (
        <Box>
          <strong>{name}</strong> followed you
        </Box>
      );
    }
    
  };

  return (
    <>
      {notifications?.notifications?.map((notification) => (
        <NavLink to={`/${notification.user?.username}/status/${notification.post._id}`}
        state={{ path: `/${notification.user?.username}/notifications`, page:"notification" }}>
        <Box key={notification._id}>
          <Flex p={3} flexDir='column'>
            <Avatar
              size='sm'
              name={
                notification.user.fullname
              }
            />
            <Text mt={2}>{notificationDetails(notification)}</Text>
            <Text mt={2} fontSize="md">{notification.post.description}</Text>
          </Flex>
          <hr />
        </Box></NavLink>
      ))}
    </>
  );
};

export default NotificationDetails;
