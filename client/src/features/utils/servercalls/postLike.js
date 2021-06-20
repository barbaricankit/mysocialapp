import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const likePost = async (postData) => {
  const { token, postId } = postData;
  try {
    const response = await axios({
      method: "post",
      url: `${URL}/liked/post/${postId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const likeComment = async (postData) => {
  const { token, commentId } = postData;
  try {
    const response = await axios({
      method: "post",
      url: `${URL}/liked/comment/${commentId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
