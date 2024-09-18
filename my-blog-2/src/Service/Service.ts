import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(
      'https://blog-a71ae-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostId = async (id: string) => {
  try {
    const response = await axios.get(`https://blog-a71ae-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

