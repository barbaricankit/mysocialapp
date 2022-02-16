import {
	initialProfileDetails,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	EditProfileFooter,
	useDispatch,
	useSelector,
	useEffect,
	UpdateFirstName,
	UpdateLastName,
	UpdateEmail,
	UpdateBio
} from '.';

const EditProfileModal = ({ isOpen, onClose }) => {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (isOpen) {
				dispatch(initialProfileDetails({ user }));
			}
		}, //eslint-disable-next-line
		[ isOpen ]
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>
					<Text>Edit Profile</Text>
				</ModalHeader>
				<ModalBody>
					<UpdateFirstName />
					<UpdateLastName />
					<UpdateEmail />
					<UpdateBio />
				</ModalBody>
				<EditProfileFooter onClose={onClose} />
			</ModalContent>
		</Modal>
	);
};

export default EditProfileModal;
