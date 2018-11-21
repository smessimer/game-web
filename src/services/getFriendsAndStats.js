import Api from './api';

export default (steamUserId) => {
  return Api.get(`/steam_users/${steamUserId}/steam_friends`)
    .then(friends => {
      console.log('friends: ', friends);
    })
    .catch(err => {
      console.log('gfas err: ', err);
    });
}