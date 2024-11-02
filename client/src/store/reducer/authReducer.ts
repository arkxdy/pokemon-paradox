// src/reducers/authReducer.ts
import { AuthState } from '@app/type';
import { AuthActionTypes, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from '../action/authActionTypes';

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
