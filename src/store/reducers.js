import { combineReducers } from 'redux';

import {
  SET_USER,
  SET_STEAM_USER,
  SET_LOGGED_IN,
} from './actions';

const user = (state = {}, action) => {
  switch (action.type) {

    case SET_USER:
      return action.payload;

    default:
      return state;
  }
};

const steamUser = (state = {}, action) => {
  console.log('action: ', action)
  switch (action.type) {

    case SET_STEAM_USER:
      return action.payload;

    default:
      return state;
  }
};

const auth = (state = false, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return action.loggedIn;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  steamUser,
  auth,
});