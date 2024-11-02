// src/api/authAPI.ts
import axios from 'axios';
import { Credentials, RegisterData, User } from '../type';

type LoginResponse = { user: User };
type RegisterResponse = { user: User };

export const login = async (credentials: Credentials): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>('http://localhost:3000/api/v1/auth/login', credentials);
    return response.data;
};

export const register = async (userData: RegisterData): Promise<RegisterResponse> => {
    const response = await axios.post<RegisterResponse>('/api/register', userData);
    return response.data;
};

export const logout = async (): Promise<void> => {
    await axios.post('/api/logout');
};
