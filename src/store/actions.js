/*
 * action types
 */

 export const SET_USER = 'SET_USER';
 export const SET_LOGGED_IN = 'SET_LOGGED_IN';

 /*
  * action creators
  */

  export function setUser(user) {
    return { type: SET_USER, payload: user };
  };

  export function setLoggedIn(loggedIn) {
    return { type: SET_LOGGED_IN, loggedIn };
  };