// src/actions/authActionTypes.ts
import { User } from '../../type';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: User | null;
}

interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: User;
}

interface LogoutAction {
    type: typeof LOGOUT;
    payload?: undefined
}

export type AuthActionTypes = LoginSuccessAction | RegisterSuccessAction | LogoutAction;
