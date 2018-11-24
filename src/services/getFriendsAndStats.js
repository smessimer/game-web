import Api from './api';

export default (steamUserId) => {
  return Api.get(`/steam_users/${steamUserId}/steam_friends`, true)
    .catch(err => {
      console.log('Error fetching friends: ', err)
    });
}