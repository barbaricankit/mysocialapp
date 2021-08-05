import {
  Headers,
  Loader,
  ProfileHeader,
  ProfileDetails,
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
  const dispatch = useDispatch()
  const { username } = useParams()

  const user = profileUser.username === username ? profileUser : null

  useEffect(() => {
    if (!user && profileStatus === 'idle') {
      dispatch(fetchProfileDetails({ token, username }))
    }
    //eslint-disable-next-line
  }, [user])

  return (
    <>
      <Loader status={profileStatus} />
      {user && (
        <>
          <ProfileHeader user={user} posts={posts} />
          <ProfileDetails user={user} />
          <Headers user={user} />
        </>
      )}
    </>
  )
}

export default Profile
