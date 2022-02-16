import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const bookmarkPost = async (postData) => {
  const { token, postId } = postData;
  try {
    const response = await axios({
      method: "post",
      url: `${URL}/bookmarks/post/${postId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
