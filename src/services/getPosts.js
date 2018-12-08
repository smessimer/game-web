import Api from './api';

export default async (userId) => {
  try {
    const postsList = await Api.get(`/posts?user_id=${userId}`, true);
    console.log("POSTS: ", postsList);
    return postsList;
  } catch (err) {
    console.log('Error getting posts: ', err);
    throw err;
  }
}