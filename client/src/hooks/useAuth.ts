// // src/features/auth/authHooks.ts
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useDispatch } from 'react-redux';
// import { setUser, clearUser } from './authSlice';
// import { login, logout, register } from '../../api/authAPI';
// import { Credentials, RegisterData, User } from '../../types/authTypes';

// // Hook for login
// export const useLogin = () => {
//     const dispatch = useDispatch();
//     return useMutation(
//         async (credentials: Credentials) => {
//             const response = await login(credentials);
//             return response.user;
//         },
//         {
//             onSuccess: (user: User) => {
//                 dispatch(setUser(user));
//             },
//             onError: (error) => {
//                 console.error("Login failed:", error);
//             },
//         }
//     );
// };

// // Hook for register
// export const useRegister = () => {
//     const dispatch = useDispatch();
//     return useMutation(
//         async (userData: RegisterData): Promise<any> => {
//             const response = await register(userData);
//             return response.user;
//         },
//         {
//             onSuccess: (user: User) => {
//                 dispatch(setUser(user));
//             },
//             onError: (error) => {
//                 console.error("Registration failed:", error);
//             },
//         }
//     );
// };

// // Hook for logout
// export const useLogout = () => {
//     const dispatch = useDispatch();
//     const queryClient = useQueryClient();
//     return useMutation(
//         async () => {
//             await logout();
//         },
//         {
//             onSuccess: () => {
//                 dispatch(clearUser());
//                 queryClient.clear();
//             },
//             onError: (error) => {
//                 console.error("Logout failed:", error);
//             },
//         }
//     );
// };
