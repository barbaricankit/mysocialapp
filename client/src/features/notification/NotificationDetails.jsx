import { useSelector, Flex, Avatar, Box, Text, NavLink ,notificationType} from ".";


const NotificationDetails = () => {
  const { notifications } = useSelector((state) => state.notification);
  
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
            <Text mt={2}>{notificationType(notification)}</Text>
            <Text mt={2} fontSize="sm">{notification.post.description}</Text>
          </Flex>
          <hr />
        </Box></NavLink>
      ))}
    </>
  );
};

export default NotificationDetails;
