import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import authReducer from './reducer/authReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const reducer = combineReducers({
  // here we will be adding reducers
  auth: authReducer
})
const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Define AppDispatch here
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()



export default store;