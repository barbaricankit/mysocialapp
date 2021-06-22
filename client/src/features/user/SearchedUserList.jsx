import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserToFollow, UsersToFollowDetails, Loader } from ".";

const SearchedUserList = () => {
  const {
    user: { status, searchedUserResult },
    auth: { token },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Loader status={status} />

      <Box>
        {searchedUserResult?.map((user) => (
          <Box key={user._id}>
            <UsersToFollowDetails user={user} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SearchedUserList;
