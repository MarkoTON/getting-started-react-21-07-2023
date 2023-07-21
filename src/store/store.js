// // configureStore je zamena za - createStore 
// import { configureStore } from '@reduxjs/toolkit';
// // Uvozimo recucere
// import counterReducer from './counterSlice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// });

// export default store;

import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;