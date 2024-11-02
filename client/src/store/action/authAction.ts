// src/actions/authActions.ts
import { Dispatch } from 'redux';
import { login, register, logout } from '../../hooks/authAPIs.ts';
import { Credentials, RegisterData } from '../../type';
import { AuthActionTypes, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from './authActionTypes.ts';

export const loginUser = (credentials: Credentials) => async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
        const response = await login(credentials);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.user,
        });
    } catch (error) {
        console.error('Login failed:', error);
    }
};

export const registerUser = (userData: RegisterData) => async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
        const response = await register(userData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.user,
        });
    } catch (error) {
        console.error('Registration failed:', error);
    }
};

export const logoutUser = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
        await logout();
        dispatch({ type: LOGOUT });
    } catch (error) {
        console.error('Logout failed:', error);
        dispatch({ type: LOGOUT });
    }
};
