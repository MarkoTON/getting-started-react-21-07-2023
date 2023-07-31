import { createStore } from 'redux';

import rootReducer from './reducer'; // it will call in folder /reducer/index.js - inicijalno zato nije stavljeno ./reducer/index.js

export default createStore(rootReducer);