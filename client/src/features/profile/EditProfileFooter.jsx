import { Button, ModalFooter, useDispatch, useSelector, updateProfile } from '.'
import { updatePostUserDetails } from '../feed/feedSlice'
import { updateProfileUser } from './profileSlice'

const EditProfileFooter = ({ onClose }) => {
  const {
    auth: { user, token },
    profile: { firstname, lastname, email, bio },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  const editProfile = () => {
    const userDetails = { firstname, lastname, email, bio }
    if (
      user.firstname !== firstname ||
      user.lastname !== lastname ||
      user.email !== email ||
      user.bio !== bio
    ) {
      dispatch(updateProfile({ token, user: userDetails }))
      dispatch(updateProfileUser({ user: userDetails }))
      dispatch(updatePostUserDetails({ user: userDetails, userId: user._id }))
    }
    onClose()
  }
  return (
    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={() => editProfile()}>
        Save
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
  )
}

export default EditProfileFooter
