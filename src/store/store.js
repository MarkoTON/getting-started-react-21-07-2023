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

import rootReducer from './reducer'; // it will call in folder /reducer/index.js - inicijalno zato nije stavljeno ./reducer/index.js

export default createStore(rootReducer);