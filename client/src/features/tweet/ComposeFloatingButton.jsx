import "./tweet.css";

import { MdEdit } from "react-icons/md";
import { Box } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";

const ComposeFloatingButton = () => {
  return (
    <NavLink to='/compose/tweet'>
      <Box className='compose_btn'>
        <MdEdit color='white' fontSize='x-large' />
      </Box>
    </NavLink>
  );
};

export default ComposeFloatingButton;
