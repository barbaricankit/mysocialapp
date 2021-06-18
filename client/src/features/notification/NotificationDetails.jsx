import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import { Avatar, Box, Text } from "@chakra-ui/react";

const NotificationDetails = () => {
  const { notifications } = useSelector((state) => state.notification);

  const notificationDetails = (notification) => {
    const name = `${notification.user.firstname} ${notification.user.lastname}`;
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
    }
    return (
      <Box>
        <strong>{name}</strong> followed you
      </Box>
    );
  };

  return (
    <>
      {notifications?.notifications?.map((notification) => (
        <Box key={notification._id}>
          <Flex p={3} flexDir='column'>
            <Avatar
              size='sm'
              name={
                notification.user.firstname + " " + notification.user.lastname
              }
            />
            <Text mt={2}>{notificationDetails(notification)}</Text>
            <Text mt={2}>{notification.post.description}</Text>
          </Flex>
          <hr />
        </Box>
      ))}
    </>
  );
};

export default NotificationDetails;
