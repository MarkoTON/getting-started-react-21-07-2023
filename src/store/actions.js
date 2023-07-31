import { ADD_USER, SET_USER_FROM_API, REMOVE_USER_FROM_STORE } from './actionsTypes';

export const addUser = content => ({
  type: ADD_USER,
  payload: {content}
});

export const setUserFromAPI = content => ({
  type: SET_USER_FROM_API,
  payload: {content}
});

export const removeUserFromStore = content => ({
  type: REMOVE_USER_FROM_STORE,
  payload: {content}
});


// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// export const setFilter = filter => ({
//   type: SET_FILTER,
//   payload: { filter }
// });

