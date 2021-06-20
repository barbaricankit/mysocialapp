import { useEffect } from "react";
import { Post } from "../utils/post";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookmarkPosts } from "./profileSlice";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

const BookmarkPosts = () => {
  const {
    auth: { token },
    profile: { bookMarkStatus, bookmarkPost, error },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookMarkStatus === "idle") {
      dispatch(fetchBookmarkPosts(token));
    }
  });
  return (
    <>
      <Loader status={bookMarkStatus} />
      <Error status={bookMarkStatus} error={error} />
      {bookmarkPost?.map((post) => (
        <Post post={post} key={post._id} page='profile' />
      ))}
    </>
  );
};

export default BookmarkPosts;
