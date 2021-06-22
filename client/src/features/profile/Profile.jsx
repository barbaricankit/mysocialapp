import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { ProfileHeader, ProfileDetails } from ".";
import Loader from "../utils/Loader";
import Headers from "./Headers";
import { fetchProfileDetails } from "./profileSlice";

const Profile = () => {
  const {
    auth: { token },
    profile: { posts, profileStatus,profileUser },
  } = useSelector((state) => state);
  const { state: userFromState } = useLocation();
  const dispatch = useDispatch();
  const { username } = useParams();
  const user=userFromState?userFromState:profileUser
  useEffect(() => {
    if (user.username!==username) {
      dispatch(fetchProfileDetails({ token, username }));
    }
    //eslint-disable-next-line
  }, []);
  console.log({profile:user,profileUser})
  return (
    <>
      <Loader status={profileStatus} />
      <ProfileHeader user={user} posts={posts} />
      <ProfileDetails user={user} />
      <Headers />
    </>
  );
};

export default Profile;
