import { ADD_USER, SET_USER_FROM_API, REMOVE_USER_FROM_STORE, FILTER_USER } from './actionsTypes';

export const addUser = content => ({
  type: ADD_USER,
  payload: {content}
});

export const setUserFromAPI = users => ({
  type: SET_USER_FROM_API,
  payload: users
});

export const removeUserFromStore = content => ({
  type: REMOVE_USER_FROM_STORE,
  payload: {content}
});


export const filterUser = filter => ({
  type: FILTER_USER,
  payload:  filter 
});

