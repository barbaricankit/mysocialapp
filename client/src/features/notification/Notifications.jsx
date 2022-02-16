import {
	Loader,
	Error,
	useDispatch,
	useSelector,
	useEffect,
	NotificationHeader,
	NotificationDetails,
	fetchNotificatons
} from '.';

const Notifications = () => {
	const { status } = useSelector((state) => state.notification);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchNotificatons(token));
		}
	});
	
	return (
		<>
			<Loader status={status} />
			<Error status={status} />
			<NotificationHeader />
			<NotificationDetails />
		</>
	);
};

export default Notifications;
