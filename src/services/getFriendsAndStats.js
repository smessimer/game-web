import Api from './api';

export default async (steamUserId) => {
  try {
    const friendsList = await Api.get(`/steam_users/${steamUserId}/steam_friends`, true);
    const friendsDetailsList = await Promise.all(friendsList.map(friend => {
      return Api.get(`/steam_users/${steamUserId}/steam_friends/${friend.steamid}`, true);
    }));
    return friendsDetailsList;
  } catch (err) {
    console.log('Error getting friends or friend details: ', err);
    throw err;
  }
}
