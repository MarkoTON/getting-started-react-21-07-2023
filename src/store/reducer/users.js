import { ADD_USER, SET_USER_FROM_API, REMOVE_USER_FROM_STORE } from '../actionsTypes';

const initialState = {
  users: [
  ]
}

const users = (state = initialState, action) => {

  switch (action.type) {
    case ADD_USER: {
      const newUser = action.payload.content;
      return {
        ...state,
        users: [
          ...state.users,
          newUser
        ]
      }
    }
    
    case SET_USER_FROM_API: {
      const newUsers = action.payload.content;
      return {
        ...state,
        users: [
          ...state.users,
          ...newUsers
        ]
      }
    }
    
    case REMOVE_USER_FROM_STORE: {
      const userID = action.payload.content;
      
      const newUsers = state.users.filter(user => user.id !== userID)
      
      return {
        ...state,
        users: newUsers
      }
    }
    
    default: {
      return state;
    }
  }
}

export default users;
