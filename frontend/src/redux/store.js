// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers';

// export default createStore(rootReducer);
export default configureStore({reducer: rootReducer});