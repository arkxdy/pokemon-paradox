// src/components/Login.tsx
import { loginUser } from '@app/store/action/authAction';
import { AppDispatch, useAppDispatch } from '@app/store/store';
import { Credentials } from '@app/type';
import React, { useState } from 'react';

const Signin: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>(); // Use AppDispatch here
    const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Signin;
