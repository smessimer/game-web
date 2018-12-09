/*
 * action types
 */

 export const SET_USER = 'SET_USER';
 export const SET_STEAM_USER = 'SET_STEAM_USER';
 export const SET_LOGGED_IN = 'SET_LOGGED_IN';

 /*
  * action creators
  */

  export function setUser(user) {
    return { type: SET_USER, payload: user };
  };

  export function setSteamUser(steamUser) {
    console.log('steamUser in actions: ', steamUser)
    return { type: SET_STEAM_USER, payload: steamUser };
  };

  export function setLoggedIn(loggedIn) {
    return { type: SET_LOGGED_IN, loggedIn };
  };