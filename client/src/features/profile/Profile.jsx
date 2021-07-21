import {
  Headers,
  Loader,
  ProfileHeader,
  ProfileDetails,
  useLocation,
  useParams,
  useDispatch,
  fetchProfileDetails,
  useSelector,
  useEffect,
} from '.'

const Profile = () => {
  const {
    auth: { token },
    profile: { posts, profileStatus, profileUser },
  } = useSelector((state) => state)
  const { state: userFromState } = useLocation()
  const dispatch = useDispatch()
  const { username } = useParams()

  const user = userFromState ? userFromState : profileUser
  useEffect(() => {
    if (user.username !== username) {
      dispatch(fetchProfileDetails({ token, username }))
    }
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Loader status={profileStatus} />
      <ProfileHeader user={user} posts={posts} />
      <ProfileDetails user={user} />
      <Headers />
    </>
  )
}

export default Profile
