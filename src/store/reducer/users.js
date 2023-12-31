import { ADD_USER, SET_USER_FROM_API, REMOVE_USER_FROM_STORE, FILTER_USER } from '../actionsTypes';

const initialState = {
  users: [
  ],
  filterUsers: []
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
      console.log(action.payload);
      return {
        ...state,
        users: action.payload
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

    case FILTER_USER: {
      const searchTerm = action.payload.toLowerCase();
      const filteredUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        filterUsers: filteredUsers,
      };
    }
    
    default: {
      return state;
    }
  }
}

export default users;
