import Api from './api';

export const createPost = (caption, media, userId) => {
  return Api.post('/posts',
    {
      caption: caption,
      media_url: media,
      user_id: userId
    },
  true);
}