import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileHeader, fetchPosts, ProfileDetails, UserPosts } from ".";

const Profile = () => {
  const { status } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts);
    }
  });
  return (
    <>
      <ProfileHeader />
      <ProfileDetails />
      <UserPosts />
    </>
  );
};

export default Profile;
