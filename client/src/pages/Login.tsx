// src/components/Login.tsx
import { loginUser } from '@app/store/action/authAction';
import { AppDispatch } from '@app/store/store';
import { Credentials } from '@app/type';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch here
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

export default Login;
