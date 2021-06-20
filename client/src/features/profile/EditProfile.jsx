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
} from "@chakra-ui/react";
import {
  updateFirstname,
  updateBio,
  updateEmail,
  updateLastname,
  initialProfileDetails,
} from ".";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateProfile } from "../auth/authSlice";

const EditProfileModal = ({ isOpen, onClose }) => {
  const {
    auth: { user, token },
    profile: { firstname, lastname, email, bio },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log({ isOpen, onClose });
  useEffect(() => {
    if (isOpen) {
      dispatch(initialProfileDetails({ user }));
    }
    //eslint-disable-next-line
  }, [isOpen]);

  const editProfile = () => {
    const userDetails = { firstname, lastname, email, bio };
    if (
      user.firstname !== firstname ||
      user.lastname !== lastname ||
      user.email !== email ||
      user.bio !== bio
    ) {
      dispatch(updateProfile({ token, user: userDetails }));
    }
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Text>Edit Profile</Text>
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder='First name'
                value={firstname}
                onChange={(e) =>
                  dispatch(updateFirstname({ firstname: e.target.value }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder='Last name'
                value={lastname}
                onChange={(e) =>
                  dispatch(updateLastname({ lastname: e.target.value }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder='Email'
                value={email}
                onChange={(e) =>
                  dispatch(updateEmail({ email: e.target.value }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea
                placeholder='Bio'
                value={bio}
                onChange={(e) => dispatch(updateBio({ bio: e.target.value }))}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => editProfile()}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
