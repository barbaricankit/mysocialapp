import { Box } from '.';
export const notificationType = (notification) => {
	const name = `${notification.user.fullname}`;
	if (notification.notification_type === 'POST_TYPE') {
		return (
			<Box>
				Recent tweet from <strong>{name}</strong>
			</Box>
		);
	} else if (notification.notification_type === 'LIKED_TYPE') {
		return (
			<Box>
				<strong>{name}</strong> liked your tweet
			</Box>
		);
	} else if (notification.notification_type === 'COMMENT_TYPE') {
		return (
			<Box>
				<strong>{name}</strong> commented on your post
			</Box>
		);
	} else if (notification.notification_type === 'FOLLOWER_TYPE') {
		return (
			<Box>
				<strong>{name}</strong> followed you
			</Box>
		);
	}
};
