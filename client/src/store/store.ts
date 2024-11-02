import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import authReducer from './reducer/authReducer';
const reducer = combineReducers({
  // here we will be adding reducers
  auth: authReducer
})
const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Define AppDispatch here

export default store;